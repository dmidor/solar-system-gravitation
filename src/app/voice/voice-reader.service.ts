import { Injectable } from '@angular/core';
import { ValueReadProvider } from '../shared/value-read-provider';

@Injectable()
export class VoiceReaderService implements ValueReadProvider {

  getValue(): string {
    return 'value from voice reader provider';
  }
}
