import { Injectable } from '@angular/core';
import { ValueReadProvider } from '../shared/value-read-provider';

@Injectable()
export class TextReaderService implements ValueReadProvider {

  getValue(): string {
    return 'value from text reader provider';
  }
}
