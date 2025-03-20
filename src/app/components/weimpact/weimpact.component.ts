import { Component } from '@angular/core';

@Component({
  selector: 'app-weimpact',
  imports: [],
  template: `
    <section class="relative py-16 overflow-hidden lg:h-120">
      <!-- Fondo púrpura completo -->
      <div class="absolute inset-0 p-0 bg-linear-to-r from-purple-600 to-purple-800 z-0"></div>

      <!-- Patrón (imagen) en la parte inferior -->
      <div
        class="absolute bottom-0 rotate-0 left-0 w-[100%] h-70  bg-no-repeat scale-110 "
        style="background-image: url('https://cdn.prod.website-files.com/636a549426aa8438b3b45fa8/63b81c6aa7e1512beb75f818_low-ornament-bg.svg');"
      ></div>

      <!-- Contenido principal -->
      <div class="relative z-10 max-w-6xl mx-auto text-center text-white">
        <!-- Texto introductorio -->
        <p class="mb-8 text-md">
          Our Organizational Development Department is dedicated to supporting
          and improving the lives of our employees and individuals facing
          challenging circumstances in three different ways:
        </p>

        <!-- Tarjetas con 3 columnas -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Tarjeta 1 -->
          <div class="bg-white rounded-lg p-6 shadow-2xl text-center text-gray-700">
            <h3 class="text-xl font-bold text-purple-700 mb-2 uppercase">
              We Help
            </h3>
            <p>
              Elderly adults, children, and other vulnerable demographic groups.
            </p>
          </div>

          <!-- Tarjeta 2 -->
          <div class="bg-white rounded-lg shadow-2xl p-6 text-center text-gray-700">
            <h3 class="text-xl font-bold text-purple-700 mb-2 uppercase">
              We Develop
            </h3>
            <p>
              People looking to start or further their professional careers, as
              well as those with the aspiration to become bilingual.
            </p>
          </div>

          <!-- Tarjeta 3 -->
          <div class="bg-white rounded-lg shadow-2xl p-6 text-center text-gray-700">
            <h3 class="text-xl font-bold text-purple-700 mb-2 uppercase">
              We Impact
            </h3>
            <p >
              Environmental initiatives and inequality reduction, always aiming
              to better our communities.
            </p>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrl: './weimpact.component.css',
})
export class WeimpactComponent {}
