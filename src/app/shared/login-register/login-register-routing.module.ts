import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LocalizeRouterModule } from "@gilsdav/ngx-translate-router";

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes), LocalizeRouterModule.forChild(routes)],
  exports: [RouterModule, LocalizeRouterModule],
})

export class LoginRegisterRoutingModule {}
