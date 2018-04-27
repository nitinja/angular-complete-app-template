import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, exhaustMap, map, tap } from "rxjs/operators";

import {
  AuthActionTypes,
  Login,
  LoginFailure,
  LoginSuccess,
  LOCAL_STORAGE_USER_KEY
} from "../reducer/auth.reducer";
import { Authenticate } from "../models/user";
import { AuthService } from "../services/auth.service";
import { LocalStorageService } from "../../shared/services/local-storage.service";

@Injectable()
export class AuthEffects {
  @Effect()
  login$ = this.actions$.pipe(
    ofType<Login>(AuthActionTypes.LOGIN),
    map(action => action.payload),
    exhaustMap((auth: Authenticate) =>
      this.authService
        .login(auth)
        .pipe(
          map(user => new LoginSuccess(user)),
          catchError(error => of(new LoginFailure(error)))
        )
    )
  );

  // this effect navigates to dashboard after login success
  @Effect({ dispatch: false })
  loginSuccess$ = this.actions$.pipe(
    ofType<LoginSuccess>(AuthActionTypes.LOGIN_SUCCESS),
    map(action => action.payload),
    tap(user => {
      this.localStorageService.setItem(LOCAL_STORAGE_USER_KEY, user);
      this.router.navigate(["/dashboard"]);
    })
  );

  @Effect({ dispatch: false })
  loginRedirect$ = this.actions$.pipe(
    ofType(AuthActionTypes.REDIRECT_TO_LOGIN, AuthActionTypes.LOGOUT),
    tap(() => {
      this.localStorageService.removeItem(LOCAL_STORAGE_USER_KEY);
      this.router.navigate(["/login"]);
    })
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router,
    private localStorageService: LocalStorageService
  ) {}
}
