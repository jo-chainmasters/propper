import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {BaseProposalComponent} from "../BaseProposalComponent";
import {KeplrService} from "../../services/keplr.service";

@Component({
  selector: 'app-software-upgrade-proposal',
  templateUrl: './software-upgrade-proposal.component.html',
  styleUrls: ['./software-upgrade-proposal.component.css']
})
export class SoftwareUpgradeProposalComponent extends BaseProposalComponent {

  constructor(private keplrService: KeplrService) {
    super();
  }

  @Output()
  public proposalId: EventEmitter<number> = new EventEmitter<number>();

  public propTitle = '';
  public propText = '';
  public propDeposit = 1;
  public propName = '';
  public propHeight = 0;
  public propInfo = '';

  public send() {
    this.keplrService.submitSoftwareUpgradeProposal(this.propTitle, this.propText, this.propName, this.propHeight, this.propInfo, this.propDeposit).subscribe(result => {
      const proposalId = this.getProposalId(result.transaction.events);
      this.proposalId.emit(proposalId);
    });
  }

}
