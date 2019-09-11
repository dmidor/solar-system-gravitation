import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EarthPlaneComponent } from './earth/earth-plane.component';
import { JupiterPlanetComponent } from './jupiter/jupiter-planet.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'earth'
  },
  {
    path: 'earth',
    component: EarthPlaneComponent,

  },
  {
    path: 'jupiter',
    component: JupiterPlanetComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
