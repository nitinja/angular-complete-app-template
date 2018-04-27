import { Component, OnInit, Input } from "@angular/core";
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from "@angular/forms";
import { Store, select } from "@ngrx/store";
import {
  AuthState,
  AuthActionTypes,
  Login,
  selectorPending
} from "../reducer/auth.reducer";

@Component({
  selector: "login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent {
  pendingX = false;
  loginForm: FormGroup;

  errorMessage$ = this.store.pipe(select(state => state.auth.error));
  pending: boolean;

  constructor(private store: Store<any>, private fb: FormBuilder) {
    this.createForm();
  }

  createForm(): void {
    this.loginForm = this.fb.group({
      username: ["", Validators.required],
      password: ["", Validators.required]
    });

    this.store.pipe(select(state => state.auth.pending)).subscribe(pending => {
      if (pending) {
        this.loginForm.disable();
      } else {
        this.loginForm.enable();
      }
      this.pending = pending;
    });
  }

  get username() {
    return this.loginForm.get("username");
  }

  get password() {
    return this.loginForm.get("password");
  }

  onSubmit(form: FormGroup) {
    console.log("form value: ", form.value);
    this.store.dispatch(
      new Login({
        username: form.value.username,
        password: form.value.password
      })
    );
  }
}
