import {Component, OnInit, ViewChild} from '@angular/core';
import {PostsDataService} from "../../../../logic/services/posts-data.service";

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  constructor(private postsDataService: PostsDataService) { }

  ngOnInit(): void {
  }

  public createNewPost(input: HTMLTextAreaElement): void {
    this.postsDataService.createNewPost(input.value);
  }

}
