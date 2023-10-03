import { Injectable } from '@angular/core';
import {UnificationMain} from "../chains/unification-main";
import {UnificationTest} from "../chains/unification-test";
import {NetworkInfo} from "../util/NetworkInfo";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NetworkService {

  private _networkInfos: NetworkInfo[] = [];
  public selectedNetwork;
  public obs: Observable<NetworkInfo>;
  public observer: any;


  constructor() {
    this._networkInfos.push(UnificationMain);
    this._networkInfos.push(UnificationTest);
    this.selectedNetwork = UnificationMain;


    this.obs = new Observable((observer) => {
      // TODO: try to refresh network list from chain registry
      this.observer = observer;
    })
  }

  get availableNetworks() {
    return this._networkInfos;
  }

  public getById(chainId: string) {
    for (let networkInfo of this._networkInfos) {
      if(networkInfo.chainId === chainId) {
        return networkInfo;
      }
    }
    return undefined;
  }

  public setSelectedNetwork(network: NetworkInfo) {
    this.selectedNetwork = network;
    this.observer.next(network);
  }

}
