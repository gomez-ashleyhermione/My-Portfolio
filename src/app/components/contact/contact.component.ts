import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    message: ''
  };
  
  isSubmitting = false;
  submitSuccess = false;
  submitError = false;

  onSubmit(event: Event): void {
    event.preventDefault();
    
    if (this.isSubmitting) return;
    
    this.isSubmitting = true;
    this.submitSuccess = false;
    this.submitError = false;
    
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    
    // Submit to Netlify Forms
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData as any).toString()
    })
    .then(() => {
      this.isSubmitting = false;
      this.submitSuccess = true;
      this.formData = { name: '', email: '', message: '' };
      form.reset();
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        this.submitSuccess = false;
      }, 5000);
    })
    .catch(() => {
      this.isSubmitting = false;
      this.submitError = true;
      
      // Hide error message after 5 seconds
      setTimeout(() => {
        this.submitError = false;
      }, 5000);
    });
  }
}
