import { Component } from '@angular/core';
import { GRAVITATION_VALUE_PROVIDER } from '../shared/gravitation-provider';
import { JupiterGravitationService } from './jupiter-gravitation.service';

@Component({
  template: `
      <p>We are on JUPITER</p>
      <img src="/assets/jupiter.png" style="height: 300px"/>
      <app-gravitation-sensor></app-gravitation-sensor>
  `,
  providers: [
    {provide: GRAVITATION_VALUE_PROVIDER, useClass: JupiterGravitationService}
  ]
})
export class JupiterPlanetComponent {
}
