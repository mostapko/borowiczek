import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { AuthenticationDataService } from "../../logic/services/authentication-data.service";

@Component({
  selector: 'app-startpage',
  templateUrl: './startpage.component.html',
  styleUrls: ['./startpage.component.scss']
})
export class StartpageComponent implements OnInit {

  constructor(public authenticationDataService: AuthenticationDataService) { }

  public isLoginView = true;
  public isRegisterView = false;

  public username$!: Observable<string>;

  ngOnInit(): void {
    this.username$ = this.authenticationDataService.getUserName();
  }

  public showLoginRegister(): void {
    this.isRegisterView = !this.isRegisterView;
    this.isLoginView = !this.isLoginView;
  }
}
