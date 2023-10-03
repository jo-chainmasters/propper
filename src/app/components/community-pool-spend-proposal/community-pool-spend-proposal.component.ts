import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {KeplrService} from "../../services/keplr.service";
import {BaseProposalComponent} from "../BaseProposalComponent";

@Component({
  selector: 'app-community-pool-spend-proposal',
  templateUrl: './community-pool-spend-proposal.component.html',
  styleUrls: ['./community-pool-spend-proposal.component.css']
})
export class CommunityPoolSpendProposalComponent extends BaseProposalComponent {

  @Output()
  public proposalId: EventEmitter<number> = new EventEmitter<number>();

  public propTitle = '';
  public propText = '';
  public propRecipient = '';
  public propAmount = 1;
  public propDeposit = 1;

  constructor(private keplrService: KeplrService) {
    super();
  }

  public send() {
    this.keplrService.submitCommunityPoolSpendProposal(this.propTitle, this.propText, this.propAmount, this.propRecipient, this.propDeposit).subscribe(result => {
      const proposalId = this.getProposalId(result.transaction.events);
      this.proposalId.emit(proposalId);
    });
  }

}
