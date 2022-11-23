import { Injectable } from '@angular/core';
import * as settingsActions from "../actions/settings.actions";
import { Store } from "@ngrx/store";
import { SettingsState } from "../reducers/settings.reducer";
import { Observable } from "rxjs";
import { selectSettingsLoginRegisterViewType } from "../reducers";

@Injectable({
  providedIn: 'root'
})
export class SettingsDataService {

  constructor(private store: Store<SettingsState>) { }

  public getLoginRegisterScreenViewType(): Observable<number> {
    return this.store.select(selectSettingsLoginRegisterViewType);
  }

  public changeLoginRegisterScreenViewType(): void {
    this.store.dispatch(settingsActions.changeLoginRegisterScreenViewType());
  }
}
