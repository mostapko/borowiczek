import { Injectable } from '@angular/core';
import { Store } from "@ngrx/store";
import { UserState } from "../reducers/authentication.reducer";
import { Observable } from "rxjs";
import {selectUserAllData, selectUserFollowing, selectUserId, selectUserLoggedIn, selectUserName} from "../reducers";
import * as authenticationActions from "../actions/authentication.actions"

@Injectable({
  providedIn: 'root'
})
export class AuthenticationDataService {
  private userId!: string;

  constructor(private store: Store<UserState>) {
    this.selectUserId().subscribe((i) => {
      if (i) {
        this.userId = i;
      }
    });
  }


  public selectUserName(): Observable<string> {
    return this.store.select(selectUserName);
  }

  public selectUserId(): Observable<string> {
    return this.store.select(selectUserId);
  }

  public selectUserFollowing(): Observable<string[]> {
    return this.store.select(selectUserFollowing);
  }

  public selectUserAllData(): Observable<UserState> {
    return this.store.select(selectUserAllData);
  }

  public selectIsUserLoggedIn(): Observable<boolean> {
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
    this.store.dispatch(authenticationActions.logoutUserStart());
  }

  public getUserOwnFollowing(): void {
    this.store.dispatch(authenticationActions.getUserOwnFollowingStart({ userId: this.userId } ));
  }

}
