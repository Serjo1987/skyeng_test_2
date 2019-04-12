import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import * as Components from './components/_index';

import {
  IConfig,
  IfViewportSizeConfig
} from './shared/services/if-viewport-size.service';

const config: IConfig = {
  medium: 600,
  large: 900
};

@NgModule({
  declarations: [
    AppComponent,
    Components.TestRenderComponentViewPortSizeComponent
  ],
  imports: [
    BrowserModule,
    SharedModule
  ],
  providers: [
    { provide: IfViewportSizeConfig, useValue: new IfViewportSizeConfig(config) }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
