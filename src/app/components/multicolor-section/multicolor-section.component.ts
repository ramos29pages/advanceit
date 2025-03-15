import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTruck, faGlobe, faGraduationCap, faPlug, faShieldAlt, faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-multicolor-section',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  template: `
    <section
      class="relative bg-cover bg-center py-16 px-4 flex items-center justify-center"
      style="background-image: url('https://cdn.prod.website-files.com/636a549426aa8438b3b45fa8/63a3aeeaf8cc91ebd5129380_Frame.jpg');"
    >
      <!-- Contenedor principal -->
      <div class="max-w-6xl w-full">
        <!-- Card blanco centrado -->
        <div class="bg-white rounded-lg shadow-lg p-8 md:p-10 text-center mx-auto">
          <!-- Título -->
          <h2 class="text-2xl md:text-3xl font-extrabold uppercase text-purple-900 mb-6">
            Why Is LSG The Right Partner?
          </h2>
          <!-- Párrafo -->
          <p class="text-gray-700 leading-relaxed mb-8 max-w-3xl mx-auto">
            We know you have many options when it comes to recruiting talent,
            so why should you choose Lean Solutions Group? Our more than 10 years
            of experience within the transportation industry have allowed us to become
            experts in the field. We have worked tirelessly to enhance our service
            offerings over time. Our more than 10 years of experience within the
            transportation industry have allowed us to become experts in the field.
            We understand the ins and outs of logistics and have worked tirelessly
            to enhance our service offerings. If you’d like to learn more about
            our freight industry staffing services, please reach out to us today.
          </p>

          <!-- Fila de 5 ítems con íconos -->
          <div class="grid grid-cols-2 md:grid-cols-5 gap-4 mt-8">
            <!-- Ítem 1 -->
            <div class="flex flex-col items-center space-y-2">
              <fa-icon [icon]="faTruck" class="bg-purple-100 rounded-md p-2 text-purple-600 text-3xl"></fa-icon>
              <span class="text-gray-800 font-semibold text-sm md:text-base">
                Logistics Experience
              </span>
            </div>
            <!-- Ítem 2 -->
            <div class="flex flex-col items-center space-y-2">
              <fa-icon [icon]="faGlobe" class="bg-purple-100 rounded-md p-2 text-purple-600 text-3xl"></fa-icon>
              <span class="text-gray-800 font-semibold text-sm md:text-base">
                Global Talent
              </span>
            </div>
            <!-- Ítem 3 -->
            <div class="flex flex-col items-center space-y-2">
              <fa-icon [icon]="faGraduationCap" class="bg-purple-100 rounded-md p-2 text-purple-600 text-3xl"></fa-icon>
              <span class="text-gray-800 font-semibold text-sm md:text-base">
                Specialized Training Programs
              </span>
            </div>
            <!-- Ítem 4 -->
            <div class="flex flex-col items-center space-y-2">
              <fa-icon [icon]="faPlug" class="bg-purple-100 rounded-md p-2 text-purple-600 text-3xl"></fa-icon>
              <span class="text-gray-800 font-semibold text-sm md:text-base">
                TMS Integrations
              </span>
            </div>
            <!-- Ítem 5 -->
            <div class="flex flex-col items-center space-y-2">
              <fa-icon [icon]="faShieldAlt" class="bg-purple-100 rounded-md p-2 text-purple-600 text-3xl"></fa-icon>
              <span class="text-gray-800 font-semibold text-sm md:text-base">
                Quality Assurance
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class MulticolorSectionComponent {
  // Íconos de Font Awesome
  faTruck = faTruck;
  faGlobe = faGlobe;
  faGraduationCap = faGraduationCap;
  faPlug = faPlug;
  faShieldAlt = faShieldAlt;
  faCheck = faCheck;
}
