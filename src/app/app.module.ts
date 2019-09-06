import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextModule } from './text/text.module';
import { VoiceModule } from './voice/voice.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    VoiceModule,
    TextModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
