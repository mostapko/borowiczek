import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import { authenticationReducer, UserFeatureKey, UserState } from './authentication.reducer';
import { SettingsFeatureKey, settingsReducer, SettingsState } from "./settings.reducer";
import { PostsState, postsReducer, PostsFeatureKey } from "./posts.reducer";

export interface State {
  user: UserState,
  settings: SettingsState,
  posts: PostsState,
}

export const reducers: ActionReducerMap<State> = {
  user: authenticationReducer,
  settings: settingsReducer,
  posts: postsReducer
};

// USER AUTHENTICATION
export const getUserFeatureState = createFeatureSelector<UserState>(UserFeatureKey);

const getUserState = createSelector(getUserFeatureState, (state) => {
  return state;
});

export const selectUserAllData = createSelector(getUserState, (state) => state);
export const selectUserLoggedIn = createSelector(getUserState, (state) => state.isLoggedIn);
export const selectUserToken = createSelector(getUserState, (state) => state.token);
export const selectUserName = createSelector(getUserState, (state) => state.username);
export const selectUserId = createSelector(getUserState, (state) => state.id);
export const selectUserFollowing = createSelector(getUserState, (state) => state.following);


// POSTS
export const getPostsFeatureState = createFeatureSelector<PostsState>(PostsFeatureKey);

const getPostsState = createSelector(getPostsFeatureState, (state) => {
  return state;
});

export const selectOwnPostsList = createSelector(getPostsFeatureState, (state) => state.postsList);


// SETTINGS
export const getSettingsFeatureState = createFeatureSelector<SettingsState>(SettingsFeatureKey);

const getSettingsState = createSelector(getSettingsFeatureState, (state) => {
  return state;
});

export const selectSettingsLoginRegisterViewType = createSelector(getSettingsState,
  (state) => state.loginRegisterViewType);
