import { Component } from '@angular/core';
import { VALUE_PROVIDER } from '../shared/value-read-provider';
import { TextReaderService } from './text-reader.service';

@Component({
  template: `
      <p>text-reader-page-component works!</p>
      <app-reader></app-reader>
  `,
  providers: [
    {provide: VALUE_PROVIDER, useClass: TextReaderService}
  ]
})
export class TextReaderPageComponent {
}
