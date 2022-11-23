import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  LocalizeParser,
  LocalizeRouterModule,
  LocalizeRouterSettings,
  ManualParserLoader
} from "@gilsdav/ngx-translate-router";
import { TranslateService } from "@ngx-translate/core";
import { Location } from "@angular/common";
import { HttpClient } from "@angular/common/http";

const routes: Routes = [
  { path: 'start', loadChildren: () => import('./startpage/startpage.module').then((mod) => mod.StartpageModule) },
  { path: '', loadChildren: () => import('./home/home.module').then((mod) => mod.HomeModule) },
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    LocalizeRouterModule.forRoot(routes, {
      parser: {
        provide: LocalizeParser,
        useFactory: (translate: any, location: any, settings: any) =>
          new ManualParserLoader(translate, location, settings, ['pl','en'], 'ROUTES.'),
        deps: [TranslateService, Location, LocalizeRouterSettings, HttpClient]
      }
    }),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
