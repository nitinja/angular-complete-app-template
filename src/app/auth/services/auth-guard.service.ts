import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";
import { map, take } from "rxjs/operators";
import * as AuthActions from "../reducer/auth.reducer";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private store: Store<any>) {}

  canActivate(): Observable<boolean> {
    return this.store.pipe(
      select(AuthActions.selectorIsAuthenticated),
      map(authed => {
        if (!authed) {
          this.store.dispatch(new AuthActions.LoginRedirect());
          return false;
        }

        return true;
      }),
      take(1)
    );
  }
}
