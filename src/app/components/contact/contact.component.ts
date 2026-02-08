import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  onSubmit(event: Event): void {
    event.preventDefault();
    // Form submission logic here
    console.log('Form submitted');
  }
}
