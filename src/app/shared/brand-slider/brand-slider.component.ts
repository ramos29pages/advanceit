import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-brand-slider',
  standalone: true,
  imports: [NgFor],
  template: `
    <div class="marquee-container mt-12">
      <div class="marquee">
        <ng-container *ngFor="let brand of brands">
          <img
            [src]="brand.url"
            [alt]="'brand-' + brand.name"
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
        animation: marquee 120s linear infinite;
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

brands = [
  { url: 'https://cdn.osabana.com/advanceit/marcas/443.webp', name: 'microsoft' },
  { url: 'https://cdn.osabana.com/advanceit/marcas/444_s.webp', name: 'redhat' },
  { url: 'https://cdn.osabana.com/advanceit/marcas/463.webp', name: 'condeco' },
  { url: 'https://cdn.osabana.com/advanceit/marcas/350.webp', name: 'adobe' },
  { url: 'https://cdn.osabana.com/advanceit/marcas/380.webp', name: 'kaspersky' },
  { url: 'https://cdn.osabana.com/advanceit/marcas/388.webp', name: 'oracle' },
  { url: 'https://cdn.osabana.com/advanceit/marcas/358.webp', name: 'autodesk' },
  { url: 'https://cdn.osabana.com/advanceit/marcas/446.webp', name: 'acronis' },
  { url: 'https://cdn.osabana.com/advanceit/marcas/447.webp', name: 'checkpoint' },
  { url: 'https://cdn.osabana.com/advanceit/marcas/448.webp', name: 'citrix' },
  { url: 'https://cdn.osabana.com/advanceit/marcas/451.webp', name: 'sophos' },
  { url: 'https://cdn.osabana.com/advanceit/marcas/349.webp', name: 'adata' },
  { url: 'https://cdn.osabana.com/advanceit/marcas/352.webp', name: 'apc' },
  { url: 'https://cdn.osabana.com/advanceit/marcas/433.webp', name: 'apple' },
  { url: 'https://cdn.osabana.com/advanceit/marcas/354.webp', name: 'aruba' },
  { url: 'https://cdn.osabana.com/advanceit/marcas/355.webp', name: 'asus' },
  { url: 'https://cdn.osabana.com/advanceit/marcas/356.webp', name: 'asus corporativo' },
  { url: 'https://cdn.osabana.com/advanceit/marcas/461.webp', name: 'barco' },
  { url: 'https://cdn.osabana.com/advanceit/marcas/359.webp', name: 'canon' },
  { url: 'https://cdn.osabana.com/advanceit/marcas/360.webp', name: 'canon corporativo' },
  { url: 'https://cdn.osabana.com/advanceit/marcas/362.webp', name: 'dlink' },
  { url: 'https://cdn.osabana.com/advanceit/marcas/440.webp', name: 'dell' },
  { url: 'https://cdn.osabana.com/advanceit/marcas/365.webp', name: 'elo' },
  { url: 'https://cdn.osabana.com/advanceit/marcas/366.webp', name: 'epson' },
  { url: 'https://cdn.osabana.com/advanceit/marcas/367.webp', name: 'epson consumo' },
  { url: 'https://cdn.osabana.com/advanceit/marcas/368.webp', name: 'epson pos' },
  { url: 'https://cdn.osabana.com/advanceit/marcas/369.webp', name: 'epson scanners' },
  { url: 'https://cdn.osabana.com/advanceit/marcas/434.webp', name: 'google' },
  { url: 'https://cdn.osabana.com/advanceit/marcas/371.webp', name: 'honeywell' },
  { url: 'https://cdn.osabana.com/advanceit/marcas/372.webp', name: 'hp gran formato' },
  { url: 'https://cdn.osabana.com/advanceit/marcas/373.webp', name: 'hp consumo' },
  { url: 'https://cdn.osabana.com/advanceit/marcas/374.webp', name: 'hp' },
  { url: 'https://cdn.osabana.com/advanceit/marcas/375.webp', name: 'hp plus' },
  { url: 'https://cdn.osabana.com/advanceit/marcas/376.webp', name: 'hp portátiles' },
  { url: 'https://cdn.osabana.com/advanceit/marcas/377.webp', name: 'hp unknown 1' },
  { url: 'https://cdn.osabana.com/advanceit/marcas/378.webp', name: 'hp unknown 2' },
  { url: 'https://cdn.osabana.com/advanceit/marcas/379.webp', name: 'jabra' },
  { url: 'https://cdn.osabana.com/advanceit/marcas/382.webp', name: 'lenovo' },
  { url: 'https://cdn.osabana.com/advanceit/marcas/384.webp', name: 'lenovo servers' },
  { url: 'https://cdn.osabana.com/advanceit/marcas/383.webp', name: 'lenovo workstation' },
  { url: 'https://cdn.osabana.com/advanceit/marcas/385.webp', name: 'lg' },
  { url: 'https://cdn.osabana.com/advanceit/marcas/439.webp', name: 'logitech' },
  { url: 'https://cdn.osabana.com/advanceit/marcas/436.webp', name: 'microsoft (alt)' },
  { url: 'https://cdn.osabana.com/advanceit/marcas/389.webp', name: 'panasonic' },
  { url: 'https://cdn.osabana.com/advanceit/marcas/390.webp', name: 'poly' },
  { url: 'https://cdn.osabana.com/advanceit/marcas/391.webp', name: 'samsung' },
  { url: 'https://cdn.osabana.com/advanceit/marcas/392.webp', name: 'samsung mobile' },
  { url: 'https://cdn.osabana.com/advanceit/marcas/393.webp', name: 'samsung monitores' },
  { url: 'https://cdn.osabana.com/advanceit/marcas/395.webp', name: 'tplink' },
  { url: 'https://cdn.osabana.com/advanceit/marcas/396.webp', name: 'viewsonic' },
  { url: 'https://cdn.osabana.com/advanceit/marcas/397.webp', name: 'wacom' },
  { url: 'https://cdn.osabana.com/advanceit/marcas/398.webp', name: 'zebra' },
];


  @Input() brandImages = [
    'https://cdn.osabana.com/advanceit/marcas/350.webp', //adobe
    'https://cdn.osabana.com/advanceit/marcas/380.webp', //kaspersky
    'https://cdn.osabana.com/advanceit/marcas/388.webp', //oracle
    'https://cdn.osabana.com/advanceit/marcas/358.webp', // autodesk
    'https://cdn.osabana.com/advanceit/marcas/446.webp', // acronis
    'https://cdn.osabana.com/advanceit/marcas/447.webp', // checkpoint
    'https://cdn.osabana.com/advanceit/marcas/448.webp', // citrix
    'https://cdn.osabana.com/advanceit/marcas/451.webp', // SOPHOS
    'https://cdn.osabana.com/advanceit/marcas/349.webp', //adata
    'https://cdn.osabana.com/advanceit/marcas/352.webp', // apc
    'https://cdn.osabana.com/advanceit/marcas/433.webp', // apple
    'https://cdn.osabana.com/advanceit/marcas/354.webp', //aruba
    'https://cdn.osabana.com/advanceit/marcas/355.webp', // asus
    'https://cdn.osabana.com/advanceit/marcas/356.webp', // asus corporactivo
    'https://cdn.osabana.com/advanceit/marcas/461.webp', // barco
    'https://cdn.osabana.com/advanceit/marcas/359.webp', // canon
    'https://cdn.osabana.com/advanceit/marcas/360.webp', // canon corporativo
    'https://cdn.osabana.com/advanceit/marcas/362.webp', // dlink
    'https://cdn.osabana.com/advanceit/marcas/440.webp', // dell
    'https://cdn.osabana.com/advanceit/marcas/365.webp', // elo
    'https://cdn.osabana.com/advanceit/marcas/366.webp', // epson
    'https://cdn.osabana.com/advanceit/marcas/367.webp', // epson proyectoes de consuo
    'https://cdn.osabana.com/advanceit/marcas/368.webp', //epson pos
    'https://cdn.osabana.com/advanceit/marcas/369.webp', // epson scanners
    'https://cdn.osabana.com/advanceit/marcas/434.webp', // google
    'https://cdn.osabana.com/advanceit/marcas/371.webp', // honeywell
    'https://cdn.osabana.com/advanceit/marcas/372.webp', // hp gran formato
    'https://cdn.osabana.com/advanceit/marcas/373.webp', // hp consumo
    'https://cdn.osabana.com/advanceit/marcas/374.webp', // hp
    'https://cdn.osabana.com/advanceit/marcas/375.webp', // hp
    'https://cdn.osabana.com/advanceit/marcas/376.webp', // hp ortatiles
    'https://cdn.osabana.com/advanceit/marcas/377.webp',
    'https://cdn.osabana.com/advanceit/marcas/378.webp',
    'https://cdn.osabana.com/advanceit/marcas/379.webp', // jabra
    'https://cdn.osabana.com/advanceit/marcas/379.webp',
    'https://cdn.osabana.com/advanceit/marcas/382.webp', // lenovo
    'https://cdn.osabana.com/advanceit/marcas/384.webp', // lenovo servers
    'https://cdn.osabana.com/advanceit/marcas/383.webp', // lenovo workstation
    'https://cdn.osabana.com/advanceit/marcas/385.webp', // lg
    'https://cdn.osabana.com/advanceit/marcas/439.webp', // logitec
    'https://cdn.osabana.com/advanceit/marcas/436.webp', // microsoft
    'https://cdn.osabana.com/advanceit/marcas/389.webp', // panasonic
    'https://cdn.osabana.com/advanceit/marcas/390.webp', // poly
    'https://cdn.osabana.com/advanceit/marcas/391.webp', // samsung
    'https://cdn.osabana.com/advanceit/marcas/392.webp', // samsung mobile
    'https://cdn.osabana.com/advanceit/marcas/393.webp', // samsumg monotores
    'https://cdn.osabana.com/advanceit/marcas/395.webp', // tplink
    'https://cdn.osabana.com/advanceit/marcas/396.webp', // viewsonic
    'https://cdn.osabana.com/advanceit/marcas/397.webp', // wacom
    'https://cdn.osabana.com/advanceit/marcas/398.webp', // zebra
  ];

  // Duplicamos para que la animación sea continua
  brandImagesDoubled = [
    ...this.brandImages,
    ...this.brandImages,
    ...this.brandImages,
  ];
}
