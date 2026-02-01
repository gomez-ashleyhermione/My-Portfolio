import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'your.email@example.com',
      link: 'mailto:your.email@example.com'
    },
    {
      icon: '📱',
      title: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: '📍',
      title: 'Location',
      value: 'Your City, Country',
      link: '#'
    }
  ];
  
  socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/yourprofile',
      icon: 'linkedin'
    },
    {
      name: 'Behance',
      url: 'https://behance.net/yourprofile',
      icon: 'behance'
    },
    {
      name: 'Dribbble',
      url: 'https://dribbble.com/yourprofile',
      icon: 'dribbble'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/yourprofile',
      icon: 'github'
    }
  ];
}