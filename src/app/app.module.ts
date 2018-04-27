import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

// redux imports
import { MetaReducer, StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { storeFreeze } from "ngrx-store-freeze";

import { AppRoutingModule } from "./app-routing.module";

import { SharedModule } from "./shared/shared.module";
import { AuthModule } from "./auth/auth.module";
import { CoreModule } from "./core/core.module";
import { DashboardModule } from "./dashboard/dashboard.module";
import { environment } from "../environments/environment";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { MainAppComponent } from "./core/main-app/main-app.component";
import { HeaderComponent } from "./core/main-app/header/header.component";
import { MenuComponent } from "./core/main-app/menu/menu.component";
import { NotFoundComponent } from "./core/static/not-found.component";

export const metaReducers: MetaReducer<any>[] = !environment.production
  ? [storeFreeze]
  : [];

@NgModule({
  declarations: [
    MainAppComponent,
    HeaderComponent,
    MenuComponent,
    NotFoundComponent
  ],
  imports: [
    // angular
    BrowserModule,
    ReactiveFormsModule,

    // shared modules
    SharedModule,

    // Application modules
    AuthModule,
    CoreModule,
    DashboardModule,

    // ngrx aka Redux
    // ngrx
    StoreModule.forRoot({}, { metaReducers }),

    //redux devtools
    StoreDevtoolsModule.instrument({
      name: "Seed App DevTools",
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production // Restrict extension to log-only mode
    }),

    EffectsModule.forRoot([]),

    //Main Routing, *must be a last module*
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [MainAppComponent]
})
export class AppModule {}
