import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-staff-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <section class="relative flex items-center justify-center min-h-screen bg-cover bg-center px-6 md:px-12"
             style="background-image: url('https://cdn.prod.website-files.com/636a549426aa8438b3b45fa8/6372587c9ba56f0e66ea0544_section-bg1.svg');">

      <!-- Contenedor principal -->
      <div class="max-w-6xl w-full flex flex-col lg:flex-row items-center">

        <!-- Imagen del equipo -->
        <div class="relative w-full lg:w-1/2 flex justify-center">
          <img src="https://cdn.prod.website-files.com/636a549426aa8438b3b45fa8/63a500d2ee2304b4724d2711_LSG%20Team.png"
               alt="Team" class="w-3/4 lg:w-full max-w-md">
        </div>

        <!-- Formulario -->
        <div class="w-full lg:w-1/2 bg-white bg-opacity-90 p-8 rounded-lg shadow-lg">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">
            START BUILDING <span class="text-blue-600">EFFICIENT TEAMS</span> TODAY.
          </h2>
          <p class="text-sm text-gray-600 mb-4">
            If you want to discuss a career with Lean Solutions Group
            <a href="#" class="text-blue-600 font-semibold">Click Here.</a>
          </p>

          <form [formGroup]="teamForm" (ngSubmit)="onSubmit()">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="email" formControlName="email" placeholder="Company Email*"
                     class="input-field col-span-2"/>

              <input type="text" formControlName="firstName" placeholder="First name*" class="input-field"/>
              <input type="text" formControlName="lastName" placeholder="Last name*" class="input-field"/>

              <input type="text" formControlName="company" placeholder="Company name*" class="input-field"/>
              <select formControlName="solution" class="input-field">
                <option value="">Select solution*</option>
                <option *ngFor="let solution of solutions" [value]="solution">{{ solution }}</option>
              </select>

              <input type="tel" formControlName="phone" placeholder="Phone number*" class="input-field"/>
              <input type="text" formControlName="state" placeholder="State*" class="input-field"/>

              <input type="text" formControlName="referral" placeholder="How did you hear about us?" class="input-field col-span-2"/>
            </div>

            <!-- Checkbox y reCAPTCHA -->
            <div class="mt-4">
              <label class="flex items-center space-x-2 text-sm text-gray-600">
                <input type="checkbox" formControlName="terms" class="w-4 h-4">
                <span>I read and accept the <a href="#" class="text-blue-600">data protection policy</a>*</span>
              </label>
            </div>

            <div class="mt-4">
              <div class="bg-gray-100 p-4 rounded-lg">
                <p class="text-xs text-gray-600">protected by reCAPTCHA</p>
              </div>
            </div>

            <!-- Botón de envío -->
            <button type="submit" class="w-full mt-6 py-3 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-800">
              LET’S TALK
            </button>
          </form>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .input-field {
      @apply w-full p-3 border border-gray-300 rounded-lg text-gray-700;
    }
  `]
})
export class StaffContactComponent {
  teamForm: FormGroup;
  solutions = ['Consulting', 'Outsourcing', 'Development', 'Support'];

  constructor(private fb: FormBuilder) {
    this.teamForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      company: ['', Validators.required],
      solution: ['', Validators.required],
      phone: ['', Validators.required],
      state: ['', Validators.required],
      referral: [''],
      terms: [false, Validators.requiredTrue]
    });
  }

  onSubmit() {
    if (this.teamForm.valid) {
      console.log(this.teamForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
