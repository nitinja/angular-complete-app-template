import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Store } from "@ngrx/store";
import { Logout } from "../../../auth/reducer/auth.reducer";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styles: []
})
export class HeaderComponent {
  @Output() toggle: EventEmitter<any> = new EventEmitter();

  constructor(private store: Store<any>) {}

  onToggle() {
    this.toggle.emit();
  }

  logout() {
    this.store.dispatch(new Logout());
  }
}
