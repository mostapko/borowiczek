import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SinglePostComponent } from './single-post/single-post.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";



@NgModule({
    declarations: [
        SinglePostComponent
    ],
    exports: [
        SinglePostComponent
    ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ]
})
export class SinglePostModule { }
