import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsListComponent } from './posts-list/posts-list.component';
import {SinglePostModule} from "../single-post/single-post.module";



@NgModule({
    declarations: [
        PostsListComponent
    ],
    exports: [
        PostsListComponent
    ],
    imports: [
        CommonModule,
        SinglePostModule
    ]
})
export class PostsListModule { }
