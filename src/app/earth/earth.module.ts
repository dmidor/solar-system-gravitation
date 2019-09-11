import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { EarthPlaneComponent } from './earth-plane.component';


@NgModule({
  declarations: [EarthPlaneComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [EarthPlaneComponent]
})
export class EarthModule {
}
