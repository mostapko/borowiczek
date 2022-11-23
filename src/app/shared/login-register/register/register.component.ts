import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { AuthenticationDataService } from "../../../logic/services/authentication-data.service";
import {SettingsDataService} from "../../../logic/services/settings-data.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public registerForm: any;

  constructor(private formBuilder: FormBuilder,
              private authenticationDataService: AuthenticationDataService,
              private settingsDataService: SettingsDataService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  public signup() {
    let credentials = this.registerForm.value;
    this.authenticationDataService.registerUser(credentials.username, credentials.email, credentials.password)
  }

  public openLoginRegister(): void {
    this.settingsDataService.changeLoginRegisterScreenViewType()
  }

  get username() {
    return this.registerForm.get('username');
  }

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }
}
