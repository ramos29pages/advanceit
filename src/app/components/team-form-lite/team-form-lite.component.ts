import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonSimpleCtaComponent } from "../../utils/button-simple-cta/button-simple-cta.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-team-form-lite',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section
      class="relative flex items-center justify-center py-10 px-4 bg-cover bg-center"
      style="background-image: url('assets/images/bg-form.jpeg');"
    >
      <!-- Overlay para oscurecer el fondo -->
      <!-- <div class="absolute inset-0 bg-black opacity-40"></div> -->
      <!-- Overlay degradado en la parte superior -->
      <div class="absolute inset-0 bg-gradient-to-b from-white to-transparent"></div>

      <!-- Contenedor relativo para mantener el contenido sobre los overlays -->
      <div class="relative max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <!-- Columna Derecha: Imagen -->
        <div class="flex justify-center">
          <img
            *ngIf="imageURL"
            [src]="imageURL"
            alt=""
            class="w-[300px] md:w-[400px] lg:w-[450px]"
          />

          <div *ngIf="!imageURL">
            <h2 class="text-xl font-bold" [ngClass]="orange ? 'text-orange-500' : 'text-purple-700'">
              Maximize the Potential of Your Nearshore Operations!
            </h2>
            <br>
            <p>
              Setting up and managing a satellite office can be complex—but it
              doesn’t have to be. We help businesses like yours streamline
              operations, optimize IT infrastructure, and ensure your team has
              the tools and support they need to thrive.
            </p>
            <br>
            <p>
              From hardware and software solutions to secure network setups and
              ongoing IT support, we make sure your nearshore team is fully
              equipped to operate efficiently and securely. Let’s turn your
              satellite office into a powerhouse of productivity!
            </p>
          </div>
        </div>

        <!-- Columna Izquierda: Texto + Formulario -->
        <div class="space-y-6">
          <!-- Título -->
          <h2
            *ngIf="title"
            class="text-2xl md:text-3xl font-extrabold uppercase text-gray-900 leading-tight"
          >
            {{ title }}
          </h2>

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
                I have read and accept the
                <a routerLink="/terms-and-conditions" class="text-purple-700 font-semibold">
                  data protection policy
                </a>
                *
              </label>
            </div>

            <!-- Botón -->
            <button
              type="button"
              class="bg-purple-700 text-white font-bold px-6 py-3 rounded-md hover:bg-purple-800 cursor-pointer transition w-full md:w-auto"
              routerLink="/contacto"
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
export class TeamFormLiteComponent {
  @Input() imageURL!: string;
  @Input() title: string = "Start Building Efficient Teams Today.";
  @Input() orange = false;
}
