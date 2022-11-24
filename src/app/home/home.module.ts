import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HomeRoutingModule } from "./home/home-routing.module";
import {PostListModule} from "../shared/post-list/post-list.module";

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    PostListModule
  ]
})
export class HomeModule { }
