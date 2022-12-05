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
    let userData = {
        id: '',
        username: '',
        email: '',
        token: '',
        isAuthenticated: false,
    };
      return this.actions$.pipe(
        ofType(fromAuthentication.loginStart),
        mergeMap((action) => this.authenticationService.loginUser(action.identifier, action.password).pipe(
            map((data: any) => {
              userData['token'] = data['data']['session']['access_token'];
              userData['id'] = data['data']['user']['id'];
              userData['isAuthenticated'] = true;

              return fromAuthentication.loginSuccess({ user: userData });
            }),
          tap(() => {
            let route: any = this.localizeService.translateRoute('/');
            this.router.navigate([route]);
          }),
            catchError((err) => {
              return of(fromAuthentication.loginError());
            }),
          ),
        ),
      );
    },
  );

  logoutUser$: Observable<Action> = createEffect(() => {
      return this.actions$.pipe(
        ofType(fromAuthentication.logoutUserStart),
        mergeMap((action) => this.authenticationService.logoutUser().pipe(
            map((data: any) => {
              this.router.navigate([this.localizeService.translateRoute('/')]);
              return fromAuthentication.logoutUserSuccess();
            }),
            catchError(() => {
              return of(fromAuthentication.logoutUserError());
            }),
          ),
        ),
      );
    },
  );

  logoutUserChangeRoute$ = createEffect(() => this.actions$.pipe(
    ofType(fromAuthentication.logoutUserSuccess),
    tap(() => {
      window.localStorage.clear();
      let route: any = this.localizeService.translateRoute('/start');
      this.router.navigate([route]);
      location.reload();
    }),
  ), { dispatch: false });


  registerUser$: Observable<Action> = createEffect(() => {
      return this.actions$.pipe(
        ofType(fromAuthentication.registerStart),
        mergeMap((action) => this.authenticationService.registerUser(
          action.username,
          action.email,
          action.password).pipe(
            map((d) => {
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


  loginUserData$: Observable<Action> = createEffect(() => {
      return this.actions$.pipe(
        ofType(fromAuthentication.loginSuccess),
        mergeMap((action) => this.authenticationService.loginUserInfo().pipe(
            map((data: any) => {
              let email = data['data']['user']['identities'][0]['identity_data']['email'];
              let username = data['data']['user']['user_metadata']['username'];
              return fromAuthentication.userDataSetSuccess({ username: username, email: email });
            }),
            catchError(() => {
              return of(fromAuthentication.userDataSetError());
            }),
          ),
        ),
      );
    },
  );

  getUserOwnFollowing$: Observable<Action> = createEffect(() => {
      return this.actions$.pipe(
        ofType(fromAuthentication.getUserOwnFollowingStart),
        mergeMap((action) => this.authenticationService.getUserOwnFollowing(action.userId).pipe(
            map((data: any) => {
              return fromAuthentication.getUserOwnFollowingSuccess({ following: data.data[0]['following'] });
            }),
            catchError(() => {
              return of(fromAuthentication.getUserOwnFollowingError());
            }),
          ),
        ),
      );
    },
  );

}
