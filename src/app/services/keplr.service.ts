import {Inject, Injectable} from '@angular/core';
import {DOCUMENT} from "@angular/common";
import {fromBase64, fromAscii} from "@cosmjs/encoding";

import {
  AccountData,
  BroadcastMode,
  Coin,
  Keplr,
  OfflineDirectSigner,
  StdFee,
  Window as KeplrWindow
} from "@keplr-wallet/types";
import {Attribute, SigningStargateClient} from "@cosmjs/stargate";
import Long from "long";
import {Buffer} from "buffer";
import {TendermintTxTracer} from "@keplr-wallet/cosmos";
import {AccountResponse} from "../types/account";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable, Subscriber} from "rxjs";
import {TxResult} from "../util/TxResult";
import {NetworkService} from "./network.service";
import {NetworkInfo} from "../util/NetworkInfo";
import {MsgDeposit, MsgSubmitProposal} from "../../proto_ts/cosmos/gov/v1/tx";
import {TextProposal, Vote} from "../../proto_ts/cosmos/gov/v1beta1/gov";
import {SoftwareUpgradeProposal} from "../../proto_ts/cosmos/upgrade/v1beta1/upgrade";
import {VoteOption} from "../../proto_ts/cosmos/gov/v1/gov";
import {ParameterChangeProposal} from "../../proto_ts/cosmos/params/v1beta1/params";
import {CommunityPoolSpendProposal} from "../../proto_ts/cosmos/distribution/v1beta1/distribution";
import {AuthInfo, Fee, Tip, TxBody, TxRaw} from "../../proto_ts/cosmos/tx/v1beta1/tx";
import {Any} from "../../proto_ts/google/protobuf/any";
import {PubKey} from "../../proto_ts/cosmos/crypto/secp256k1/keys";
import {SignMode} from "../../proto_ts/cosmos/tx/signing/v1beta1/signing";
import {ClientUpdateProposal} from "../../proto_ts/ibc/core/client/v1/client";

declare global {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface Window extends KeplrWindow {
  }
}

export const api = <T>(url: string, init?: RequestInit): Promise<T> => {
  return fetch(url, init)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      return response.json() as Promise<T>
    })
}

@Injectable({
  providedIn: 'root'
})
export class KeplrService {

  private window: KeplrWindow | undefined;
  private offlineSigner: OfflineDirectSigner | undefined;
  public account: any | undefined;
  private stargateClient: SigningStargateClient | undefined;

  private readonly proposalsObservable: Observable<any[]>;
  private proposalsSubscriber: Subscriber<any[]> | undefined = undefined;

  public get proposals() {
    return this.proposalsObservable;
  }

  private defaultFee: StdFee = {
    amount: [
      {
        denom: 'nund',
        amount: '1000000000'
      }
    ],
    gas: '1000000'
  };

  constructor(@Inject(DOCUMENT) private document: Document, private http: HttpClient, private networkService: NetworkService) {

    this.window = this.document.defaultView as KeplrWindow;


    if (!this.window.keplr) {
      console.log('Keplr not installed');
      // TODO: Show informations about how to install Keplr
    } else {
      this.addNetwork(this.networkService.selectedNetwork).then(() => {

      });
      try {
        this.initKeplr();
      } catch (e) {
        console.log(e);
      }

    }

    this.networkService.obs.subscribe(async network => {
      await this.addNetwork(network);
      this.refreshProposalList();
    });

    this.proposalsObservable = new Observable<any[]>(observer => {
      this.proposalsSubscriber = observer;
      this.refreshProposalList();
      setInterval(() => {
        this.refreshProposalList();
      }, 1000 * 30);
    })
  }

  private initKeplr() {
    this.window?.keplr?.enable(this.networkService.selectedNetwork.chainId).then(() => {
      this.offlineSigner = this.window?.keplr?.getOfflineSigner(this.networkService.selectedNetwork.chainId);
      this.offlineSigner?.getAccounts().then((accounts: readonly AccountData[]) => {
        this.account = accounts[0];
        SigningStargateClient.connectWithSigner(
          "https://rpc.unification.chainmasters.ninja",
          this.offlineSigner as OfflineDirectSigner,
        ).then(signer => {
          this.stargateClient = signer;
        });
      });

    });
  }

