import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../logic/services/authentication.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-startpage',
  templateUrl: './startpage.component.html',
  styleUrls: ['./startpage.component.scss']
})
export class StartpageComponent implements OnInit {

  constructor(public authenticationService: AuthenticationService) { }

  public isLoginView = true;
  public isRegisterView = false;
  public isLoggedIn = false;

  private authStatus!: Subscription;

  ngOnInit(): void {
    this.authStatus = this.authenticationService.loggedInStatus$.subscribe(status => {
      this.isLoggedIn = status;
    });
  }

  public showLoginRegister(): void {
    this.isRegisterView = !this.isRegisterView;
    this.isLoginView = !this.isLoginView;
  }



}
