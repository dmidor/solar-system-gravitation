import { Component, OnInit } from '@angular/core';
import { VALUE_PROVIDER } from '../shared/value-read-provider';
import { VoiceReaderService } from './voice-reader.service';

@Component({
  template: `
      <p>voice-reader-component works!</p>
      <app-reader></app-reader>
  `,
  providers: [
    {provide: VALUE_PROVIDER, useClass: VoiceReaderService}
  ]
})
export class VoiceReaderPageComponent {

}
