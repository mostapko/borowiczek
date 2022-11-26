import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, Observable, of, tap } from "rxjs";
import * as fromPosts from '../actions/posts.actions';
import { Action } from "@ngrx/store";
import { Router} from "@angular/router";
import { LocalizeRouterService } from "@gilsdav/ngx-translate-router";
import { PostsService } from "../services/posts.service";

@Injectable()
export class PostsEffects {
  constructor(private actions$: Actions,
              private postsService: PostsService,
              private router: Router,
              private localizeService: LocalizeRouterService) {}

  createNewPost$: Observable<Action> = createEffect(() => {
      return this.actions$.pipe(
        ofType(fromPosts.createNewPostStart),
        mergeMap((action) => this.postsService.createNewPost(action.content).pipe(
            map((d) => {
              return fromPosts.createNewPostSuccess();
            }),
            catchError((err) => {
              return of(fromPosts.createNewPostError());
            }),
          ),
        ),
      );
    },
  );

  getOwnPosts$: Observable<Action> = createEffect(() => {
      return this.actions$.pipe(
        ofType(fromPosts.getOwnPostsStart),
        mergeMap((action) => this.postsService.getOwnPosts().pipe(
            map((d) => {
              return fromPosts.getOwnPostsSuccess({ posts: d['data'] });
            }),
            catchError((err) => {
              return of(fromPosts.getOwnPostsError());
            }),
          ),
        ),
      );
    },
  );

  getOwnAndFollowingPosts$: Observable<Action> = createEffect(() => {
      return this.actions$.pipe(
        ofType(fromPosts.getOwnAndFollowingPostsStart),
        mergeMap((action) => this.postsService.getOwnAndFollowingPosts().pipe(
            map((d) => {
              return fromPosts.getOwnAndFollowingPostsSuccess({ posts: d['data'] });
            }),
            catchError((err) => {
              return of(fromPosts.getOwnAndFollowingPostsError());
            }),
          ),
        ),
      );
    },
  );



}
