import { Component, Inject } from '@angular/core';
import { GRAVITATION_VALUE_PROVIDER, GravitationProvider } from './gravitation-provider';

@Component({
  selector: 'app-gravitation-sensor',
  template: `
      <p>
          Gravitation value : {{gravitationValueProvider.getValue()}}
      </p>
  `
})
export class GravitationSensorComponent {

  constructor(@Inject(GRAVITATION_VALUE_PROVIDER) public gravitationValueProvider: GravitationProvider) {
  }

}
