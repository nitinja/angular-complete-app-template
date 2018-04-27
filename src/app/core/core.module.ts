import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CoreRoutingModule } from "./core-routing.module";
import { SharedModule } from "../shared/shared.module";
import { AboutComponent } from "./static/about.component";

@NgModule({
  imports: [CommonModule, SharedModule, CoreRoutingModule],
  declarations: [AboutComponent]
})
export class CoreModule {}
