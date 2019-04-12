import { NgModule } from '@angular/core';
import * as Directives from "./directives/_index";
import * as Services from "./services/_index";

@NgModule({
  declarations: [
    Directives.IfViewportSizeDirective
  ],
  imports: [],
  exports: [
    Directives.IfViewportSizeDirective
  ],
  providers: [
    Services.IfViewportSizeService
  ],
  bootstrap: []
})
export class SharedModule { }
