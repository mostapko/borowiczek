import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {ReactiveFormsModule} from "@angular/forms";
import {TranslateModule} from "@ngx-translate/core";
import {RouterLinkWithHref} from "@angular/router";
import { RegisterComponent } from './register/register.component';
import {LocalizeRouterModule} from "@gilsdav/ngx-translate-router";
import {LoginRegisterRoutingModule} from "./login-register-routing.module";
import { ResetPasswordComponent } from './reset-password/reset-password.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ResetPasswordComponent
  ],
  exports: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslateModule,
    RouterLinkWithHref,
    LocalizeRouterModule,
    LoginRegisterRoutingModule,
  ]
})
export class LoginRegisterModule { }
