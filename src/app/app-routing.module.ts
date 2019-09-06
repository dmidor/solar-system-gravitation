import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TextReaderPageComponent } from './text/text-reader-page.component';
import { VoiceReaderPageComponent } from './voice/voice-reader-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'text'
  },
  {
    path: 'voice',
    component: VoiceReaderPageComponent,

  },
  {
    path: 'text',
    component: TextReaderPageComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
