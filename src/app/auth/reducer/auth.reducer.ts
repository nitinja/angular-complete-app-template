import { Action } from "@ngrx/store";
import { User, Authenticate } from "../models/user";

export const LOCAL_STORAGE_USER_KEY = "LOCAL_STORAGE_USER";

export enum AuthActionTypes {
  LOGIN = "[Auth] Login",
  LOGIN_SUCCESS = "[Auth] Login Success",
  LOGIN_FAILURE = "[Auth] Login Failure",
  LOGOUT = "[Auth] Logout",
  REDIRECT_TO_LOGIN = "[Auth] Redirect to Login"
}

export class Login implements Action {
  readonly type = AuthActionTypes.LOGIN;
  constructor(public payload: Authenticate = null) {}
}

export class LoginSuccess implements Action {
  readonly type = AuthActionTypes.LOGIN_SUCCESS;

  constructor(public payload: User) {}
}

export class LoginFailure implements Action {
  readonly type = AuthActionTypes.LOGIN_FAILURE;
  constructor(public payload: any) {}
}

export class LoginRedirect implements Action {
  readonly type = AuthActionTypes.REDIRECT_TO_LOGIN;
}

export class Logout implements Action {
  readonly type = AuthActionTypes.LOGOUT;
}

// export type AuthActions =
//   | Login
//   | LoginSuccess
//   | LoginFailure
//   | LoginRedirect
//   | Logout;

// state interface
export interface AuthState {
  isAuthenticated: boolean;
  user: User;
  pending: boolean;
  error: string | null;
}

//initialState: load from localstorage if possible
export const initialState: AuthState = getLocalOrEmptyAuthState();

//reducer
export function AuthReducer(
  state: AuthState = initialState,
  action
): AuthState {
  switch (action.type) {
    case AuthActionTypes.LOGIN:
      return { ...state, pending: true, error: null };
    case AuthActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        pending: false,
        error: null
      };
    case AuthActionTypes.LOGIN_FAILURE:
      return {
        ...state,
        pending: false,
        error: action.payload
      };
    case AuthActionTypes.LOGOUT:
      return getEmptyAuthState();
    default:
      return state;
  }
}

//selectors
export const selectorPending = state => state.auth.pending;
export const selectorIsAuthenticated = state => state.auth.isAuthenticated;

function getEmptyAuthState() {
  return {
    isAuthenticated: false,
    user: null,
    pending: false,
    error: null
  };
}

/**
 * This function returns user from local storage if present. Else it returns empty state.
 */
function getLocalOrEmptyAuthState() {
  const userfromLocalStorage = JSON.parse(
    window.localStorage.getItem(LOCAL_STORAGE_USER_KEY)
  );

  return {
    isAuthenticated: userfromLocalStorage ? true : false,
    user: userfromLocalStorage,
    pending: false,
    error: null
  };
}
