import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {KeplrService} from "../../services/keplr.service";
import {BaseProposalComponent} from "../BaseProposalComponent";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-parameter-change-proposal',
  templateUrl: './parameter-change-proposal.component.html',
  styleUrls: ['./parameter-change-proposal.component.css']
})
export class ParameterChangeProposalComponent extends BaseProposalComponent {

  constructor(private keplrService: KeplrService, private messageService: MessageService) {
    super();
  }

  @Output()
  public proposalId: EventEmitter<number> = new EventEmitter<number>();

  public propTitle = '';
  public propText = '';
  public propDeposit = 1;
  public propSubspace = '';
  public propKey = '';
  public propValue = '';

  public send(){
    this.keplrService.submitParamChangeProposal(this.propTitle, this.propText, this.propSubspace, this.propKey, this.propValue, this.propDeposit).subscribe(result => {
      if(result.success) {
        const proposalId = this.getProposalId(result.transaction.events);
        this.proposalId.emit(proposalId);
      } else {
        this.messageService.add({key: 'error', severity: 'error', summary: 'Error', detail: result.errorText});
      }
    });
  }

  public get sendDisabled(): boolean {
    return !(this.propTitle && this.propText && this.propDeposit && this.propSubspace && this.propKey && this.propValue);
  }
}
