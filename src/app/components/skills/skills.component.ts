import { Component, AfterViewInit } from '@angular/core';

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  description: string;
  icon: string;
  skills: Skill[];
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements AfterViewInit {
  skillCategories: SkillCategory[] = [
    {
      title: 'Frontend',
      description: 'Building responsive and performant applications',
      icon: 'code',
      skills: [
        { name: 'HTML/CSS', level: 95 },
        { name: 'JavaScript', level: 85 },
        { name: 'TypeScript', level: 80 },
        { name: 'Angular', level: 85 },
        { name: 'SCSS', level: 90 }
      ]
    },
    {
      title: 'Tools',
      description: 'Essential tools for modern development',
      icon: 'tool',
      skills: [
        { name: 'Figma', level: 90 },
        { name: 'Git & GitHub', level: 85 },
        { name: 'VS Code', level: 95 }
      ]
    }
  ];

  ngAfterViewInit(): void {
    setTimeout(() => this.animateProgressBars(), 500);
  }

  private animateProgressBars(): void {
    const progressBars = document.querySelectorAll('.skill-progress-fill');
    progressBars.forEach((bar) => {
      const level = bar.getAttribute('data-level');
      if (level) {
        (bar as HTMLElement).style.width = level + '%';
      }
    });
  }

  getIconPath(icon: string): string {
    const icons: { [key: string]: string } = {
      'layers': 'M12 2L2 7l10 5 10-5-10-5z M2 17l10 5 10-5M2 12l10 5 10-5',
      'code': 'M16 18L22 12 16 6 M8 6L2 12 8 18',
      'tool': 'M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z'
    };
    return icons[icon] || icons['layers'];
  }
}
