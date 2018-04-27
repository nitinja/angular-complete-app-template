import { Injectable } from "@angular/core";
import { Observable, throwError, Subject } from "rxjs";
import { of } from "rxjs/observable/of";
import { merge } from "rxjs/observable/merge";
import { mapTo, delay } from "rxjs/operators";

import { Authenticate, User } from "../models/user";

@Injectable()
export class AuthService {
  constructor() {}

  login({ username, password }: Authenticate): Observable<User> {
    /**
     * Simulate a failed login to display the error
     * message for the login form.
     */
    if (username !== "test") {
      return throwError("Invalid username or password");
    }

    const observer = of(null);
    return merge(
      observer.pipe(
        mapTo({
          name: "Test User",
          token: "DEMO_TOKEN"
        }),
        delay(1000)
      )
    );
  }

  logout() {
    return of(true);
  }
}
