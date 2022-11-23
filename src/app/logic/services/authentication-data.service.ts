import { Injectable } from '@angular/core';
import { Store } from "@ngrx/store";
import { UserState } from "../reducers/authentication.reducer";
import { Observable } from "rxjs";
import { selectUserLoggedIn, selectUserName } from "../reducers";
import * as authenticationActions from "../actions/authentication.actions"

@Injectable({
  providedIn: 'root'
})
export class AuthenticationDataService {

  constructor(private store: Store<UserState>) {}

  public getUserName(): Observable<string> {
    return this.store.select(selectUserName);
  }

  public getIsUserLoggedIn(): Observable<boolean> {
    return this.store.select(selectUserLoggedIn);
  }

  public loginUser(identifier: string, password: string): void {
    this.store.dispatch(authenticationActions.loginStart({
      identifier: identifier,
      password: password
    }),);
  }

  public registerUser(username: string, email: string, password: string): void {
    this.store.dispatch(authenticationActions.registerStart({
      username: username,
      email: email,
      password: password
    }),);
  }

  public logoutUser(): void {
    this.store.dispatch(authenticationActions.logoutUser());
  }

}
