import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursorService {
  private cursor: HTMLElement | null = null;
  private cursorDot: HTMLElement | null = null;

  init(): void {
    if (window.innerWidth < 768) return; // Skip on mobile

    this.cursor = document.createElement('div');
    this.cursor.className = 'custom-cursor';
    document.body.appendChild(this.cursor);

    this.cursorDot = document.createElement('div');
    this.cursorDot.className = 'custom-cursor-dot';
    document.body.appendChild(this.cursorDot);

    document.addEventListener('mousemove', this.onMouseMove.bind(this));
    
    const interactiveElements = document.querySelectorAll('a, button, .btn, .project-card, .skill-tag');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', () => this.cursor?.classList.add('cursor-hover'));
      el.addEventListener('mouseleave', () => this.cursor?.classList.remove('cursor-hover'));
    });
  }

  private onMouseMove(e: MouseEvent): void {
    if (this.cursor) {
      this.cursor.style.left = e.clientX + 'px';
      this.cursor.style.top = e.clientY + 'px';
    }
    if (this.cursorDot) {
      this.cursorDot.style.left = e.clientX + 'px';
      this.cursorDot.style.top = e.clientY + 'px';
    }
  }

  destroy(): void {
    this.cursor?.remove();
    this.cursorDot?.remove();
  }
}
