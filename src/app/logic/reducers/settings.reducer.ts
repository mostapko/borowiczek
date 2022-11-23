import { Action, createReducer, on } from "@ngrx/store";
import * as settingsActions from "../actions/settings.actions";

export interface SettingsState {
  loginRegisterViewType: number
}

const initialUserState: SettingsState = {
  loginRegisterViewType: 0
};

export const SettingsFeatureKey = 'settings';

export const settingsReducerTemp = createReducer(
  initialUserState,
  on(settingsActions.changeLoginRegisterScreenViewType, (state) => ({
    ...state,
    loginRegisterViewType: state.loginRegisterViewType === 0 ? 1 : 0
  })),
);

export function settingsReducer(state: SettingsState | undefined, action: Action) {
  return settingsReducerTemp(state, action);
}

