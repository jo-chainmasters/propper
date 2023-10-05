import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {KeplrService} from "../../services/keplr.service";
import {BaseProposalComponent} from "../BaseProposalComponent";
import {MessageService} from "primeng/api";

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

  constructor(private keplrService: KeplrService, private messageService: MessageService) {
    super();
  }

  public send() {
    // TODO check account balance for deposit amount
    this.keplrService.submitCommunityPoolSpendProposal(this.propTitle, this.propText, this.propAmount, this.propRecipient, this.propDeposit).subscribe(result => {
      if(result.success) {
        const proposalId = this.getProposalId(result.transaction.events);
        this.proposalId.emit(proposalId);
      } else {
        this.messageService.add({key: 'error', severity: 'error', summary: 'Error', detail: result.errorText});
      }
    });
  }

  public get sendDisabled(): boolean {
    return !(this.propTitle && this.propText && this.propDeposit && this.propAmount && this.propRecipient);
  }
}
