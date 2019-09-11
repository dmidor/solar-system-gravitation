import { Injectable } from '@angular/core';
import { GravitationProvider } from '../shared/gravitation-provider';

@Injectable()
export class JupiterGravitationService implements GravitationProvider {

  getValue(): string {
    return '24,79 m/s2 ';
  }
}
