import {Component, OnInit} from '@angular/core';
import {KeplrService} from "../../services/keplr.service";
import {Translator} from "../../util/Translator";
import {MenuItem, MessageService} from "primeng/api";
import {TxResult} from "../../util/TxResult";
import {NetworkService} from "../../services/network.service";
import {VoteOption, WeightedVoteOption} from "../../../proto_ts/cosmos/gov/v1/gov";




@Component({
  selector: 'app-proposal-list',
  templateUrl: './proposal-list.component.html',
  styleUrls: ['./proposal-list.component.css']
})
export class ProposalListComponent implements OnInit {

  public proposals: any[] = [];
  public selectedProposal: any;
  public depositDialogVisible = false;
  public submitProposalDialogVisible = false;
  public voteDialogVisible = false;
  public proposalDetailsDialogVisible = false;
  public infoDialogVisible = false;
  public weight = 1.0;
  public availableNetworks: any[] = [];


  public items: MenuItem[] = [
    {
      label: 'Chainmasters Proposal Management'
    },
    // {
    //   routerLink: '/',
    //   icon: 'pi pi-list'
    // },
    {
      command: () => {this.submitProposalDialogVisible = true},
      icon: 'pi pi-plus'
    },
    {
      command: () => {this.infoDialogVisible = true},
      icon: 'pi pi-info'
    }
  ];

  constructor(
    private keplrService: KeplrService,
    private messageService: MessageService,
    private networkService: NetworkService
  ) {
    this.loadProposals();
    for (let availableNetwork of this.networkService.availableNetworks) {
      this.availableNetworks.push(availableNetwork);
    }
  }

  public onChangeNetwork(value: any) {
    this.networkService.setSelectedNetwork(value.value);
  }

  ngOnInit() {
  }

  public onClickDeposit(proposal: any) {
    this.selectedProposal = proposal;
    this.depositDialogVisible = true;
  }

  public onClickProposal(proposal: any) {
    this.selectedProposal = proposal;
    this.proposalDetailsDialogVisible = true;

  }

  public onResult(result: TxResult) {
    this.messageService.clear();
    console.log(result);
    if(result.success) {
      this.depositDialogVisible = false;
      this.messageService.add({severity: 'success', summary: 'Successfully', detail: 'Deposited FUND to the Proposal'});
    } else {
      this.messageService.add({severity: 'error', summary: 'Error', detail: result.errorText});
    }
  }

  private loadProposals() {
    try {
      this.keplrService.proposals.subscribe(proposals => {
        this.proposals = proposals;
      })
    } catch (e) {
      console.log(e);
    }
  }

  public vote(vote: VoteOption) {
    this.keplrService.submitVote(this.selectedProposal.proposal_id, vote).subscribe(result => {
      console.log(result);
      this.voteDialogVisible = false;
    })
  }

  public voteWeight(vote: VoteOption, weight: number) {
    if (weight == 1) {
      this.keplrService.submitVote(this.selectedProposal.proposal_id, vote).subscribe(result => {
        console.log(result);
        this.voteDialogVisible = false;
      })
    } else {
      const weightedVoteOption: WeightedVoteOption[]
        = [{
        option: VoteOption.VOTE_OPTION_YES,
        weight: weight.toString(),
        //weight: "0.45",
      },
        {
          option: VoteOption.VOTE_OPTION_NO,
          weight: (1 - weight - 0.1).toString(),
          //weight: "0.45",
        },
        {
          option: VoteOption.VOTE_OPTION_NO_WITH_VETO,
          weight: "0.05",
        },
        {
          option: VoteOption.VOTE_OPTION_ABSTAIN,
          weight: "0.05",
        }
      ];

      if (this.checkSum(weightedVoteOption)) {
        this.keplrService.submitVoteWeight(this.selectedProposal.proposal_id, vote, weightedVoteOption).subscribe(result => {
          console.log(result);
          this.voteDialogVisible = false;
        })
      }
    }
  }

  public onClickVote(proposal: any) {
    this.selectedProposal = proposal;
    this.voteDialogVisible = true;
  }

  public onSuccessSubmitProposal(proposalId: number) {
    this.keplrService.refreshProposalList();
    setTimeout(() => {
      this.messageService.add({
        severity: 'success',
        summary: 'Successfully submitted proposal ' + proposalId
      });
      this.selectedProposal = this.getProposalById(proposalId);
      this.submitProposalDialogVisible = false;
      this.onClickProposal(this.selectedProposal);
    }, 1000)
  }

  private getProposalById(proposalId): any {
    return this.proposals.find(p => p.proposal_id === proposalId);
  }

  protected readonly Translator = Translator;
  protected readonly VoteOption = VoteOption;

  showSliderValue(event: any) {
    console.log('Slider Value:' + event.value);
    if (event?.value) {
      this.weight = event.value / 100
    }
    console.log('Weight:' + this.weight);

  }

  public checkSum(weightedVoteOption: any[]): boolean {
    let sum = 0.0;
    weightedVoteOption.forEach((f) => sum += parseFloat(f.weight));

    console.log("Sum of Weight:" + sum);

    if (sum == 1)
      return true;
    else
      return false;

  }
}
