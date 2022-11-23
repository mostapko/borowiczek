import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { AuthenticationDataService } from "../../logic/services/authentication-data.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public username!: Observable<string>;
  private authStatus!: Observable<boolean>;
  constructor(private authenticationDataService: AuthenticationDataService,) { }

  ngOnInit(): void {
    this.authStatus = this.authenticationDataService.getIsUserLoggedIn();
    this.username = this.authenticationDataService.getUserName();
  }

  public signOut(): void {
    this.authenticationDataService.logoutUser();
  }

}
