import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthenticationDataService } from "../../../logic/services/authentication-data.service";
import {SettingsDataService} from "../../../logic/services/settings-data.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: any;

  constructor(private formBuilder: FormBuilder,
              private authenticationDataService: AuthenticationDataService,
              private settingsDataService: SettingsDataService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  public login() {
    const credentials = this.loginForm.value;

    this.authenticationDataService.loginUser(credentials.email, credentials.password);
  }

  public openLoginRegister(): void {
    this.settingsDataService.changeLoginRegisterScreenViewType();
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
