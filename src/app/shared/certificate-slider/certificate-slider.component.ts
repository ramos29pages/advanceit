import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-certificate-slider',
  standalone: true,
  imports: [NgFor],
template: `
    <div class="marquee-container mt-12">
      <div class="marquee flex justify-center ">
        <ng-container *ngFor="let brand of brandImagesDoubled">
          <img
            [src]="brand"
            [alt]="'brand-' + brand"
            class="h-16 mx-4 object-contain"
          />
        </ng-container>
      </div>
    </div>
  `,
  styles: [
    `
      /* Contenedor externo: oculta el overflow para que no aparezcan scrollbars */
      .marquee-container {
        position: relative;
        overflow: hidden;
        width: 100%;
        background-color: white;
        padding: 1rem 0;
      }

      /* Contenedor que “viaja” horizontalmente */
      .marquee {
        display: inline-flex; /* Mantiene las imágenes en línea */
        /* Animación de 30s lineal, se repite infinitamente */
        animation: marquee 75s linear infinite;
      }

      /* Al llegar al 100%, regresa a 0.
         Visualmente no hay “salto” porque la segunda mitad es idéntica a la primera. */
      @keyframes marquee {
        0% {
          transform: translateX(10);
        }
        100% {
          transform: translateX(-50%);
        }
      }
    `,
  ],
})
export class CertificateSliderComponent {

  @Input() brandImages : string[] = [
    'assets/images/hp.png',
    'assets/images/barco.png',
    'assets/images/logitech.webp',
    'assets/images/poly.webp',
    'https://cloudfi.ai/wp-content/uploads/2024/09/aws-cloudfi-1.png',
    'https://cloudfi.ai/wp-content/uploads/2024/09/jabra-cloudfi-1.png',
    'https://cloudfi.ai/wp-content/uploads/2024/09/dell-cloudfi.png',
    'https://cloudfi.ai/wp-content/uploads/2024/09/solution-cloudfi.png',
    'https://cloudfi.ai/wp-content/uploads/2024/09/adobe-cloudfi.png',
    'https://cloudfi.ai/wp-content/uploads/2024/09/lenovo-cloudfi.png',
  ];

  // Duplicamos para que la animación sea continua
  brandImagesDoubled = [...this.brandImages, ...this.brandImages, ...this.brandImages];
}
