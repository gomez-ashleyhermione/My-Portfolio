import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects = [
    {
      title: 'E-Commerce Mobile App',
      description: 'A modern and intuitive mobile shopping experience with clean UI and smooth user flow.',
      category: 'Mobile Design',
      tools: ['Figma', 'Prototyping', 'User Research'],
      image: 'project1-placeholder',
      link: '#'
    },
    {
      title: 'Task Management Dashboard',
      description: 'Web dashboard for project management with focus on usability and data visualization.',
      category: 'Web Design',
      tools: ['Adobe XD', 'Wireframing', 'Design System'],
      image: 'project2-placeholder',
      link: '#'
    },
    {
      title: 'Banking App Redesign',
      description: 'Redesigned banking app interface focusing on accessibility and user trust.',
      category: 'App Redesign',
      tools: ['Sketch', 'User Testing', 'Accessibility'],
      image: 'project3-placeholder',
      link: '#'
    },
    {
      title: 'Restaurant Website',
      description: 'Modern restaurant website with online ordering system and responsive design.',
      category: 'Web Design',
      tools: ['Figma', 'Responsive Design', 'Branding'],
      image: 'project4-placeholder',
      link: '#'
    }
  ];
  
  selectedCategory = 'All';
  categories = ['All', 'Mobile Design', 'Web Design', 'App Redesign'];
  
  get filteredProjects() {
    if (this.selectedCategory === 'All') {
      return this.projects;
    }
    return this.projects.filter(project => project.category === this.selectedCategory);
  }
  
  selectCategory(category: string) {
    this.selectedCategory = category;
  }
}