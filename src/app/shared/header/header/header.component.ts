import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {AuthenticationDataService} from "../../../logic/services/authentication-data.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public username!: Observable<string>;
  public authStatus!: Observable<boolean>;

  constructor(private authenticationDataService: AuthenticationDataService,) {
  }

  ngOnInit(): void {
    this.authStatus = this.authenticationDataService.getIsUserLoggedIn();
    this.username = this.authenticationDataService.getUserName();
  }

  public signOut(): void {
    this.authenticationDataService.logoutUser();
  }
}
