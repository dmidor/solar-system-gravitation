import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { JupiterPlanetComponent } from './jupiter-planet.component';

@NgModule({
  declarations: [JupiterPlanetComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [JupiterPlanetComponent]
})
export class JupiterModule {
}
