import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MenuItem, MessageService} from "primeng/api";
import {Translator} from "../../util/Translator";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-proposal',
  templateUrl: './new-proposal.component.html',
  styleUrls: ['./new-proposal.component.css']
})
export class NewProposalComponent implements OnInit {

  @Output()
  public onSuccess: EventEmitter<number> = new EventEmitter<number>();

  public proposalTypes: any[] = [];
  public selectedProposalType = '/cosmos.gov.v1beta1.TextProposal';
  constructor(private messageService: MessageService, private router: Router) {
    for (let key of Object.keys(Translator.proposalType)) {
      if(key !== '/cosmos.upgrade.v1beta1.SoftwareUpgradeProposal') {
        this.proposalTypes.push({
          label: Translator.proposalType[key],
          value: key
        });
      }
    }
  }

  ngOnInit(): void {
  }

  public onChangeProposalType() {
    console.log(this.selectedProposalType);
  }

  public onProposalId(proposalId: number) {
    this.onSuccess.emit(proposalId);
    this.selectedProposalType = '/cosmos.gov.v1beta1.TextProposal';
  }
}
