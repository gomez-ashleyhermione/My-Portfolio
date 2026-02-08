import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appParallax]'
})
export class ParallaxDirective {
  @Input() parallaxSpeed: number = 0.5;

  constructor(private el: ElementRef) {}

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const scrollPosition = window.scrollY;
    const elementPosition = this.el.nativeElement.offsetTop;
    const distance = scrollPosition - elementPosition;
    
    if (Math.abs(distance) < window.innerHeight) {
      const yPos = -(distance * this.parallaxSpeed);
      this.el.nativeElement.style.transform = `translateY(${yPos}px)`;
    }
  }
}
