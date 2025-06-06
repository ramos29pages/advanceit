import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-hero-header',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  template: `
    <div
      class="relative w-full h-[80vh] bg-center flex items-center flex-col gap-8 justify-center text-white text-center no-repeat bg-cover"
      [ngClass]="subtitle.length > 0 ? 'h-116' : 'h-74'"
      [ngStyle]="{
        'background-image': 'url(' + backgroundImage + ')'
      }"
    >
      <!-- Overlay de color degradado (opcional) -->
      <div
        class="absolute inset-0 bg-gradient-to-r bg-black/50 "
      ></div>

      <!-- Título -->
      <h1 class="relative z-10 text-3xl md:text-6xl mt-20 font-extrabold uppercase">
        {{ title | translate }}
      </h1>
      @if (subtitle.length > 0) {

      <p class="relative max-w-180 py-4 text-justify z-10 text-md md:text-lg px-4 font-semibold">
        {{subtitle | translate}}
      </p>
      }
    </div>
    <!-- Overlay de color degradado (opcional) -->
    <!-- <div
      class=" h-10 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 opacity-80"
    ></div> -->
  `,
  styles: [],
})
export class HeroHeaderComponent {
  /** Título que se muestra en el centro */
  @Input() title: string = 'Default Title';
  @Input() subtitle: string = '';

  /** Imagen de fondo (URL o ruta local) */
  @Input() backgroundImage: string = 'assets/default-bg.jpg';
}
