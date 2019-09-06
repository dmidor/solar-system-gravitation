import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { VoiceReaderPageComponent } from './voice-reader-page.component';


@NgModule({
  declarations: [VoiceReaderPageComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [VoiceReaderPageComponent]
})
export class VoiceModule {

  constructor() {
    console.log('DM VoiceModule');
  }
}
