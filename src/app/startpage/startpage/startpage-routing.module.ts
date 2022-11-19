import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { StartpageComponent } from './startpage.component';
import { LocalizeRouterModule } from "@gilsdav/ngx-translate-router";

const routes: Routes = [{ path: '', component: StartpageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes), LocalizeRouterModule.forChild(routes)],
  exports: [RouterModule, LocalizeRouterModule],
})

export class StartpageRoutingModule {}
