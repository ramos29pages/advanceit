import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-growth-efforts',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <!-- Sección principal con fondo morado -->
    <section class="bg-purple-700 py-16 px-4 text-white">
      <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

        <!-- Columna Izquierda: Título + Bullet Points -->
        <div>
          <h2 class="text-2xl md:text-3xl font-extrabold uppercase mb-6">
            HOW CAN OUR SDRS HELP YOU?
          </h2>
          <ul class="space-y-3 text-base leading-relaxed list-disc list-inside">
            <li>Qualifying leads</li>
            <li>Driving lead generation</li>
            <li>Handling expert communications (via email, chat, or social media)</li>
            <li>Data Analysis to optimize reach</li>
            <li>Prospect Nurturing</li>
            <li>Meeting/exceeding sales quotas</li>
            <li>Placing all notations in your CMS or systems</li>
          </ul>
        </div>

        <!-- Columna Derecha: Formulario en tarjeta blanca -->
        <div class="bg-white rounded-lg shadow-lg p-6 text-gray-800">
          <h3 class="text-xl md:text-2xl font-extrabold uppercase text-gray-800 mb-2">
            Are you interested in supercharging your growth efforts?
          </h3>
          <p class="text-sm text-gray-600 mb-4">
            If you want to discuss a career with Lean Solutions Group
            <a href="#" class="text-blue-600 font-semibold">Click Here.</a>
          </p>

          <!-- Formulario -->
          <form (ngSubmit)="onSubmit()" #growthForm="ngForm" class="space-y-4">
            <!-- Grid de 2 columnas en pantallas medianas -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="email"
                name="email"
                [(ngModel)]="email"
                placeholder="Company Email*"
                required
                class="border border-gray-300 rounded p-2 focus:outline-none"
              />
              <input
                type="text"
                name="firstName"
                [(ngModel)]="firstName"
                placeholder="First name*"
                required
                class="border border-gray-300 rounded p-2 focus:outline-none"
              />
              <input
                type="text"
                name="lastName"
                [(ngModel)]="lastName"
                placeholder="Last name*"
                required
                class="border border-gray-300 rounded p-2 focus:outline-none"
              />
              <input
                type="text"
                name="companyName"
                [(ngModel)]="companyName"
                placeholder="Company name*"
                required
                class="border border-gray-300 rounded p-2 focus:outline-none"
              />

              <select
                name="solution"
                [(ngModel)]="solution"
                required
                class="border border-gray-300 rounded p-2 focus:outline-none"
              >
                <option value="">Select solution*</option>
                <option *ngFor="let sol of solutions" [value]="sol">{{ sol }}</option>
              </select>

              <input
                type="text"
                name="phone"
                [(ngModel)]="phone"
                placeholder="Phone number*"
                required
                class="border border-gray-300 rounded p-2 focus:outline-none"
              />
              <input
                type="text"
                name="state"
                [(ngModel)]="state"
                placeholder="State*"
                required
                class="border border-gray-300 rounded p-2 focus:outline-none"
              />
              <input
                type="text"
                name="referral"
                [(ngModel)]="referral"
                placeholder="How did you hear about us?"
                class="border border-gray-300 rounded p-2 focus:outline-none md:col-span-2"
              />
            </div>

            <!-- Checkbox -->
            <div class="flex items-center space-x-2 text-sm text-gray-700 mt-2">
              <input
                type="checkbox"
                name="dataProtection"
                [(ngModel)]="dataProtection"
                required
                class="w-4 h-4"
              />
              <label for="dataProtection" class="text-gray-600">
                I read and accept the
                <a href="#" class="text-blue-600 font-semibold">data protection policy</a>*
              </label>
            </div>

            <!-- reCAPTCHA (simulado) -->
            <div class="bg-gray-100 p-4 rounded mt-2 text-xs text-gray-500">
              protected by reCAPTCHA
            </div>

            <!-- Botón -->
            <button
              type="submit"
              [disabled]="!growthForm.valid"
              class="bg-purple-700 text-white px-6 py-2 rounded shadow mt-4 hover:bg-purple-800 transition"
            >
              LET'S TALK
            </button>
          </form>
        </div>
      </div>
    </section>
  `,
  styles: [``]
})
export class GrowthEffortsComponent {
  email = '';
  firstName = '';
  lastName = '';
  companyName = '';
  solution = '';
  phone = '';
  state = '';
  referral = '';
  dataProtection = false;

  solutions = ['Consulting', 'Outsourcing', 'Development', 'Support'];

  onSubmit() {
    // Lógica de envío del formulario
    console.log('Form submitted:', {
      email: this.email,
      firstName: this.firstName,
      lastName: this.lastName,
      companyName: this.companyName,
      solution: this.solution,
      phone: this.phone,
      state: this.state,
      referral: this.referral,
      dataProtection: this.dataProtection
    });
    alert('Thank you! Your form has been submitted.');
  }
}
