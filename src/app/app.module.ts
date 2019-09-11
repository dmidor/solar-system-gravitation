import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EarthModule } from './earth/earth.module';
import { JupiterModule } from './jupiter/jupiter.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EarthModule,
    JupiterModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
