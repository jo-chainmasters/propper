import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {KeplrService} from "../../services/keplr.service";
import {Translator} from "../../util/Translator";
import {NetworkService} from "../../services/network.service";

@Component({
  selector: 'app-proposal-details',
  templateUrl: './proposal-details.component.html',
  styleUrls: ['./proposal-details.component.css']
})
export class ProposalDetailsComponent {

  private _proposal: any;

  @Input()
  public set proposal(proposal: any) {
    this._proposal = proposal;
  }

  public get proposal() {
    return this._proposal;
  }
  constructor(
    private activatedRoute: ActivatedRoute,
    private keplrService: KeplrService,
    public networkService: NetworkService
  ) { }

  public getDepositAmount(amount: number) {
    const pow = 10 ** this.networkService.selectedNetwork.stakeCurrency.coinDecimals;
    return amount / pow;
  }

  protected readonly Translator = Translator;
}
