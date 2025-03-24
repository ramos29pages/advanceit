import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-helpdesk-contact-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './heldeskp-contactform.component.html'
})
export class HelpdeskContactformComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      companyEmail: ['', [Validators.required, Validators.email]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      companyName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      jobTitle: [''],
      solution: ['', Validators.required],
      acceptPolicy: [false, Validators.requiredTrue]
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      // Lógica de envío de datos (petición HTTP, etc.)
      console.log('Formulario válido. Datos:', this.contactForm.value);
      alert('Formulario enviado con éxito.');
    } else {
      console.log('Formulario inválido');
      this.contactForm.markAllAsTouched();
    }
  }
}
