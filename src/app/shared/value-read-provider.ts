import { InjectionToken } from '@angular/core';

export interface ValueReadProvider {
  getValue(): string;
}
export const VALUE_PROVIDER = new InjectionToken<ValueReadProvider>('provider for input value');
