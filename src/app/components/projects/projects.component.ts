import { Component, AfterViewInit } from '@angular/core';

interface Project {
  title: string;
  category: string;
  description: string;
  tools: string[];
  link: string;
  role: string;
  image: string | null;
  figmaLink: string | null;
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
      tools: ['Angular', 'Spring Boot', 'TypeScript'],
      link: 'https://github.com/PUP-BSIT/project-technova',
      figmaLink: 'https://www.figma.com/design/Ce5VD7JTj56IU30nCAR3JZ/Appdev-Mockup?node-id=0-1&t=qIyw5WGfMTnJovuF-1',
      image: 'assets/CEFRS.png',
      featured: true
    },
    {
      title: 'Dragon Vault',
      category: 'Web App',
      role: 'UI/UX Design & Frontend Developer',
      description: 'Banking system integrating multiple banks with real-time SMS notifications for fund transfers. Middleware platform connecting banking systems to SMS Gateway for transaction alerts.',
      tools: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://github.com/PUP-BSIT/project-dragonfly',
      figmaLink: 'https://www.figma.com/design/cmMdduQ9nrQFW5MhwjUwye/Initial-Mockup?node-id=0-1&t=GRUidr7kOX3ax7Dx-1',
      image: 'assets/dragon_vault.png',
      featured: false
    },
    {
      title: 'EduSync',
      category: 'UI/UX',
      role: 'UI/UX Design & Frontend Developer',
      description: 'Smart Class Scheduler - Flutter application for educational institutions with class scheduling, QR code-based attendance tracking, and Google Calendar integration.',
      tools: ['Flutter', 'Dart', 'Firebase'],
      link: 'https://github.com/Day-Ones/EDUSYNC-DayOnes',
      figmaLink: null,
      image: null,
      featured: false
    },
    {
      title: 'NLCOM Inventory Management System',
      category: 'Web App',
      role: 'UI/UX Design & Frontend Developer',
      description: 'Comprehensive inventory management system for NLCOM with real-time tracking, maintenance scheduling, and asset management capabilities.',
      tools: ['Angular', 'Spring Boot', 'TypeScript', 'Bootstrap'],
      link: 'https://github.com/Technova-x-NLCOM/Maintenance',
      figmaLink: null,
      image: 'assets/nlcom-inventory-management-system.png',
      featured: false
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
