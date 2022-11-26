import { Action, createReducer, on } from "@ngrx/store";
import * as authenticationActions from "../actions/authentication.actions";
import {getUserOwnFollowingSuccess} from "../actions/authentication.actions";

export interface UserState {
  id: string,
  username: string,
  following: string[],
  email: string,
  isLoggedIn: boolean,
  token: string,
}

const initialUserState: UserState = {
  id: '',
  username: '',
  following: [],
  email: '',
  isLoggedIn: false,
  token: '',
};

export const UserFeatureKey = 'user';

export const authenticationReducerTemp = createReducer(
  initialUserState,
  on(authenticationActions.loginSuccess, (state, {user}) => ({
    ...state,
    id: user.id,
    isLoggedIn: true,
    token: user.token
  })),
  on(authenticationActions.loginError, () => ({
    ...initialUserState
  })),
  on(authenticationActions.logoutUserSuccess, () => ({
    ...initialUserState
  })),
  on(authenticationActions.userDataSetSuccess, (state, { username, email }) => ({
    ...state,
    email: email,
    username: username,
  })),
  on(authenticationActions.userDataSetSuccess, (state, { username, email }) => ({
    ...state,
    email: email,
    username: username,
  })),
  on(authenticationActions.getUserOwnFollowingSuccess, (state, { following }) => ({
    ...state,
    following: following
  })),
);

export function authenticationReducer(state: UserState | undefined, action: Action) {
  return authenticationReducerTemp(state, action);
}

