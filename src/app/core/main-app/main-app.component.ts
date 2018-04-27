import { MediaMatcher } from "@angular/cdk/layout";
import {
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewChildren,
  QueryList
} from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import "rxjs/add/operator/filter";
import { Store, select } from "@ngrx/store";

@Component({
  selector: "main-app",
  templateUrl: "./main-app.component.html",
  styleUrls: ["./main-app.component.css"]
})

/* mian app */
export class MainAppComponent {
  isAuthenticated: boolean;
  private _mobileQueryListener: () => void;
  mobileQuery: MediaQueryList;

  //sidebar element
  @ViewChildren("snav") snavElement: QueryList<any>;

  constructor(
    private store: Store<any>,
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    public router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.store
      .pipe(select(state => state.auth.isAuthenticated))
      .subscribe(isAuthenticated => (this.isAuthenticated = isAuthenticated));

    this.mobileQuery = media.matchMedia("(max-width: 600px)");
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
