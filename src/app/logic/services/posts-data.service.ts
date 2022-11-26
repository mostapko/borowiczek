import { Injectable } from '@angular/core';
import * as postsActions from "../actions/posts.actions";
import { Store } from "@ngrx/store";
import { PostsState } from "../reducers/posts.reducer";
import { selectOwnPostsList } from "../reducers";
import {Observable} from "rxjs";
import {Post} from "../models/post";

@Injectable({
  providedIn: 'root'
})
export class PostsDataService {

  constructor(private store: Store<PostsState>) { }

  public selectPostsList(): Observable<Post[]> {
    return this.store.select(selectOwnPostsList);
  }

  public createNewPost(content: string): void {
    this.store.dispatch(postsActions.createNewPostStart({
      content: content,
    }),);
  }

  public getOwnPosts() {
    this.store.dispatch(postsActions.getOwnPostsStart());
  }

  public getOwnAndFollowingPosts() {
    this.store.dispatch(postsActions.getOwnAndFollowingPostsStart());
  }
}
