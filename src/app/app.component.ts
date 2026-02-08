import { Component, OnInit, OnDestroy } from '@angular/core';
import { ScrollAnimationService } from './services/scroll-animation.service';
import { CursorService } from './services/cursor.service';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
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
      // Cursor service disabled - using default cursor
      // this.cursor.init();
    }, 100);
  }

  ngOnDestroy(): void {
    this.scrollAnimation.destroy();
    // this.cursor.destroy();
  }
}