  public get connected(): boolean {
    return this.offlineSigner != undefined && this.account !== undefined && this.stargateClient != undefined;
  }

  public async getProposal(id: string) {
    const path = '/cosmos/gov/v1beta1/proposals/' + id;
    return await this.http.get<any>(this.networkService.selectedNetwork.restAPIs[0].url + path).toPromise();
  }

  public refreshProposalList() {
    const path = '/cosmos/gov/v1beta1/proposals';
    let params = new HttpParams();
    params = params.append('pagination.limit', '5');

    this.http.get<any>(this.networkService.selectedNetwork.restAPIs[0].url + path, {params}).subscribe(async proposalsResponse => {
      let proposals: any[] = proposalsResponse.proposals;

      let nextKey = proposalsResponse.pagination.next_key;
      while (nextKey !== null) {
        params = params.set('pagination.key', nextKey);
        const proposalsResponse = await this.http.get<any>(this.networkService.selectedNetwork.restAPIs[0].url + path, {params}).toPromise();
        proposals.push(...proposalsResponse.proposals);
        nextKey = proposalsResponse.pagination.next_key;
      }

      proposals = proposals.sort((a, b) => {
        const dateA = new Date(a.submit_time);
        const dateB = new Date(b.submit_time);
        if (dateA.getTime() > dateB.getTime()) {
          return -1;
        }
        if (dateA.getTime() < dateB.getTime()) {
          return 1;
        }
        return 0;
      });
      this.proposalsSubscriber ? this.proposalsSubscriber.next(proposals) : undefined;
    });
  }

  public depositToProposal(proposal: any, amount: any): Observable<TxResult> {
    const depositMsg = {
      typeUrl: '/cosmos.gov.v1beta1.MsgDeposit',
      value: MsgDeposit.encode({
        proposalId: proposal.proposal_id,
        depositor: this.account?.address.toString(),
        amount: [
          {
            amount: '' + (amount * 1000000000),
            denom: 'nund'
          }
        ]
      }).finish()
    };
    let obs = new Observable<TxResult>(observer => {
      this.window?.keplr?.getKey(this.networkService.selectedNetwork.chainId).then(key => {

        if (this.window?.keplr && key) {
          this.sendMsgs(
            this.window?.keplr,
            key.bech32Address,
            [depositMsg],
            this.defaultFee
          ).subscribe(res => {
            observer.next(res);
          });
        } else {
          observer.next({success: false, errorCode: -1, errorText: 'General Error', transaction: null});
        }
      });
    });
    return obs;
  }

  private submitProposal(proposal: any, depositAmount: number): Observable<TxResult> {
    const pow = 10 ** this.networkService.selectedNetwork.stakeCurrency.coinDecimals;
    const prop: MsgSubmitProposal = {
      proposer: this.account?.address.toString(),
      initialDeposit: [
        {
          denom: this.networkService.selectedNetwork.stakeCurrency.coinMinimalDenom,
          amount: '' + (depositAmount * pow)
        }
      ],
      metadata: '',
      messages: [
        proposal
      ]
    }

    const msg = {
      typeUrl: '/cosmos.gov.v1beta1.MsgSubmitProposal',
      value: MsgSubmitProposal.encode(prop).finish()
    };

    let obs = new Observable<TxResult>(observer => {
      this.window?.keplr?.getKey(this.networkService.selectedNetwork.chainId).then(key => {

        if (this.window?.keplr && key) {
          this.sendMsgs(
            this.window?.keplr,
            key.bech32Address,
            [msg],
            this.defaultFee
          ).subscribe(res => {
            observer.next(res);
          });
        } else {
          observer.next({success: false, errorCode: -1, errorText: 'General Error', transaction: null});
        }
      });
    });
    return obs;
  }

  public submitTextProposal(title: string, text: string, initialDeposit: number): Observable<TxResult> {

    const textProposal = {
      typeUrl: '/cosmos.gov.v1beta1.TextProposal',
      value: TextProposal.encode({
        title,
        description: text
      }).finish()
    };

    return this.submitProposal(textProposal, initialDeposit);
  }

