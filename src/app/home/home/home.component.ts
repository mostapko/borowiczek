import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { AuthenticationDataService } from "../../logic/services/authentication-data.service";
import {PostsDataService} from "../../logic/services/posts-data.service";
import {Post} from "../../logic/models/post";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public username!: Observable<string>;
  public posts!: Post[];

  private authStatus!: Observable<boolean>;

  constructor(private authenticationDataService: AuthenticationDataService,
              private postsDataService: PostsDataService) { }

  ngOnInit(): void {
    this.authStatus = this.authenticationDataService.selectIsUserLoggedIn();
    this.username = this.authenticationDataService.selectUserName();

    this.authenticationDataService.getUserOwnFollowing();
    this.authenticationDataService.selectUserFollowing().subscribe((f) => {
      if (f) {
        this.postsDataService.getOwnAndFollowingPosts();
        this.postsDataService.selectPostsList().subscribe((posts) => {
          if (posts) {
            this.posts = posts;
          }
        });
      }
    });



  }

  public signOut(): void {
    this.authenticationDataService.logoutUser();
  }

}
