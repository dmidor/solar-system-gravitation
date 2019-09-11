import { Injectable } from '@angular/core';
import { GravitationProvider } from '../shared/gravitation-provider';

@Injectable()
export class EarthGravitationService implements GravitationProvider {

  getValue(): string {
    return '9,80665 m/s2';
  }
}
