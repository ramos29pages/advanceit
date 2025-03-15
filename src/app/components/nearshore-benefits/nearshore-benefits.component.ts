import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// Importamos íconos de FontAwesome
import { faUsers, faArrowDown, faBuilding, faExpand } from '@fortawesome/free-solid-svg-icons';

interface Benefit {
  icon: any;
  text: string;
  highlight?: string;
}

@Component({
  selector: 'app-nearshore-benefits',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  template: `
    <section class="py-16 px-4">
      <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12">

        <!-- Sección Izquierda -->
        <div class="md:w-1/2 text-center md:text-left">
          <h2 class="text-4xl font-extrabold uppercase text-purple-700 mb-4">
            Nearshore Software <br> Development Benefits
          </h2>
          <p class="text-gray-600">
            Finding top software development talent takes a lot of work. Let us make it easy for you.
            We are experts in nearshore technology solutions and will deliver undeniable value from day one.
          </p>
        </div>

        <!-- Sección Derecha (Lista de Beneficios) -->
        <div class="md:w-1/2 bg-white shadow-lg rounded-lg p-6">
          <div *ngFor="let benefit of benefits" class="flex items-start gap-4 mb-4">
            <div class="bg-purple-100 w-12 min-w-12 flex justify-center text-purple-700 p-3 rounded-lg">
              <fa-icon [icon]="benefit.icon" class="text-xl"></fa-icon>
            </div>
            <p class="text-gray-700">
              {{ benefit.text }}
              <span *ngIf="benefit.highlight" class="font-semibold text-gray-900">
                {{ benefit.highlight }}
              </span>
            </p>
          </div>
        </div>

      </div>
    </section>
  `,
  styles: []
})
export class NearshoreBenefitsComponent {
  // Íconos FontAwesome
  faExpand = faExpand;
  faArrowDown = faArrowDown;
  faBuilding = faBuilding;
  faUsers = faUsers;

  // Lista de beneficios
  benefits: Benefit[] = [
    { icon: this.faExpand, text: "We focus on recruiting and placing the best bilingual software developers in your teams." },
    { icon: this.faArrowDown, text: "Considerable reduction in the recruitment of software development talent and onboarding times." },
    { icon: this.faBuilding, text: "Your own private office in our facilities.", highlight: "(terms and conditions)" },
    { icon: this.faUsers, text: "We believe in a great culture that leads to higher commitment, engagement, and growth for our developers and, therefore, our clients." }
  ];
}
