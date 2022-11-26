import { Action, createReducer, on } from "@ngrx/store";
import * as postActions from "../actions/posts.actions";
import { Post } from "../models/post";

export interface PostsState {
  postsList: Post[],
  postItem: Post,
}

const initialUserState: PostsState = {
  postsList: [],
  postItem: {
    author: '',
    author_name: '',
    content: '',
    created_at: '',
    id: 0,
    images: [],
    liked_by: [],
  }
};

// TODO
//
export const PostsFeatureKey = 'posts';
//
export const postsReducerTemp = createReducer(
  initialUserState,
  on(postActions.getOwnPostsSuccess, (state, { posts }) => ({
    ...state,
    postsList: posts
  })),
  on(postActions.getOwnAndFollowingPostsSuccess, (state, { posts }) => ({
    ...state,
    postsList: posts
  })),
);

export function postsReducer(state: PostsState | undefined, action: Action) {
  return postsReducerTemp(state, action);
}

