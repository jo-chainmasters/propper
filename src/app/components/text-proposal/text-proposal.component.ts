import {Component, EventEmitter, Output} from '@angular/core';
import {BaseProposalComponent} from "../BaseProposalComponent";
import {KeplrService} from "../../services/keplr.service";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-text-proposal',
  templateUrl: './text-proposal.component.html',
  styleUrls: ['./text-proposal.component.css']
})
export class TextProposalComponent extends BaseProposalComponent {

  constructor(
    private keplrService: KeplrService,
    private messageService: MessageService
  ) {
    super();
  }

  public get sendDisabled(): boolean {
    return !(this.propTitle && this.propText && this.propDeposit);
  }

  @Output()
  public proposalId: EventEmitter<number> = new EventEmitter<number>();

  public propTitle = '';
  public propText = '';
  public propDeposit = 1;

  public send(){
    // TODO check account balance for deposit amount
    this.keplrService.submitTextProposal(this.propTitle, this.propText, this.propDeposit).subscribe(result => {
      if(result.success) {
        const proposalId = this.getProposalId(result.transaction.events);
        this.proposalId.emit(proposalId);
        this.resetValues();
      } else {
        this.messageService.add({key: 'error', severity: 'error', summary: 'Error', detail: result.errorText});
      }
    });
  }

  private resetValues() {
    this.propDeposit = 1;
    this.propText = '';
    this.propTitle = '';
  }
}
