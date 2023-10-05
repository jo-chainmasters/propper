import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {BaseProposalComponent} from "../BaseProposalComponent";
import {KeplrService} from "../../services/keplr.service";

@Component({
  selector: 'app-client-update-proposal',
  templateUrl: './client-update-proposal.component.html',
  styleUrls: ['./client-update-proposal.component.css']
})
export class ClientUpdateProposalComponent extends BaseProposalComponent {

  constructor(private keplrService: KeplrService) {
    super();
  }

  @Output()
  public proposalId: EventEmitter<number> = new EventEmitter<number>();

  public propTitle = '';
  public propText = '';
  public propDeposit = 1;
  public propSubjectClientId = '';
  public propSubstituteClientId = '';

  public send() {
    this.keplrService.submitClientUpdateProposal(this.propTitle, this.propText, this.propSubjectClientId, this.propSubstituteClientId, this.propDeposit).subscribe(result => {
      const proposalId = this.getProposalId(result.transaction.events);
      this.proposalId.emit(proposalId);
    });
  }

  public get sendDisabled(): boolean {
    return !(this.propTitle && this.propText && this.propDeposit && this.propSubstituteClientId && this.propSubjectClientId);
  }
}
