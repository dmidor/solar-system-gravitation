import { Component } from '@angular/core';
import { GRAVITATION_VALUE_PROVIDER } from '../shared/gravitation-provider';
import { EarthGravitationService } from './earth-gravitation.service';

@Component({
  template: `
      <p>We are on EARTH</p>
      <app-earth-atmosphere></app-earth-atmosphere>
  `,
  providers: [
    {provide: GRAVITATION_VALUE_PROVIDER, useClass: EarthGravitationService}
  ]
})
export class EarthPlaneComponent {

}
