import { Component } from '@angular/core';
import { GRAVITATION_VALUE_PROVIDER } from '../shared/gravitation-provider';
import { EarthGravitationService } from './earth-gravitation.service';

@Component({
  template: `
      <p>WE are on Earth</p>
      <app-gravitation-sensor></app-gravitation-sensor>
  `,
  providers: [
    {provide: GRAVITATION_VALUE_PROVIDER, useClass: EarthGravitationService}
  ]
})
export class EarthPlaneComponent {

}
