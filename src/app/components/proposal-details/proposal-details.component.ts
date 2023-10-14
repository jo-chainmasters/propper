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
  public tally: any;
  public tallyData: any;
  public tallyChartOptions = {
    plugins: {
      legend: {
        labels: {
          color: '#ebedef'
        }
      }
    }
  };

  @Input()
  public set proposal(proposal: any) {
    this._proposal = proposal;
    this.keplrService.getTally(proposal.proposal_id).subscribe(tally => {
      this.tally = tally;
      this.setTallyData(tally);
    });
  }

  public get proposal() {
    return this._proposal;
  }
  constructor(
    private activatedRoute: ActivatedRoute,
    private keplrService: KeplrService,
    public networkService: NetworkService
  ) { }

  public getDepositAmount(amount: number = 0) {
    const pow = 10 ** this.networkService.selectedNetwork.stakeCurrency.coinDecimals;
    return amount / pow;
  }

  private setTallyData(tally) {
    this.tallyData = {
      labels: ['YES','NO','ABSTAIN', 'NO WITH VETO'],
      datasets: [
        {
          data: [tally.tally.yes_count, tally.tally.no_count, tally.tally.abstain_count, tally.tally.no_with_veto_count],
          backgroundColor: [
            "#6ff542",
            "#cc426c",
            "#FFA726",
            "#ff0000"
          ],
          hoverBackgroundColor: [
            "#6ff542",
            "#cc426c",
            "#FFA726",
            "#ff0000"
          ]
        }
      ]
    };
  }

  public get showTally() {
    if(this.tally) {
      return !(this.tally.tally.yes_count === "0" && this.tally.tally.no_count === "0" && this.tally.tally.abstain_count === "0" && this.tally.tally.no_with_veto_count === "0");
    } else {
      return false;
    }
  }

  protected readonly Translator = Translator;
}
