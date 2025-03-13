import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-countries-operate',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-16 px-4">
      <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

        <!-- Columna Izquierda: Mapa -->
        <div class="flex justify-center">
          <!-- Ajusta la ruta de la imagen (mapa estilizado) -->
          <img
            src="https://static.vecteezy.com/system/resources/previews/013/079/182/non_2x/doodle-freehand-drawing-of-world-map-free-png.png"
            alt="World Map"
            class="w-full h-auto"
          />
        </div>

        <!-- Columna Derecha: Texto -->
        <div class="text-left">
          <!-- Pequeño label -->
          <span
            class="inline-block bg-purple-100 text-purple-700 text-sm font-semibold px-3 py-1 rounded-full mb-2"
          >
            Our Locations
          </span>

          <!-- Título -->
          <h2 class="text-2xl md:text-3xl font-extrabold text-gray-800 mb-4">
            Countries we operate in
          </h2>

          <!-- Descripción -->
          <p class="text-gray-700 leading-relaxed">
            Due to our exponential growth, we have been able to expand to strategic countries
            around the world. We now provide you with workforce optimization solutions to
            multiple countries.
          </p>
        </div>

      </div>
    </section>
  `,
  styles: []
})
export class CountriesOperateComponent {}
