import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { EarthPlaneComponent } from './earth-plane.component';
import { EarthAtmosphereComponent } from './earth-atmosphere.component';


@NgModule({
  declarations: [EarthPlaneComponent, EarthAtmosphereComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [EarthPlaneComponent, EarthAtmosphereComponent]
})
export class EarthModule {
}
