import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EffectsModule } from "@ngrx/effects";

import { AuthEffects } from "./effects/auth.effects";
import { AuthRoutingModule } from "./auth-routing.module";
import { LoginComponent } from "./login/login.component";
import { SharedModule } from "../shared/shared.module";
import { StoreModule } from "@ngrx/store";
import { AuthReducer } from "./reducer/auth.reducer";
import { AuthService } from "./services/auth.service";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AuthRoutingModule,
    StoreModule.forFeature("auth", AuthReducer),
    EffectsModule.forFeature([AuthEffects])
  ],
  declarations: [LoginComponent],
  providers: [AuthService]
  // providers: [AuthService, LocalStorageService, AuthGuardService]
})
export class AuthModule {}
