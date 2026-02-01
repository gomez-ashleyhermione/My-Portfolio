# UI/UX Designer Portfolio

A modern, responsive Angular portfolio template designed specifically for UI/UX designers and design interns. This template provides a clean, professional layout to showcase your design work, skills, and experience.

## Features

- **Modern Design**: Clean, contemporary aesthetic with smooth animations
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices  
- **Easy to Customize**: Template placeholders ready for your content
- **Professional Sections**: Hero, About, Skills, Projects, Contact, and Footer
- **Interactive Elements**: Smooth scrolling, hover effects, and animations
- **Built with Angular**: Modern framework with TypeScript support

## Template Sections

### 🏠 Hero Section
- Professional introduction with your name and title
- Call-to-action buttons
- Placeholder for your profile photo

### 👤 About Section  
- Personal introduction and design philosophy
- Achievement statistics
- Key highlights of your design approach

### 💼 Skills Section
- Design tools proficiency (Figma, Adobe XD, Sketch, etc.)
- Core UX/UI skills with progress indicators
- Additional technical skills as tags

### 🎨 Projects Section
- Portfolio showcase with category filtering
- Project cards with descriptions and tools used
- Placeholder areas for project screenshots

### 📧 Contact Section
- Contact information and social media links
- Contact form for project inquiries
- Professional networking links

### 🔗 Footer
- Quick navigation links
- Social media connections
- Copyright and back-to-top functionality

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (version 16 or later)
- [Angular CLI](https://angular.io/cli)

### Installation

1. **Install Node.js and Angular CLI** (if not already installed):
   ```bash
   npm install -g @angular/cli
   ```

2. **Install project dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   ng serve
   ```

4. **Open your browser** and navigate to `http://localhost:4200`

## Customization Guide

### 1. Personal Information
Replace placeholder content in each component:

- **Header**: Update name and tagline in [header.component.html](src/app/components/header/header.component.html)
- **Hero**: Modify introduction and add your photo in [hero.component.html](src/app/components/hero/hero.component.html)  
- **About**: Add your story and achievements in [about.component.ts](src/app/components/about/about.component.ts)

### 2. Skills & Tools
Update your skillset in [skills.component.ts](src/app/components/skills/skills.component.ts):
- Design tools and proficiency levels
- Core UX/UI skills
- Additional technical skills

### 3. Projects Portfolio
Customize your project showcase in [projects.component.ts](src/app/components/projects/projects.component.ts):
- Add your project details, descriptions, and tools used
- Replace image placeholders with actual project screenshots
- Update project links and categories

### 4. Contact Information
Update your contact details in [contact.component.ts](src/app/components/contact/contact.component.ts):
- Email, phone, and location
- Social media and portfolio links
- Professional networking profiles

### 5. Styling & Colors
Customize the design system in [styles.scss](src/styles.scss):
- Color palette and theme variables
- Typography and spacing
- Component-specific styling

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── header/          # Navigation header
│   │   ├── hero/            # Main introduction section  
│   │   ├── about/           # About me section
│   │   ├── skills/          # Skills and tools
│   │   ├── projects/        # Portfolio showcase
│   │   ├── contact/         # Contact information
│   │   └── footer/          # Footer with links
│   ├── app.component.*      # Main app component
│   └── app.module.ts        # App module configuration
├── assets/                  # Images and static files
├── styles.scss             # Global styles and variables
└── index.html              # Main HTML template
```

## Available Scripts

- `ng serve` - Start development server
- `ng build` - Build the project for production
- `ng test` - Run unit tests  
- `ng lint` - Run linting checks

## Deployment

### Build for Production
```bash
ng build --prod
```

The build artifacts will be stored in the `dist/` directory.

### Deployment Options
- **GitHub Pages**: Use `ng deploy` with angular-cli-ghpages
- **Netlify**: Drag and drop the `dist/` folder
- **Vercel**: Connect your repository for automatic deployments

## Tips for Design Interns

1. **Start Simple**: Begin with basic information and gradually add more content
2. **Show Process**: Include wireframes, mockups, and design iterations
3. **Mobile-First**: Ensure your portfolio looks great on all devices
4. **Keep Learning**: Update your skills and projects as you grow
5. **Get Feedback**: Share with mentors and peers for improvement suggestions

## Resources

- [Angular Documentation](https://angular.io/docs)
- [UI/UX Design Resources](https://www.figma.com/resources/)
- [Portfolio Best Practices](https://uxplanet.org/ux-portfolio-guide-2021-b4b6b8d4b7b5)

## Support

If you need help customizing this template:
1. Check the Angular documentation
2. Review the component files for examples
3. Search for tutorials on specific features
4. Join Angular and design communities for support

---

**Ready to showcase your design talent?** Start customizing this template with your unique style and projects. Good luck with your UI/UX design journey! 🎨✨