import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-team-form-lite',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section
      class="relative flex items-center justify-center py-16 px-4 bg-cover bg-center"
      style="background-image: url('https://cdn.prod.website-files.com/636a549426aa8438b3b45fa8/6372587c9ba56f0e66ea0544_section-bg1.svg');"
    >
      <div
        class="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
      >
        <!-- Columna Derecha: Imagen -->
        <div class="flex justify-center">
          <img
            src="https://cdn.prod.website-files.com/636a549426aa8438b3b45fa8/63a500d2ee2304b4724d2711_LSG%20Team.png"
            alt="LSG Team"
            class="w-[300px] md:w-[400px] lg:w-[450px]"
          />
        </div>

        <!-- Columna Izquierda: Texto + Formulario -->
        <div class="space-y-6">
          <!-- Título -->
          <h2
            class="text-2xl md:text-3xl font-extrabold uppercase text-gray-900 leading-tight"
          >
            Start Building
            <span class="text-purple-700">Efficient Teams</span> Today.
          </h2>

          <!-- Enlace pequeño -->
          <p class="text-sm text-gray-600">
            If you want to discuss a career with Lean Solutions Group
            <a href="#" class="text-purple-700 font-semibold">Click Here.</a>
          </p>

          <!-- Formulario -->
          <form class="space-y-4">
            <!-- Campos en 2 columnas en pantallas medianas -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Company Email*"
                class="input-field col-span-2"
              />
              <input
                type="text"
                placeholder="First name*"
                class="input-field"
              />
              <input type="text" placeholder="Last name*" class="input-field" />
              <input
                type="text"
                placeholder="Company name*"
                class="input-field"
              />
              <select class="input-field">
                <option value="">Select solution*</option>
                <option value="Consulting">Consulting</option>
                <option value="Outsourcing">Outsourcing</option>
                <option value="Development">Development</option>
                <option value="Support">Support</option>
              </select>
              <input
                type="text"
                placeholder="Phone number*"
                class="input-field"
              />
              <input type="text" placeholder="State*" class="input-field" />
              <input
                type="text"
                placeholder="How did you hear about us?"
                class="input-field col-span-2"
              />
            </div>

            <!-- Checkbox -->
            <div class="flex items-center text-sm text-gray-600 space-x-2">
              <input type="checkbox" class="w-4 h-4" id="acceptPolicy" />
              <label for="acceptPolicy">
                I read and accept the
                <a href="#" class="text-purple-700 font-semibold">
                  data protection policy
                </a>
                *
              </label>
            </div>

            <!-- Botón -->
            <button
              type="button"
              class="bg-purple-700 text-white font-bold px-6 py-3 rounded-md hover:bg-purple-800 cursor-pointer transition w-full md:w-auto"
            >
              Let's Talk
            </button>
          </form>
        </div>
      </div>
    </section>
  `,
  styles: [``],
})
export class TeamFormLiteComponent {}
