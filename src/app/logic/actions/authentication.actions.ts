import { createAction, props } from '@ngrx/store';
import { User } from "../models/user";

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

export const logoutUserStart = createAction('[Authentication] Logout User Start');
export const logoutUserSuccess = createAction('[Authentication] Logout User Success');
export const logoutUserError = createAction('[Authentication] Logout User Errror');

export const userDataSetStart = createAction('[Authentication] Set user data');
export const userDataSetSuccess = createAction('[Authentication] Set user data success', props<{
  username: string;
  email: string;
}>(), );
export const userDataSetError = createAction('[Authentication] Set user data error');

export const getUserOwnFollowingStart = createAction('[Authentication] Get user own following start', props<{ userId: string }>());
export const getUserOwnFollowingError = createAction('[Authentication] Get user own following error');
export const getUserOwnFollowingSuccess = createAction('[Authentication] Get user own following success',
  props<{ following: string[] }>()
);

