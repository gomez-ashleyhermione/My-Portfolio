import { Component, OnInit, OnDestroy } from '@angular/core';
import { ScrollAnimationService } from './services/scroll-animation.service';
import { CursorService } from './services/cursor.service';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
    <app-footer></app-footer>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'UI/UX Designer Portfolio';

  constructor(
    private scrollAnimation: ScrollAnimationService,
    private cursor: CursorService
  ) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.scrollAnimation.initScrollAnimations();
      this.cursor.init();
    }, 100);
  }

  ngOnDestroy(): void {
    this.scrollAnimation.destroy();
    this.cursor.destroy();
  }
}