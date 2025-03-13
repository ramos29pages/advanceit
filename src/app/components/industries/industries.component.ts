import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface IndustryCard {
  image: string;      // Ruta/URL de la imagen de fondo
  title: string;      // Título de la industria
  overlayColor: string; // Clase o estilo para la superposición (opcional)
}

@Component({
  selector: 'app-industries',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-16 px-4 text-center">
      <div class="max-w-6xl mx-auto space-y-4">
        <!-- Pequeño label arriba -->
        <div class="text-sm text-purple-600 font-semibold uppercase">
          Industries we serve
        </div>

        <!-- Título principal -->
        <h2 class="text-xl md:text-2xl lg:text-3xl font-extrabold uppercase text-gray-800">
          Creating Mission-Critical Teams for Various Industries
        </h2>

        <!-- Grid de 8 tarjetas -->
        <div class="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div
            *ngFor="let item of industries"
            class="relative rounded-lg overflow-hidden h-48 md:h-56"
          >
            <!-- Imagen de fondo -->
            <img
              [src]="item.image"
              alt="{{ item.title }}"
              class="w-full h-full object-cover"
            />
            <!-- Overlay de color -->
            <div
              class="absolute inset-0"
              [ngClass]="item.overlayColor"
              style="opacity: 0.6"
            ></div>

            <!-- Texto centrado -->
            <div
              class="absolute inset-0 flex items-center justify-center text-white text-sm md:text-base font-semibold px-4 text-center"
            >
              <span>{{ item.title }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class IndustriesComponent {
  // Arreglo de tarjetas (ejemplo con 8)
  industries: IndustryCard[] = [
    {
      image: 'assets/industries/transportation.jpg',
      title: 'Transportation & Logistics',
      overlayColor: 'bg-pink-500' // Ejemplo
    },
    {
      image: 'assets/industries/financial.jpg',
      title: 'Financial & Payment Processing',
      overlayColor: 'bg-orange-500'
    },
    {
      image: 'assets/industries/accounting.jpg',
      title: 'Accounting',
      overlayColor: 'bg-purple-500'
    },
    {
      image: 'assets/industries/insurance.jpg',
      title: 'Insurance Services',
      overlayColor: 'bg-red-500'
    },
    {
      image: 'assets/industries/saas.jpg',
      title: 'SAAS',
      overlayColor: 'bg-blue-500'
    },
    {
      image: 'assets/industries/healthcare.jpg',
      title: 'Healthcare',
      overlayColor: 'bg-green-500'
    },
    {
      image: 'assets/industries/hospitality.jpg',
      title: 'Hospitality',
      overlayColor: 'bg-yellow-500'
    },
    {
      image: 'assets/industries/technology.jpg',
      title: 'Technology',
      overlayColor: 'bg-indigo-500'
    }
  ];
}
