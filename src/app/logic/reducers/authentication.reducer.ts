import { Action, createReducer, on } from "@ngrx/store";
import * as authenticationActions from "../actions/authentication.actions";

export interface UserState {
  id: string,
  name: string,
  email: string,
  isLoggedIn: boolean,
  token: string,
}

const initialUserState: UserState = {
  id: '',
  name: '',
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
  on(authenticationActions.logoutUser, () => ({
    ...initialUserState
  })),
  on(authenticationActions.userDataSetSuccess, (state, {name, email}) => ({
    ...state,
    email: email,
    name: name,
  })),
);

export function authenticationReducer(state: UserState | undefined, action: Action) {
  return authenticationReducerTemp(state, action);
}

