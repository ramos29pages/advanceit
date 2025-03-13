import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="relative w-full h-74 bg-center bg-cover flex items-center justify-center text-white text-center"
      [ngStyle]="{
        'background-image': 'url(' + backgroundImage + ')'
      }"
    >
      <!-- Overlay de color degradado (opcional) -->
      <div class="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 opacity-30 "></div>

      <!-- Título -->
      <h1 class="relative z-10 text-3xl md:text-4xl font-extrabold uppercase">
        {{ title }}
      </h1>
    </div>
          <!-- Overlay de color degradado (opcional) -->
          <div class=" h-10 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 opacity-80"></div>
  `,
  styles: []
})
export class HeroHeaderComponent {
  /** Título que se muestra en el centro */
  @Input() title: string = 'Default Title';

  /** Imagen de fondo (URL o ruta local) */
  @Input() backgroundImage: string = 'assets/default-bg.jpg';
}
