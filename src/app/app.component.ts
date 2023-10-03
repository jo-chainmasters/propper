import { Component } from '@angular/core';
import {KeplrService} from "./services/keplr.service";
import {MenuItem} from "primeng/api";
import {NetworkService} from "./services/network.service";
import {NetworkInfo} from "./util/NetworkInfo";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'propper';


  public connected = false;

  constructor(
    private keplrService: KeplrService,
    public networkService: NetworkService
    ) {
    setInterval(() => {
      this.connected = this.keplrService.connected;
    }, 1000)
  }


}
