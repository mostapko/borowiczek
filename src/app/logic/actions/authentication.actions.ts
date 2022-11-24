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

export const logoutUser = createAction('[Authentication] Logout User');

export const userDataSetStart = createAction('[Authentication] Set user data');
export const userDataSetSuccess = createAction('[Authentication] Set user data success', props<{
  name: string;
  email: string;
}>(), );
export const userDataSetError = createAction('[Authentication] Set user data error');

