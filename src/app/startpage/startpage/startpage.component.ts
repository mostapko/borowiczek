import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../logic/services/authentication.service";
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-startpage',
  templateUrl: './startpage.component.html',
  styleUrls: ['./startpage.component.scss']
})
export class StartpageComponent implements OnInit {

  constructor(public authenticationService: AuthenticationService) { }

  public isLoginView = true;
  public isRegisterView = false;

  private authStatus!: Observable<boolean>;

  ngOnInit(): void {
    this.authStatus = this.authenticationService.loggedInStatus$;
  }

  public showLoginRegister(): void {
    this.isRegisterView = !this.isRegisterView;
    this.isLoginView = !this.isLoginView;
  }



}
