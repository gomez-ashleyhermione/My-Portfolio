import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  displayedRole = '';
  isTyping = true;
  private roles = [
    'UI/UX Designer & Frontend Developer',
    'Creative Problem Solver',
    'Digital Experience Creator'
  ];
  private currentRoleIndex = 0;
  private typingSpeed = 80;
  private deletingSpeed = 50;
  private pauseDuration = 2000;

  ngOnInit(): void {
    this.typeRole();
  }

  private typeRole(): void {
    const currentRole = this.roles[this.currentRoleIndex];
    let charIndex = 0;

    const typeInterval = setInterval(() => {
      if (charIndex < currentRole.length) {
        this.displayedRole += currentRole[charIndex];
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => this.deleteRole(), this.pauseDuration);
      }
    }, this.typingSpeed);
  }

  private deleteRole(): void {
    const deleteInterval = setInterval(() => {
      if (this.displayedRole.length > 0) {
        this.displayedRole = this.displayedRole.slice(0, -1);
      } else {
        clearInterval(deleteInterval);
        this.currentRoleIndex = (this.currentRoleIndex + 1) % this.roles.length;
        setTimeout(() => this.typeRole(), 500);
      }
    }, this.deletingSpeed);
  }
}
