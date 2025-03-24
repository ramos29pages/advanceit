import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-brand-slider',
  standalone: true,
  imports: [NgFor],
  template: `
    <div class="overflow-hidden w-full bg-white py-4">
      <!-- Usamos whitespace-nowrap para que todas las imágenes se mantengan en una línea -->
      <div class="animate-scroll whitespace-nowrap">
        <!-- Duplicamos el array para que la animación sea continua -->
        <ng-container *ngFor="let brand of duplicatedBrandImages">
          <img
            [src]="brand"
            [alt]="'brand-' + brand"
            class="inline-block h-16 mx-4 object-contain"
          />
        </ng-container>
      </div>
    </div>
  `,
  styles: [
    `
      /* Keyframes para mover el contenedor */
      @keyframes scroll {
        0% {
          transform: translateX(0);
        }
        100% {
          /* Al ser el contenedor el doble de un set, -50% equivale al ancho de un set */
          transform: translateX(-50%);
        }
      }

      .animate-scroll {
        animation: scroll 10s linear infinite;
      }
    `,
  ],
})
export class BrandSliderComponent {
  // Array de URLs para las marcas
  brandImages = [

    'https://cdn.osabana.com/advanceit/marcas/444_s.webp',
    'https://cdn.osabana.com/advanceit/marcas/443.webp',
    'https://cdn.osabana.com/advanceit/marcas/388.webp',
    'https://cdn.osabana.com/advanceit/marcas/434.webp',
    'https://cdn.osabana.com/advanceit/marcas/444_s.webp',
    'https://cdn.osabana.com/advanceit/marcas/445.webp',
    'https://cdn.osabana.com/advanceit/marcas/388.webp',
    'https://cdn.osabana.com/advanceit/marcas/434.webp',
  ];

  duplicatedBrandImages = [
    ...this.brandImages,
    ...this.brandImages
  ];
}
