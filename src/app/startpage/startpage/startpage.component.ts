import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { AuthenticationDataService } from "../../logic/services/authentication-data.service";
import { SettingsDataService } from "../../logic/services/settings-data.service";

@Component({
  selector: 'app-startpage',
  templateUrl: './startpage.component.html',
  styleUrls: ['./startpage.component.scss']
})
export class StartpageComponent implements OnInit {

  constructor(public authenticationDataService: AuthenticationDataService,
              public settingsDataService: SettingsDataService) { }

  public loginRegisterViewType!: Observable<number>;
  public username$!: Observable<string>;

  ngOnInit(): void {
    this.username$ = this.authenticationDataService.getUserName();
    this.loginRegisterViewType = this.settingsDataService.getLoginRegisterScreenViewType();
  }
}
