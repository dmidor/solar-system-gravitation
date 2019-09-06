import { Component, Inject } from '@angular/core';
import { VALUE_PROVIDER, ValueReadProvider } from './value-read-provider';

@Component({
  selector: 'app-reader',
  template: `
      <p>
          value : {{valueProvider.getValue()}}
      </p>
  `
})
export class ReaderComponent {

  constructor(@Inject(VALUE_PROVIDER) public valueProvider: ValueReadProvider) {
  }

}
