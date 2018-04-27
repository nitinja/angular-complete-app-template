import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutComponent } from "./static/about.component";
import { AuthGuard } from "../auth/services/auth-guard.service";

const routes: Routes = [
  {
    path: "about",
    component: AboutComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule {}
