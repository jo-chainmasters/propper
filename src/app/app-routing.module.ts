import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProposalListComponent} from "./components/proposal-list/proposal-list.component";
import {ProposalDetailsComponent} from "./components/proposal-details/proposal-details.component";
import {NewProposalComponent} from "./components/new-proposal/new-proposal.component";
import {GeneralInformationsComponent} from "./components/general-informations/general-informations.component";

const routes: Routes = [
  {
    path: '',
    component: ProposalListComponent
  },
  {
    path: 'new',
    component: NewProposalComponent
  },
  {
    path: 'details',
    children: [
      {
        path: ':id',
        component: ProposalDetailsComponent
      }
    ]
  },
  {
    path: 'infos',
    component: GeneralInformationsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
