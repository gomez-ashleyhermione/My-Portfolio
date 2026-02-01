import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  stats = [
    { value: '50+', label: 'Hours of Learning' },
    { value: '10+', label: 'Projects Completed' },
    { value: '2+', label: 'Tools Mastered' },
    { value: '100%', label: 'Passion for Design' }
  ];
}