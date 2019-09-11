import { InjectionToken } from '@angular/core';

export interface GravitationProvider {
  getValue(): string;
}
export const GRAVITATION_VALUE_PROVIDER = new InjectionToken<GravitationProvider>('provider for gravitation value');
