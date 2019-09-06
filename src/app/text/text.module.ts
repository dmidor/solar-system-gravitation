import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { TextReaderPageComponent } from './text-reader-page.component';

@NgModule({
  declarations: [TextReaderPageComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [TextReaderPageComponent]
})
export class TextModule {
}
