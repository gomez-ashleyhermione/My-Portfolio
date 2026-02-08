import { Component, HostListener, OnInit } from '@angular/core';

interface NavLink {
  id: string;
  label: string;
  icon: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isScrolled = false;
  activeSection = 'home';
  isCollapsed = false;
  isMobile = false;
  isMobileMenuOpen = false;

  navLinks: NavLink[] = [
    { id: 'home', label: 'Home', icon: 'home' },
    { id: 'about', label: 'About', icon: 'person' },
    { id: 'projects', label: 'Projects', icon: 'work' },
    { id: 'skills', label: 'Skills', icon: 'code' },
    { id: 'contact', label: 'Contact', icon: 'mail' }
  ];

  ngOnInit(): void {
    this.updateActiveSection();
    this.checkScreenSize();
  }

  @HostListener('window:resize', [])
  onResize(): void {
    this.checkScreenSize();
  }

  private checkScreenSize(): void {
    this.isMobile = window.innerWidth <= 768;
    if (this.isMobile) {
      this.isCollapsed = true;
      this.isMobileMenuOpen = false;
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.isScrolled = window.scrollY > 50;
    this.updateActiveSection();
  }

  private updateActiveSection(): void {
    const sections = this.navLinks.map(link => document.getElementById(link.id));
    const scrollPosition = window.scrollY + 100;

    for (let i = sections.length - 1; i >= 0; i--) {
      const section = sections[i];
      if (section && section.offsetTop <= scrollPosition) {
        this.activeSection = this.navLinks[i].id;
        break;
      }
    }
  }

  scrollToSection(sectionId: string, event: Event): void {
    event.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      // Adjust offset based on screen size
      const offset = this.isMobile ? 60 : 0;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
      
      // Close mobile menu after navigation
      if (this.isMobile) {
        this.isMobileMenuOpen = false;
      }
    }
  }

  toggleSidebar(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}
