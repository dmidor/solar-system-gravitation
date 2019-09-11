import { Component } from '@angular/core';
import { GRAVITATION_VALUE_PROVIDER } from '../shared/gravitation-provider';
import { EarthGravitationService } from './earth-gravitation.service';

@Component({
  selector: 'app-earth-atmosphere',
  template: `
      <p>We are inside atmosphere</p>
      <app-gravitation-sensor></app-gravitation-sensor>
  `
})
export class EarthAtmosphereComponent {

}
