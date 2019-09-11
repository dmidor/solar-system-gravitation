import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <a routerLink="">home</a> |
      <a routerLink="earth">earth</a> |
      <a routerLink="jupiter">jupiter</a>
      <router-outlet></router-outlet>
  `
})
export class AppComponent {
}
