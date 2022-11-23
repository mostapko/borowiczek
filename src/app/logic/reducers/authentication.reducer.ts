import { Action, createReducer, on } from "@ngrx/store";
import * as authenticationActions from "../actions/authentication.actions";

export interface UserState {
  id: string,
  username: string,
  email: string,
  isLoggedIn: boolean,
  token: string,
}

const initialUserState: UserState = {
  id: '',
  username: '',
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
    username: user.username,
    email: user.email,
    isLoggedIn: true,
    token: user.token
  })),
  on(authenticationActions.loginError, () => ({
    ...initialUserState
  })),
  on(authenticationActions.logoutUser, () => ({
    ...initialUserState
  })),
);

export function authenticationReducer(state: UserState | undefined, action: Action) {
  return authenticationReducerTemp(state, action);
}

