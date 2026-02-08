import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  displayedRole = '';
  isTyping = true;
  private role = 'UI/UX Designer & Frontend Developer';
  private typingSpeed = 80;

  ngOnInit(): void {
    this.typeRole();
  }

  private typeRole(): void {
    let charIndex = 0;

    const typeInterval = setInterval(() => {
      if (charIndex < this.role.length) {
        this.displayedRole += this.role[charIndex];
        charIndex++;
      } else {
        clearInterval(typeInterval);
        this.isTyping = false;
      }
    }, this.typingSpeed);
  }
}
