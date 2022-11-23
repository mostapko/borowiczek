import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AuthenticationService } from "../services/authentication.service";
import { catchError, map, mergeMap, Observable, of, tap } from "rxjs";
import * as fromAuthentication from '../actions/authentication.actions';
import { Action } from "@ngrx/store";
import { Router} from "@angular/router";
import { LocalizeRouterService } from "@gilsdav/ngx-translate-router";

@Injectable()
export class AuthenticationEffects {
  constructor(private actions$: Actions,
              private authenticationService: AuthenticationService,
              private router: Router,
              private localizeService: LocalizeRouterService) {}

  loginUser$: Observable<Action> = createEffect(() => {
      return this.actions$.pipe(
        ofType(fromAuthentication.loginStart),
        mergeMap((action) => this.authenticationService.loginUser(action.identifier, action.password).pipe(
            map((data: any) => {
              let userData = {
                id: data['user'].id,
                username: data['user'].username,
                email: data['user'].email,
                token: data['jwt'],
                isAuthenticated: true,
              }
              return fromAuthentication.loginSuccess({ user: userData });
            }),
          tap((data: any) => {
            let route: any = this.localizeService.translateRoute('/');
            this.router.navigate([route]);
          }),
            catchError(() => {
              return of(fromAuthentication.loginError());
            }),
          ),
        ),
      );
    },
  );

  logoutUser$ = createEffect(() => this.actions$.pipe(
    ofType(fromAuthentication.logoutUser),
    tap(() => {
      window.localStorage.clear();
      let route: any = this.localizeService.translateRoute('/start');
      this.router.navigate([route]);
    }),
  ), { dispatch: false });


  registerUser$: Observable<Action> = createEffect(() => {
      return this.actions$.pipe(
        ofType(fromAuthentication.registerStart),
        mergeMap((action) => this.authenticationService.registerUser(
          action.username,
          action.email,
          action.password).pipe(
            map(() => {
              return fromAuthentication.registerSuccess();
            }),
            catchError(() => {
              return of(fromAuthentication.registerError());
            }),
          ),
        ),
      );
    },
  );
}
