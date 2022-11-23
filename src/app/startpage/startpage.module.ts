import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartpageComponent } from './startpage/startpage.component';
import { StartpageRoutingModule } from "./startpage/startpage-routing.module";
import { TranslateModule } from "@ngx-translate/core";
import { LoginRegisterModule } from "../shared/login-register/login-register.module";

@NgModule({
  declarations: [
    StartpageComponent
  ],
    imports: [
        CommonModule,
        StartpageRoutingModule,
        TranslateModule,
        LoginRegisterModule
    ]
})
export class StartpageModule { }
