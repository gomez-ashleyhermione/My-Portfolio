import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  designTools = [
    { name: 'Figma', level: 85, icon: '🎨' },
    { name: 'Adobe XD', level: 75, icon: '🎨' },
    { name: 'Sketch', level: 70, icon: '✏️' },
    { name: 'Adobe Photoshop', level: 80, icon: '🖼️' },
    { name: 'Adobe Illustrator', level: 75, icon: '🎯' }
  ];
  
  skills = [
    { name: 'User Research', level: 90 },
    { name: 'Wireframing', level: 85 },
    { name: 'Prototyping', level: 80 },
    { name: 'Visual Design', level: 85 },
    { name: 'Usability Testing', level: 75 },
    { name: 'Design Systems', level: 70 }
  ];
  
  otherSkills = [
    'HTML/CSS', 'JavaScript Basics', 'Responsive Design', 
    'Design Thinking', 'Agile Methodology', 'Team Collaboration'
  ];
}