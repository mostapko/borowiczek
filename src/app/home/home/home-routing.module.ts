import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { LocalizeRouterModule } from "@gilsdav/ngx-translate-router";
import { LoggedInGuard } from "../../logic/guards/logged-in.guard";

const routes: Routes = [{ path: '', canActivate: [LoggedInGuard], component: HomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes), LocalizeRouterModule.forChild(routes)],
  exports: [RouterModule, LocalizeRouterModule],
})

export class HomeRoutingModule {}
