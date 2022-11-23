import {Action, createAction, props} from '@ngrx/store';
import {User} from "../models/user";

const STORAGE = '@ngrx/store/storage';

export class Storage implements Action {
  readonly type = STORAGE;

  constructor(readonly payload: string) {
  }
}

export const loginStart = createAction('[Authentication] Login Start', props<{
    identifier: string;
    password: string;
  }>(),
);
export const loginSuccess = createAction('[Authentication] Login Success', props<{ user: User }>());
export const loginError = createAction('[Authentication] Login Error');

export const registerStart = createAction('[Authentication] Register Start', props<{
    username: string;
    email: string;
    password: string;
  }>(),
);
export const registerSuccess = createAction('[Authentication] Register Success');
export const registerError = createAction('[Authentication] Register Error');

export const logoutUser = createAction('[Authentication] Logout User');
