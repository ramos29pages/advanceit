import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface PositionItem {
  name: string;        // Título del puesto
  description?: string; // Descripción opcional
  iconUrl: string;     // Ícono (URL)
}

@Component({
  selector: 'app-icon-bigbox',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section
      class="relative py-16 px-4 bg-cover bg-center"
      [ngStyle]="{ 'background-image': backgroundUrl ? 'url(' + backgroundUrl + ')' : 'none' }"
    >
      <div class="max-w-6xl mx-auto">
        <!-- Título -->
        <h2
          class="text-2xl md:text-3xl font-extrabold uppercase mb-6"
          [ngClass]="titleColor"
        >
          {{ title }}
        </h2>

        <!-- Descripción opcional -->
        <p *ngIf="subtitle" class="text-gray-700 mb-8">
          {{ subtitle }}
        </p>

        <!-- Grid de posiciones -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Tarjeta por posición -->
          <div
            *ngFor="let pos of positions"
            class="flex bg-white shadow-lg rounded-lg p-6 gap-4"
            [ngClass]="pos.description ? 'items-start' : 'items-center h-24'"
          >
            <!-- Ícono -->
            <div class="w-14 h-14 flex items-center justify-center bg-purple-100 rounded-full">
              <img
                [src]="pos.iconUrl"
                alt="Icon"
                class="w-8 min-w-20 object-contain"
              />
            </div>
            <!-- Texto -->
            <div>
              <h3 class="font-semibold text-gray-900 text-base md:text-lg mb-1">
                {{ pos.name }}
              </h3>
              <p *ngIf="pos.description" class="text-gray-600 text-sm">
                {{ pos.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class IconBigboxComponent {
  /** Imagen de fondo (opcional). Ej: 'https://...' */
  @Input() backgroundUrl: string = 'https://cdn.prod.website-files.com/636a549426aa8438b3b45fa8/6372587c9ba56f0e66ea0544_section-bg1.svg';

  /** Título principal (texto). Ej: "CHECK OUT OUR AVAILABLE ENTRY-LEVEL BACK OFFICE POSITIONS" */
  @Input() title: string = 'OUR TOP POSITIONS';

  /** Descripción opcional debajo del título */
  @Input() subtitle?: string;

  /** Clases de color para el título (por defecto: 'text-purple-600') */
  @Input() titleColor: string = 'text-purple-600';

  /** Lista de posiciones */
  @Input() positions: PositionItem[] = [
    {
      name: 'Operation Analyst',
      description: 'Accomplishes business objectives by identifying and solving customer information and processing problems. He/She will be a key member of the operations team supporting, data management, client reporting, and trade processes.',
      iconUrl: 'https://cdn.prod.website-files.com/636a549426aa8438b3b45fa8/63a3b1323e5c9a480c145283_Group%20209.svg'
    },
    {
      name: 'Administrative Assistant',
      description: 'Accomplishes business objectives by identifying and solving customer information and processing problems. He/She will be a key member of the operations team supporting, data management, client reporting, and trade processes.',
      iconUrl: 'https://cdn.prod.website-files.com/636a549426aa8438b3b45fa8/63a3b1323e5c9a480c145283_Group%20209.svg'
    },
    {
      name: 'Debt Collectors',
      iconUrl: 'https://cdn.prod.website-files.com/636a549426aa8438b3b45fa8/63a3b1323e5c9a480c145283_Group%20209.svg',
      description: 'Accomplishes business objectives by identifying and solving customer information and processing problems. He/She will be a key member of the operations team supporting, data management, client reporting, and trade processes.'
    },
    {
      name: 'Tech Support',
      description: 'Work in a global environment...',
      iconUrl: 'https://cdn.prod.website-files.com/636a549426aa8438b3b45fa8/63a3b1323e5c9a480c145283_Group%20209.svg'
    },
    {
      name: 'Customer Service Agent',
      description: 'Provide accurate and direct product...',
      iconUrl: 'https://cdn.prod.website-files.com/636a549426aa8438b3b45fa8/63a3b1323e5c9a480c145283_Group%20209.svg'
    },
    {
      name: 'Documentation & Accounting Analyst',
      description: 'Independently perform the full range...',
      iconUrl: 'https://cdn.prod.website-files.com/636a549426aa8438b3b45fa8/63a3b1323e5c9a480c145283_Group%20209.svg'
    }
  ];
}
