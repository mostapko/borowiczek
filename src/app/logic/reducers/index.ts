import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import { authenticationReducer, UserFeatureKey, UserState } from './authentication.reducer';
import {SettingsFeatureKey, settingsReducer, SettingsState} from "./settings.reducer";

export interface State {
  user: UserState,
  settings: SettingsState
}

export const reducers: ActionReducerMap<State> = {
  user: authenticationReducer,
  settings: settingsReducer
};

// USER AUTHENTICATION
export const getUserFeatureState = createFeatureSelector<UserState>(UserFeatureKey);

const getUserState = createSelector(getUserFeatureState, (state) => {
  return state;
});

export const selectUserAllData = createSelector(getUserState, (state) => state);
export const selectUserLoggedIn = createSelector(getUserState, (state) => state.isLoggedIn);
export const selectUserToken = createSelector(getUserState, (state) => state.token);
export const selectUserName = createSelector(getUserState, (state) => state.name);


// SETINGS
export const getSettingsFeatureState = createFeatureSelector<SettingsState>(SettingsFeatureKey);

const getSettingsState = createSelector(getSettingsFeatureState, (state) => {
  return state;
});

export const selectSettingsLoginRegisterViewType = createSelector(getSettingsState,
  (state) => state.loginRegisterViewType);
