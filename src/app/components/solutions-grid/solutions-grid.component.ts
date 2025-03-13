import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

/** Interfaz para cada card (columna) */
interface ColumnCard {
  image: string; // Ruta de la imagen de fondo
  icon: string; // Ruta del ícono
  title: string; // Título o texto a mostrar
}

@Component({
  selector: 'app-solutions-grid',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="relative py-16 px-4 overflow-hidden">
      <!-- Fondo con imagen detrás de todo -->
      <div
        class="absolute inset-0 bg-center bg-no-repeat bg-cover z-0"
        style="background-image: url('https://cdn.prod.website-files.com/636a549426aa8438b3b45fa8/6372587c9ba56f0e66ea0544_section-bg1.svg');"
      ></div>

      <!-- Contenedor principal (contenido por encima, z-10) -->
      <div
        class="relative z-10 max-w-7xl mx-auto h-96 grid items-center grid-cols-5 gap-4 overflow-hidden"
      >
        <!-- Cinco columnas -->
        <div
          *ngFor="let card of cards; let i = index"
          class="relative rounded-lg overflow-hidden h-96 grid"
          [ngClass]="i % 2 === 0 ? 'items-end' : 'items-start'"
        >
          <!-- Imagen de fondo -->
          <img [src]="card.image" alt="{{ card.title }}" class="object-cover h-76" />

          <!-- ... Overlay, ícono, título, etc. ... -->
          <div
          class="absolute left-2 z-10"
          [ngClass]="i % 2 === 0 ? 'bottom-2' : 'bottom-24'"
          >
            <span class="text-white font-bold text-sm md:text-base">
              {{ card.title }}
            </span>
          </div>

           <!-- Overlay de color (ajusta si deseas un color distinto) -->
            <div
            class="absolute w-full h-76 overflow-hidden "
            style="background-color: rgba(0, 0, 0, 0.5);"
            [ngClass]="i % 2 === 0 ? 'bottom-0' : 'top-0'"
          ></div>

            <!-- Ícono (parte superior izquierda) -->
            <img
              [src]="card.icon"
              alt="Icon"
              class="absolute left-2 w-6 h-6"
              [ngClass]="i % 2 === 0 ? 'top-23' : 'top-2'"
            />
        </div>
      </div>
    </section>
  `,
  styles: [],
})
export class SolutionsGridComponent {
  /** Ejemplo de data con 5 columnas */
  cards: ColumnCard[] = [
    {
      image:
        'https://cdn.prod.website-files.com/636a549426aa8438b3b45fa8/638e14442e70ce3a5c714794_guatemala.jpg',
      icon: 'logo.png',
      title: 'Operations',
    },
    {
      image:
        'https://cdn.prod.website-files.com/636a549426aa8438b3b45fa8/638e14442e70ce3a5c714794_guatemala.jpg',
      icon: 'assets/icons/tech-icon.png',
      title: 'Technology',
    },
    {
      image: 'assets/columns/outsourcing.jpg',
      icon: 'assets/icons/outs-icon.png',
      title: 'Outsourcing',
    },
    {
      image: 'assets/columns/marketing.jpg',
      icon: 'assets/icons/marketing-icon.png',
      title: 'Marketing',
    },
    {
      image: 'assets/columns/sales.jpg',
      icon: 'assets/icons/sales-icon.png',
      title: 'Sales',
    },
  ];
}
