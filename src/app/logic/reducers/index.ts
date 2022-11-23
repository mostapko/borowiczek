import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import { authenticationReducer, UserFeatureKey, UserState } from './authentication.reducer';

export interface State {
  user: UserState
}

export const reducers: ActionReducerMap<State> = {
  user: authenticationReducer,
};

export const getUserFeatureState = createFeatureSelector<UserState>(UserFeatureKey);

const getUserState = createSelector(getUserFeatureState, (state) => {
  return state;
});

export const selectUserAllData = createSelector(getUserState, (state) => state);
export const selectUserLoggedIn = createSelector(getUserState, (state) => state.isLoggedIn);
export const selectUserToken = createSelector(getUserState, (state) => state.token);
export const selectUserName = createSelector(getUserState, (state) => state.username);
