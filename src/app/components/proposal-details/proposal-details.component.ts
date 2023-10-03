import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {KeplrService} from "../../services/keplr.service";
import {Translator} from "../../util/Translator";

@Component({
  selector: 'app-proposal-details',
  templateUrl: './proposal-details.component.html',
  styleUrls: ['./proposal-details.component.css']
})
export class ProposalDetailsComponent implements OnInit {

  public proposal: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private keplrService: KeplrService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(async (params: ParamMap) => {
      await this.loadProposal(params.get('id') as string);
    });
  }

  public async loadProposal(id: string) {
    this.proposal = (await this.keplrService.getProposal(id)).proposal;
  }

  protected readonly Translator = Translator;
}
