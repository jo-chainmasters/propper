import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {BaseProposalComponent} from "../BaseProposalComponent";
import {KeplrService} from "../../services/keplr.service";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-client-update-proposal',
  templateUrl: './client-update-proposal.component.html',
  styleUrls: ['./client-update-proposal.component.css']
})
export class ClientUpdateProposalComponent extends BaseProposalComponent {

  constructor(private keplrService: KeplrService, private messageService: MessageService) {
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
      if(result.success) {
        const proposalId = this.getProposalId(result.transaction.events);
        this.proposalId.emit(proposalId);
        this.resetValues();
      } else {
        this.messageService.add({key: 'error', severity: 'error', summary: 'Error', detail: result.errorText});
      }
    });
  }

  public get sendDisabled(): boolean {
    return !(this.propTitle && this.propText && this.propDeposit && this.propSubstituteClientId && this.propSubjectClientId);
  }

  private resetValues() {
    this.propDeposit = 1;
    this.propText = '';
    this.propTitle = '';
    this.propSubjectClientId = '';
    this.propSubstituteClientId = '';
  }
}
