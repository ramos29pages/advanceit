import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faMoneyBillWave,
  faGlobe,
  faLightbulb,
  faShieldAlt,
  faComments,
  faChartLine
} from '@fortawesome/free-solid-svg-icons';
import { TranslatePipe } from '@ngx-translate/core';

/**
 * Representa un beneficio de Nearshoring para la industria Retail.
 */
interface RetailBenefit {
  icon: any;           // Ícono de FontAwesome
  title: string;       // Título del beneficio
  description: string; // Descripción breve
}

@Component({
  selector: 'app-retail-benefits',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, TranslatePipe],
  template: `
    <!-- Sección con fondo gris claro y texto centrado -->
    <section class="py-16 px-4 text-center">
      <div class="max-w-6xl mx-auto">

        <!-- Título principal en morado -->
        <h2 class="text-2xl md:text-3xl font-extrabold uppercase text-purple-700 mb-12">
         {{titleBenefits | translate}}
        </h2>

        <!-- Grid de 6 elementos en 2 filas x 3 columnas (en pantallas grandes) -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Tarjeta por cada beneficio -->
          <div
            *ngFor="let benefit of benefits"
            class="bg-gray-50 rounded-lg p-6 flex flex-col items-center space-y-3"
          >
            <!-- Ícono en círculo morado -->
            <div class="w-12 h-12 bg-purple-100 text-purple-700 rounded-full flex items-center justify-center">
              <fa-icon [icon]="benefit.icon" class="text-xl"></fa-icon>
            </div>
            <!-- Título en morado -->
            <h3 class="text-lg font-semibold text-purple-700">
              {{ benefit.title | translate }}
            </h3>
            <!-- Descripción en gris -->
            <p class="text-sm text-gray-600">
              {{ benefit.description | translate }}
            </p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class RetailBenefitsComponent {
  // Íconos de FontAwesome
  faMoneyBillWave = faMoneyBillWave;
  faGlobe = faGlobe;
  faLightbulb = faLightbulb;
  faShieldAlt = faShieldAlt;
  faComments = faComments;
  faChartLine = faChartLine;
  @Input() title = 'default';
  @Input() titleBenefits = 'default';

  // Lista de 6 beneficios con íconos y descripciones
  @Input() benefits: RetailBenefit[] = [
    {
      icon: this.faMoneyBillWave,
      title: 'industries.healthcare.benefit1.title',
      description: 'industries.healthcare.benefit1.description'
    },
    {
      icon: this.faGlobe,
      title: 'industries.healthcare.benefit2.title',
      description: 'industries.healthcare.benefit2.description'
    },
    {
      icon: this.faLightbulb,
      title: 'industries.healthcare.benefit3.title',
      description: 'industries.healthcare.benefit3.description'
    },
    {
      icon: this.faShieldAlt,
      title: 'industries.healthcare.benefit4.title',
      description: 'industries.healthcare.benefit4.description'
    },
    {
      icon: this.faComments,
      title: 'industries.healthcare.benefit5.title',
      description: 'industries.healthcare.benefit5.description'
    },
    {
      icon: this.faChartLine,
      title: 'industries.healthcare.benefit6.title',
      description: 'industries.healthcare.benefit6.description'
    }
  ];
}
