import {Component, EventEmitter, Output} from '@angular/core';
import {BaseProposalComponent} from "../BaseProposalComponent";
import {KeplrService} from "../../services/keplr.service";

@Component({
  selector: 'app-text-proposal',
  templateUrl: './text-proposal.component.html',
  styleUrls: ['./text-proposal.component.css']
})
export class TextProposalComponent extends BaseProposalComponent {

  constructor(private keplrService: KeplrService) {
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
    this.keplrService.submitTextProposal(this.propTitle, this.propText, this.propDeposit).subscribe(result => {
      const proposalId = this.getProposalId(result.transaction.events);
      this.proposalId.emit(proposalId);
    });
  }
}
