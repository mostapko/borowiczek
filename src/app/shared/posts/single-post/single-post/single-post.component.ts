import { Component, Input, OnInit } from '@angular/core';
import { Post } from "../../../../logic/models/post";
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import {PostsDataService} from "../../../../logic/services/posts-data.service";

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent implements OnInit {
  @Input() post!: Post;
  faThumbsUp = faThumbsUp;
  public date!: any;

  constructor(private postsDataService: PostsDataService) { }

  ngOnInit(): void {
    this.date = new Date(this.post.created_at).toLocaleDateString() + ' @ ' + new Date(this.post.created_at).toLocaleTimeString();
  }

  public likeAPost(postId: number, likesArray: string[]): void {
    this.postsDataService.likeAPost(postId, likesArray);
  }

}
