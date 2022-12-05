import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HomeRoutingModule } from "./home/home-routing.module";
import {NewPostModule} from "../shared/posts/new-post/new-post.module";
import {PostsListModule} from "../shared/posts/posts-list/posts-list.module";

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NewPostModule,
    PostsListModule
  ]
})
export class HomeModule { }
