import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Position {
  name: string;
  iconUrl: string;
}

@Component({
  selector: 'app-top-positions',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section
      class="relative py-16 px-4 bg-cover bg-center"
      [ngStyle]="{ 'background-image': 'url(' + backgroundUrl + ')' }"
    >
      <div class="max-w-6xl mx-auto">
        <!-- Título dinámico -->
        <h2 class="text-3xl font-extrabold text-purple-700 uppercase mb-8">
          {{ title }}
        </h2>

        <!-- Grid de posiciones -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div *ngFor="let position of positions" class="position-card">
            <div class="icon-wrapper">
              <img [src]="position.iconUrl" alt="Icon" class="w-100 h-auto" />
            </div>
            <span class="font-semibold text-gray-900">{{ position.name }}</span>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .position-card {
      display: flex;
      align-items: center;
      gap: 1rem; /* Espaciado similar a space-x-4 */
      background-color: #ffffff;
      /* Sombra similar a shadow-lg */
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
                  0 4px 6px -2px rgba(0, 0, 0, 0.05);
      border-radius: 0.75rem; /* rounded-xl */
      padding: 1.5rem; /* p-6 */
    }
    .icon-wrapper {
      width: 3.5rem;  /* w-14 (56px) */
      height: 3.5rem; /* h-14 (56px) */
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 9999px; /* rounded-full */
    }
  `]
})
export class TopPositionsComponent {
  @Input() title: string = 'Our Top Positions';
  @Input() backgroundUrl: string = '';
  @Input() positions: Position[] = [];
  // https://cdn.prod.website-files.com/636a549426aa8438b3b45fa8/6372587c9ba56f0e66ea0544_section-bg1.svg
}
