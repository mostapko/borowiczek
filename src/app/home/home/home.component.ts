import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../logic/services/authentication.service";
import {Subscription} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public username!: string;
  private authStatus!: Subscription;
  constructor(private authenticationService: AuthenticationService,) { }

  ngOnInit(): void {
    this.authStatus = this.authenticationService.loggedInStatus$.subscribe(status => {
      if (status) {
        this.username = this.authenticationService.getPersistedUser().username;
      }
    });
  }

  public signOut(): void {
    this.authenticationService.logout();
  }

}
