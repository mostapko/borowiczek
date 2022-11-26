import { createAction, props } from "@ngrx/store";
import { Post } from "../models/post";

export const createNewPostStart = createAction('[Posts] Create New Post Start', props<any>());
export const createNewPostSuccess = createAction('[Posts] Create New Post Success');
export const createNewPostError = createAction('[Posts] Create New Post Error');

export const getOwnPostsStart = createAction('[Posts] Get Own Posts Start');
export const getOwnPostsSuccess = createAction('[Posts] Get Own Posts Success', props<{ posts: Post[] }>());
export const getOwnPostsError = createAction('[Posts] Get Own Posts Error');

export const getOwnAndFollowingPostsStart = createAction('[Posts] Get Own and Following Posts Start');
export const getOwnAndFollowingPostsSuccess = createAction('[Posts] Get Own and Following Posts Success', props<{ posts: Post[] }>());
export const getOwnAndFollowingPostsError = createAction('[Posts] Get Own and Following Posts Error');

export const likeAPostStart = createAction('[Posts] Like a Post Start', props<{ postId: number, likesArray: string[]}>());
export const likeAPostSuccess = createAction('[Posts] Like a Post Success');
export const likeAPostError = createAction('[Posts] Like a Post Error');
