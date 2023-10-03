import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {KeplrService} from "../../services/keplr.service";
import {TxResult} from "../../util/TxResult";

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {

  @Input()
  public proposal: any;
  public amount = 0;

  @Output()
  public result: EventEmitter<TxResult> = new EventEmitter<TxResult>();

  constructor(private keplrService: KeplrService) {

  }

  ngOnInit(): void {
  }

  public submit() {
    this.keplrService.depositToProposal(this.proposal, this.amount)?.subscribe(val => {
      if(val) {
        this.amount = 0;
      }
      this.result.emit(val);

    })
  }

}
