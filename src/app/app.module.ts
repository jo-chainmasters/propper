import {ApplicationRef, DoBootstrap, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TextProposalComponent } from './components/text-proposal/text-proposal.component';
import {InputTextareaModule} from "primeng/inputtextarea";
import {InputTextModule} from "primeng/inputtext";
import {FormsModule} from "@angular/forms";
import {CardModule} from "primeng/card";
import {ButtonModule} from "primeng/button";
import {KeplrService} from "./services/keplr.service";
import {DropdownModule} from "primeng/dropdown";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { ProposalListComponent } from './components/proposal-list/proposal-list.component';
import {HttpClient, HttpClientModule, HttpHandler} from "@angular/common/http";
import {TableModule} from "primeng/table";
import { ProposalDetailsComponent } from './components/proposal-details/proposal-details.component';
import {AppRoutingModule} from "./app-routing.module";
import {RouterOutlet} from "@angular/router";
import { MarkdownPipe } from './pipes/markdown.pipe';
import {TagModule} from "primeng/tag";
import {DialogModule} from "primeng/dialog";
import { DepositComponent } from './components/deposit/deposit.component';
import {InputNumberModule} from "primeng/inputnumber";
import {MessagesModule} from "primeng/messages";
import {MessageService} from "primeng/api";
import {MenubarModule} from "primeng/menubar";
import { NewProposalComponent } from './components/new-proposal/new-proposal.component';
import { SoftwareUpgradeProposalComponent } from './components/software-upgrade-proposal/software-upgrade-proposal.component';
import { CommunityPoolSpendProposalComponent } from './components/community-pool-spend-proposal/community-pool-spend-proposal.component';
import { ParameterChangeProposalComponent } from './components/parameter-change-proposal/parameter-change-proposal.component';
import { ClientUpdateProposalComponent } from './components/client-update-proposal/client-update-proposal.component';
import { GeneralInformationsComponent } from './components/general-informations/general-informations.component';
import {PanelModule} from "primeng/panel";
import {NgOptimizedImage} from "@angular/common";
import {SplitButtonModule} from "primeng/splitbutton";
import {MessageModule} from "primeng/message";
import {MarkdownModule} from "ngx-markdown";
import {ChartModule} from "primeng/chart";
import {SliderModule} from 'primeng/slider';

@NgModule({
  declarations: [
    AppComponent,
    TextProposalComponent,
    ProposalListComponent,
    ProposalDetailsComponent,
    MarkdownPipe,
    DepositComponent,
    NewProposalComponent,
    SoftwareUpgradeProposalComponent,
    CommunityPoolSpendProposalComponent,
    ParameterChangeProposalComponent,
    ClientUpdateProposalComponent,
    GeneralInformationsComponent
  ],
    imports: [
        RouterOutlet,
        AppRoutingModule,
        BrowserModule,
        HttpClientModule,
        InputTextareaModule,
        InputTextModule,
        FormsModule,
        CardModule,
        ButtonModule,
        BrowserAnimationsModule,
        DropdownModule,
        TableModule,
        TagModule,
        DialogModule,
        InputNumberModule,
        MessagesModule,
        MenubarModule,
        PanelModule,
        NgOptimizedImage,
        SplitButtonModule,
        MessageModule,
        MarkdownModule.forRoot(),
        ChartModule,
        SliderModule,
    ],
  providers: [HttpClientModule, HttpClient, MessageService],
  bootstrap: []
})
export class AppModule implements DoBootstrap{

  constructor(private keplrService: KeplrService) {
  }

  ngDoBootstrap(appRef: ApplicationRef): void {
    console.log('Hello World');
    appRef.bootstrap(AppComponent);
  }

}
