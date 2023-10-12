import { Component, OnInit } from '@angular/core';
import {KeplrService} from "../../services/keplr.service";
import {Translator} from "../../util/Translator";
import {MenuItem, MessageService} from "primeng/api";
import {TxResult} from "../../util/TxResult";
import {NetworkService} from "../../services/network.service";
import {VoteOption} from "../../../proto_ts/cosmos/gov/v1/gov";
import {ProposalStatus} from "../../../proto_ts/cosmos/gov/v1beta1/gov";

@Component({
  selector: 'app-proposal-list',
  templateUrl: './proposal-list.component.html',
  styleUrls: ['./proposal-list.component.css']
})
export class ProposalListComponent implements OnInit {

  public proposals: any[] = [];
  public selectedProposal: any;
  public depositDialogVisible = false;
  public submitProposalDialogVisible = false;
  public voteDialogVisible = false;
  public proposalDetailsDialogVisible = false;
  public infoDialogVisible = false;

  public availableNetworks: any[] = [];


  public items: MenuItem[] = [
    {
      label: 'Chainmasters Proposal Management'
    },
    // {
    //   routerLink: '/',
    //   icon: 'pi pi-list'
    // },
    {
      command: () => {this.submitProposalDialogVisible = true},
      icon: 'pi pi-plus'
    },
    {
      command: () => {this.infoDialogVisible = true},
      icon: 'pi pi-info'
    }
  ];

  constructor(
    private keplrService: KeplrService,
    private messageService: MessageService,
    private networkService: NetworkService
  ) {
    this.loadProposals();
    for (let availableNetwork of this.networkService.availableNetworks) {
      this.availableNetworks.push(availableNetwork);
    }
  }

  public onChangeNetwork(value: any) {
    this.networkService.setSelectedNetwork(value.value);
  }

  ngOnInit() {
  }

  public onClickDeposit(proposal: any) {
    this.selectedProposal = proposal;
    this.depositDialogVisible = true;
  }

  public onClickProposal(proposal: any) {
    this.selectedProposal = proposal;
    this.proposalDetailsDialogVisible = true;

  }

  public onResult(result: TxResult) {
    this.messageService.clear();
    console.log(result);
    if(result.success) {
      this.depositDialogVisible = false;
      this.messageService.add({severity: 'success', summary: 'Successfully', detail: 'Deposited FUND to the Proposal'});
    } else {
      this.messageService.add({severity: 'error', summary: 'Error', detail: result.errorText});
    }
  }

  private loadProposals() {
    try {
      this.keplrService.proposals.subscribe(proposals => {
        this.proposals = proposals;
      })
    } catch (e) {
      console.log(e);
    }
  }

  public vote(vote: VoteOption) {
    this.keplrService.submitVote(this.selectedProposal.proposal_id, vote).subscribe(result => {
      console.log(result);
      this.voteDialogVisible = false;
    })
  }

  public onClickVote(proposal: any) {
    this.selectedProposal = proposal;
    this.voteDialogVisible = true;
  }

  public onSuccessSubmitProposal(proposalId: number) {
    this.keplrService.refreshProposalList();
    setTimeout(() => {
      this.messageService.add({
        severity: 'success',
        summary: 'Successfully submitted proposal ' + proposalId
      });
      this.selectedProposal = this.getProposalById(proposalId);
      this.submitProposalDialogVisible = false;
      this.onClickProposal(this.selectedProposal);
    }, 1000)
  }

  private getProposalById(proposalId): any {
    return this.proposals.find(p => p.proposal_id === proposalId);
  }

  protected readonly Translator = Translator;
  protected readonly VoteOption = VoteOption;
}
