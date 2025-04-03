import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-brand-slider',
  standalone: true,
  imports: [NgFor],
  template: `
    <div class="marquee-container">
      <div class="marquee">
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
          transform: translateX(-180%);
        }
      }
    `,
  ],
})
export class BrandSliderComponent {

  @Input() brandImages : string[] = [
    'assets/images/partners/barco.png',
    'assets/images/partners/hp.png',
    'assets/images/partners/logitech.webp',
    'assets/images/partners/poly.webp',
  ];
  // @Input() brandImages = [
  //   'https://cdn.osabana.com/advanceit/marcas/443.webp',
  //   'https://cdn.osabana.com/advanceit/marcas/444_s.webp',
  //   'https://cdn.osabana.com/advanceit/marcas/463.webp',
  //   'https://cdn.osabana.com/advanceit/marcas/350.webp',
  //   'https://cdn.osabana.com/advanceit/marcas/380.webp',
  //   'https://cdn.osabana.com/advanceit/marcas/388.webp',
  //   'https://cdn.osabana.com/advanceit/marcas/358.webp',
  //   'https://cdn.osabana.com/advanceit/marcas/446.webp',
  //   'https://cdn.osabana.com/advanceit/marcas/447.webp',
  //   'https://cdn.osabana.com/advanceit/marcas/448.webp',
  //   'https://cdn.osabana.com/advanceit/marcas/451.webp',
  //   'https://cdn.osabana.com/advanceit/marcas/349.webp',
  //   'https://cdn.osabana.com/advanceit/marcas/352.webp',
  //   'https://cdn.osabana.com/advanceit/marcas/433.webp',
  //   'https://cdn.osabana.com/advanceit/marcas/354.webp',
  //   'https://cdn.osabana.com/advanceit/marcas/355.webp',
  //   'https://cdn.osabana.com/advanceit/marcas/356.webp',
  //   'https://cdn.osabana.com/advanceit/marcas/461.webp',
  //   'https://cdn.osabana.com/advanceit/marcas/359.webp',
  //   'https://cdn.osabana.com/advanceit/marcas/360.webp',
  //   'https://cdn.osabana.com/advanceit/marcas/362.webp',
  //   'https://cdn.osabana.com/advanceit/marcas/440.webp',
  //   'https://cdn.osabana.com/advanceit/marcas/365.webp',
  //   'https://cdn.osabana.com/advanceit/marcas/366.webp',
  //   'https://cdn.osabana.com/advanceit/marcas/367.webp',
  //   'https://cdn.osabana.com/advanceit/marcas/368.webp',
  //   'https://cdn.osabana.com/advanceit/marcas/369.webp',
  //   'https://cdn.osabana.com/advanceit/marcas/434.webp',
  //   'https://cdn.osabana.com/advanceit/marcas/371.webp',
  //   'https://cdn.osabana.com/advanceit/marcas/372.webp',
  //   'https://cdn.osabana.com/advanceit/marcas/373.webp',
  //   'https://cdn.osabana.com/advanceit/marcas/374.webp',
  //   'https://cdn.osabana.com/advanceit/marcas/375.webp',
  //   'https://cdn.osabana.com/advanceit/marcas/376.webp',
  //   'https://cdn.osabana.com/advanceit/marcas/377.webp',
  //   'https://cdn.osabana.com/advanceit/marcas/378.webp',
  //   'https://cdn.osabana.com/advanceit/marcas/379.webp',
  //   'https://cdn.osabana.com/advanceit/marcas/379.webp',
  //   'https://cdn.osabana.com/advanceit/marcas/382.webp',
  //   'https://cdn.osabana.com/advanceit/marcas/384.webp',
  //   'https://cdn.osabana.com/advanceit/marcas/383.webp',
  //   'https://cdn.osabana.com/advanceit/marcas/385.webp',
  //   'https://cdn.osabana.com/advanceit/marcas/439.webp',
  //   'https://cdn.osabana.com/advanceit/marcas/436.webp',
  //   'https://cdn.osabana.com/advanceit/marcas/389.webp',
  //   'https://cdn.osabana.com/advanceit/marcas/390.webp',
  //   'https://cdn.osabana.com/advanceit/marcas/391.webp',
  //   'https://cdn.osabana.com/advanceit/marcas/392.webp',
  //   'https://cdn.osabana.com/advanceit/marcas/393.webp',
  //   'https://cdn.osabana.com/advanceit/marcas/395.webp',
  //   'https://cdn.osabana.com/advanceit/marcas/396.webp',
  //   'https://cdn.osabana.com/advanceit/marcas/397.webp',
  //   'https://cdn.osabana.com/advanceit/marcas/398.webp'

  // ];

  // Duplicamos para que la animación sea continua
  brandImagesDoubled = [...this.brandImages, ...this.brandImages];
}
