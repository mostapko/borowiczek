import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewPostComponent } from './new-post/new-post.component';



@NgModule({
    declarations: [
        NewPostComponent
    ],
    exports: [
        NewPostComponent
    ],
    imports: [
        CommonModule
    ]
})
export class NewPostModule { }
