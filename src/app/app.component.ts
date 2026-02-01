import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <app-hero></app-hero>
    <app-about></app-about>
    <app-skills></app-skills>
    <app-projects></app-projects>
    <app-contact></app-contact>
    <app-footer></app-footer>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'UI/UX Designer Portfolio';
}