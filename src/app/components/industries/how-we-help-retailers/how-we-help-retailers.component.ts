import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faHeadset,
  faCogs,
  faArrowsAltH,
} from '@fortawesome/free-solid-svg-icons';

/**
 * Representa un elemento que describe cómo ayudamos a los retailers.
 */
interface RetailHelpItem {
  icon: any; // Ícono de FontAwesome
  title: string; // Título
  description: string; // Descripción breve
}

@Component({
  selector: 'app-how-we-help-retailers',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  template: `
    <section class="py-16 px-4 bg-white text-center">
      <div class="max-w-6xl mx-auto">
        <!-- Título principal en color morado -->
        <h2
          class="text-2xl md:text-3xl font-extrabold uppercase text-purple-700 mb-12"
        >
          How We Help Retailers
        </h2>

        <!-- Grid con 3 elementos en pantallas grandes -->
        <div class="grid grid-cols-1 md:grid-cols-{{helpItems.length}} gap-8">
          <!-- Tarjeta por cada ítem -->
          <div
            *ngFor="let item of helpItems"
            class="bg-white shadow-md rounded-lg p-6 flex items-start text-left space-y-3"
          >
            <!-- Ícono en círculo morado -->
            <div
              class=" bg-purple-100 h-12 p-2 mx-4 w-20 rounded-md text-purple-700 flex items-center justify-center"
            >
              <fa-icon [icon]="item.icon" class="text-xl"></fa-icon>
            </div>

            <div>
              <!-- Título en morado -->
              <h3 class="text-lg font-semibold text-purple-700">
                {{ item.title }}
              </h3>
              <!-- Descripción en gris -->
              <p class="text-sm text-gray-600">
                {{ item.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [],
})
export class HowWeHelpRetailersComponent {
  // Íconos de FontAwesome
  faHeadset = faHeadset; // Ejemplo: "Enhancing Customer Service Excellence"
  faCogs = faCogs; // Ejemplo: "Optimizing Operational Efficiency"
  faArrowsAltH = faArrowsAltH; // Ejemplo: "Scalable Solutions"

  // Lista de ítems
  @Input() helpItems: RetailHelpItem[] = [
    {
      icon: this.faHeadset,
      title: 'Enhancing Customer Service Excellence',
      description:
        'Access to a diverse pool of multilingual talent ensures superior customer support across various languages and time zones.',
    },
    {
      icon: this.faCogs,
      title: 'Optimizing Operational Efficiency',
      description:
        'Streamlined processes and specialized expertise enable efficient service delivery and cost reduction.',
    },
    {
      icon: this.faArrowsAltH,
      title: 'Scalable Solutions',
      description:
        'Flexible staffing options cater to seasonal fluctuations and business growth, ensuring agility and responsiveness.',
    },
  ];
}
