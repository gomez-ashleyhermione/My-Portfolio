import { Component, AfterViewInit } from '@angular/core';

interface Project {
  title: string;
  category: string;
  description: string;
  tools: string[];
  link: string;
  role: string;
  featured?: boolean;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements AfterViewInit {
  allProjects: Project[] = [
    {
      title: 'CEFRS',
      category: 'Frontend',
      role: 'UI/UX Design & Frontend Developer',
      description: 'Campus Equipment & Facility Reservation System - A production-ready web application for digitizing resource management in academic institutions with real-time scheduling and automated notifications.',
      tools: ['Angular', 'TypeScript', 'Firebase'],
      link: 'https://github.com/PUP-BSIT/project-technova',
      featured: true
    },
    {
      title: 'Dragon Vault',
      category: 'Web App',
      role: 'UI/UX Design & Frontend Developer',
      description: 'Banking system integrating multiple banks with real-time SMS notifications for fund transfers. Middleware platform connecting banking systems to SMS Gateway for transaction alerts.',
      tools: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://github.com/PUP-BSIT/project-dragonfly',
      featured: true
    },
    {
      title: 'EduSync',
      category: 'UI/UX',
      role: 'UI/UX Design & Frontend Developer',
      description: 'Smart Class Scheduler - Flutter application for educational institutions with class scheduling, QR code-based attendance tracking, and Google Calendar integration.',
      tools: ['Flutter', 'Dart', 'Firebase'],
      link: 'https://github.com/Day-Ones/EDUSYNC-DayOnes',
      featured: true
    }
  ];

  ngAfterViewInit(): void {
    setTimeout(() => this.initProjectAnimations(), 300);
  }

  private initProjectAnimations(): void {
    const cards = document.querySelectorAll('.project-card');
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add('revealed');
      }, index * 100);
    });
  }
}
