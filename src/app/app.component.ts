import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <a routerLink="">home</a> |
      <a routerLink="text">text</a> |
      <a routerLink="voice">voice</a>
      <router-outlet></router-outlet>
  `
})
export class AppComponent {
}
