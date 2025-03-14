import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-staff-augmentation',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-16 px-4 flex flex-col-reverse md:flex-row items-center max-w-6xl mx-auto">
      <!-- Texto -->
      <div class="md:w-1/2 space-y-6 text-center md:text-left">
        <h2 class="text-xl md:text-3xl font-extrabold uppercase text-indigo-900">
          USE TRANSPORTATION STAFF AUGMENTATION AS THE PERFECT EXTENSION OF YOUR TEAM
        </h2>

        <div class="bg-white shadow-lg rounded-lg p-6 text-gray-700">
          <p>
            With the combination of our proven success formula, the power, the tools and the processes,
            we will fulfill your expectations and help your company grow without limits.
            In just 3-5 weeks, we recruit top global bilingual talent and establish your satellite offices in
            Latin America and the Philippines. This way, you can keep your focus on other aspects of the business.
          </p>
          <p class="mt-4">
            As a workforce solutions company, we provide staffing services, recruitment process
            optimization, and experience in logistics and transportation.
          </p>
        </div>
      </div>

      <!-- Imagen -->
      <div class="md:w-1/2 flex justify-center relative">
        <!-- Imagen principal -->
        <img src="assets/images/staff-augmentation.png" alt="Staff Augmentation" class="relative z-10 w-80 md:w-[450px] rounded-lg shadow-lg">

        <!-- Elementos decorativos -->
        <img src="https://cdn.prod.website-files.com/636a549426aa8438b3b45fa8/63a500d2ee230488d84d2704_bubble%20opsops5-min.png"
          alt="Decorative Element"
          class="absolute w-64 md:w-96 top-0 md:top-4 right-0 -z-10"
        >
      </div>
    </section>
  `,
  styles: []
})
export class StaffAugmentationComponent {}
