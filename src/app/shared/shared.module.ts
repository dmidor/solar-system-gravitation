import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GravitationSensorComponent } from './gravitation-sensor.component';

@NgModule({
  declarations: [GravitationSensorComponent],
  imports: [
    CommonModule
  ],
  exports: [
    GravitationSensorComponent
  ]

})
export class SharedModule { }