  public submitClientUpdateProposal(title: string, description: string, subjectClientId: string, substituteClientId: string, initialDeposit: number) {
    const prop = {
      typeUrl: '/ibc.core.client.v1.ClientUpdateProposal',
      value: ClientUpdateProposal.encode({
        title,
        description,
        subjectClientId,
        substituteClientId
      }).finish()
    }
    return this.submitProposal(prop, initialDeposit);
  }

  public submitSoftwareUpgradeProposal(title: string, description: string, name: string, height: number, info: string, initialDeposit: number) {

    const prop = {
      typeUrl: '/cosmos.upgrade.v1beta1.SoftwareUpgradeProposal',
      value: SoftwareUpgradeProposal.encode({
        title,
        description,
        plan: {
          name,
          time: null,
          upgradedClientState: null,
          height: BigInt(height),
          info
        }
      }).finish()
    };

    return this.submitProposal(prop, initialDeposit)
  }

  public submitVote(proposal_id: number, vote: VoteOption) {
    const voteMsg = {
      typeUrl: '/cosmos.gov.v1beta1.MsgVote',
      value: Vote.encode({
        proposalId: BigInt(proposal_id),
        option:  vote,
        options: [],
        // options: [
        //   {
        //     option: vote,
        //     weight: '1'
        //   }
        // ],
        voter: this.account?.address.toString()
      }).finish()
    };

    let obs = new Observable<TxResult>(observer => {
      this.window?.keplr?.getKey(this.networkService.selectedNetwork.chainId).then(key => {

        if (this.window?.keplr && key) {
          this.sendMsgs(
            this.window?.keplr,
            key.bech32Address,
            [voteMsg],
            this.defaultFee
          ).subscribe(res => {
            observer.next(res);
          });
        } else {
          observer.next({success: false, errorCode: -1, errorText: 'General Error', transaction: null});
        }
      });
    });
    return obs;
  }

  public submitParamChangeProposal(title: string, description: string, subspace: string, key: string, value: string, initialDeposit: number) {
    const prop = {
      typeUrl: '/cosmos.params.v1beta1.ParameterChangeProposal',
      value: ParameterChangeProposal.encode({
        title,
        description,
        changes: [
          {
            subspace,
            key,
            value
          }
        ]
      }).finish()
    };

    return this.submitProposal(prop, initialDeposit)
  }

  public submitCommunityPoolSpendProposal(
    title: string, description: string, amount: number, recipient: string,
    initialDeposit: number
  ) {
    const pow = 10 ** this.networkService.selectedNetwork.stakeCurrency.coinDecimals;
    const _amount: Coin[] = [
      {
        amount: '' + (amount * pow),
        denom: this.networkService.selectedNetwork.stakeCurrency.coinMinimalDenom
      }
    ];
    const proposal = {
      typeUrl: '/cosmos.distribution.v1beta1.CommunityPoolSpendProposal',
      value: CommunityPoolSpendProposal.encode({
        title,
        description,
        recipient,
        amount: _amount
      }).finish()
    };

    return this.submitProposal(proposal, initialDeposit);
  }

