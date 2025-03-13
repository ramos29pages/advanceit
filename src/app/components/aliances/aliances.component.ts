import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Alliance {
  logo: string;
  alt: string;
}

@Component({
  selector: 'app-aliances',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-16 px-4 text-center">
      <h2 class="text-xl md:text-4xl font-extrabold uppercase text-orange-500 mb-8">
        Our Strategic Alliances
      </h2>

      <!-- Grid con 4 columnas en pantallas medianas (md) y superiores -->
      <div class="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div
          *ngFor="let alliance of alliances"
          class="bg-white rounded-lg shadow p-6 flex items-center justify-center"
        >
          <!-- Logo de la alianza -->
          <img
            [src]="alliance.logo"
            [alt]="alliance.alt"
            class="w-40 h-auto object-contain"
          />
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class AlliancesComponent {
  /** Arreglo de alianzas (logos, alt) */
  alliances: Alliance[] = [
    {
      logo: 'assets/alliances/solca.png',
      alt: 'Solca Alliance'
    },
    {
      logo: 'assets/alliances/fundacion-kdf.png',
      alt: 'Fundación KDF'
    },
    {
      logo: 'assets/alliances/barranquilla.png',
      alt: 'Alcaldía de Barranquilla'
    },
    {
      logo: 'assets/alliances/sena.png',
      alt: 'SENA'
    }
    // Agrega más alianzas según tu necesidad
  ];
}
