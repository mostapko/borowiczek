import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LocalizeRouterModule } from "@gilsdav/ngx-translate-router";
import { AuthenticationSectionGuard} from "../../logic/guards/authentication-section.guard";
import { ResetPasswordComponent } from "./reset-password/reset-password.component";

const routes: Routes = [{ path: '', canActivate: [AuthenticationSectionGuard], component: ResetPasswordComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes), LocalizeRouterModule.forChild(routes)],
  exports: [RouterModule, LocalizeRouterModule],
})

export class LoginRegisterRoutingModule {}