  private sendMsgs(
    keplr: Keplr,
    sender: string,
    proto: Any[],
    fee: StdFee,
    memo: string = ""
  ): Observable<TxResult> {
    let obs = new Observable<TxResult>((observer) => {
      this.fetchAccountInfo(sender).then(account => {
        keplr.getKey(this.networkService.selectedNetwork.chainId).then(({pubKey}) => {
          if (account) {
            const signDoc = {
              bodyBytes: TxBody.encode(
                TxBody.fromPartial({
                  messages: proto,
                  memo,
                })
              ).finish(),
              authInfoBytes: AuthInfo.encode({
                tip: Tip.fromPartial({}),
                signerInfos: [
                  {
                    publicKey: {
                      typeUrl: "/cosmos.crypto.secp256k1.PubKey",
                      value: PubKey.encode({
                        key: pubKey,
                      }).finish(),
                    },
                    modeInfo: {
                      single: {
                        mode: SignMode.SIGN_MODE_DIRECT,
                      },
                      multi: undefined,
                    },
                    sequence: BigInt(account.sequence),
                  },
                ],
                fee: Fee.fromPartial({
                  amount: fee.amount.map((coin) => {
                    return {
                      denom: coin.denom,
                      amount: coin.amount.toString(),
                    };
                  }),
                  gasLimit: BigInt(fee.gas),
                }),
              }).finish(),
              chainId: this.networkService.selectedNetwork.chainId,
              accountNumber: Long.fromString(account.account_number)
            }

            keplr.signDirect(
              this.networkService.selectedNetwork.chainId,
              sender,
              signDoc,
            ).then(signed => {


              const signedTx = {
                tx: TxRaw.encode({
                  bodyBytes: signed.signed.bodyBytes,
                  authInfoBytes: signed.signed.authInfoBytes,
                  signatures: [Buffer.from(signed.signature.signature, "base64")],
                }).finish(),
                signDoc: signed.signed,
              }

              this.broadcastTxSync(keplr, this.networkService.selectedNetwork.chainId, signedTx.tx).then(txHash => {
                const txTracer = new TendermintTxTracer(this.networkService.selectedNetwork.websocketAPIs[0].url, this.networkService.selectedNetwork.websocketAPIs[0].path);
                txTracer.traceTx(txHash).then((tx) => {
                  // const bla = tx.events[0].attributes[0].key;
                  // const bla2 = fromBase64(bla);
                  // const bla3 = fromAscii(bla2);
                  // console.log({bla, bla2, bla3});
                  tx.events = this.decodeEvents(tx.events);
                  if (tx.code) {
                    observer.next({success: false, errorCode: tx.code, errorText: tx.log, transaction: tx});
                  } else {
                    observer.next({success: true, transaction: tx});
                  }
                  console.log(tx);
                });
              });

            });

          } else {
            observer.next({success: false, errorText: 'General Error', errorCode: -1, transaction: null});
          }

        });

      });

    });
    return obs;
  }

  private async fetchAccountInfo(address: string) {
    try {
      const uri = `${this.networkService.selectedNetwork.restAPIs[0].url}/cosmos/auth/v1beta1/accounts/${address}`;
      const response = await api<AccountResponse>(uri);

      return response.account;
    } catch (e) {
      console.error("This may be a new account. Please send some tokens to this account first.")
      return undefined;
    }
  }

  private broadcastTxSync(
    keplr: Keplr,
    chainId: string,
    tx: Uint8Array,
  ): Promise<Uint8Array> {
    return keplr.sendTx(chainId, tx, "sync" as BroadcastMode)
  }

  private async addNetwork(network: NetworkInfo) {
    await this.window?.keplr?.experimentalSuggestChain({
      chainId: network.chainId,
      chainName: network.chainName,
      rpc: network.rpcAPIs[0].url,
      rest: network.restAPIs[0].url,
      bip44: {
        coinType: network.coinType,
      },
      bech32Config: {
        bech32PrefixAccAddr: network.prefix,
        bech32PrefixAccPub: network.prefix + "pub",
        bech32PrefixValAddr: network.prefix + "valoper",
        bech32PrefixValPub: network.prefix + "valoperpub",
        bech32PrefixConsAddr: network.prefix + "valcons",
        bech32PrefixConsPub: network.prefix + "valconspub",
      },
      currencies: [
        network.feeCurrency,
      ],
      feeCurrencies: [
        {
          ...network.feeCurrency,
          gasPriceStep: network.gasPriceStep
        },
      ],
      stakeCurrency: network.stakeCurrency,
    });
  }

  decodeEvents(events: any[]) {
    const newEvents = [];
    for (let event of events) {
      newEvents.push(this.decodeEvent(event));
    }
    return newEvents;
  }

  decodeEvent(event: any): any {
    if (event.attributes) {
      const newEvent: { type: string, attributes: { key: string, value: string }[] } = {
        type: event.type,
        attributes: []
      };
      for (let attribute of (event.attributes as Attribute[])) {
        newEvent.attributes.push(this.decodeAttribute(attribute));
      }
      return newEvent;
    }
  }

  private decodeAttribute(attr: Attribute) {
    const newAttr = {
      key: this.decodeString(attr.key),
      value: this.decodeString(attr.value)
    }
    return newAttr;
  }

  private decodeString(decoded: string) {
    return fromAscii(fromBase64(decoded));
  }
}
