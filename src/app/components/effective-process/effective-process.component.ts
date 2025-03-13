import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

interface ProcessStep {
  number: string;
  title: string;
  text: string;
}

@Component({
  selector: 'app-effective-process',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  template: `
    <section class="py-16 px-4 text-center">
      <div class="max-w-6xl mx-auto space-y-4">

        <!-- Texto pequeño arriba -->
        <div class="text-sm text-purple-600 font-semibold uppercase">
          Onboarding
        </div>

        <!-- Título principal -->
        <h2 class="text-2xl md:text-3xl font-extrabold uppercase text-gray-800">
          Our Effective Process
        </h2>

        <!-- Contenedor con fondo blanco para los pasos -->
        <div
          class="bg-white rounded-lg shadow-md px-6 py-8 mt-8 flex flex-col items-center"
        >
          <!-- Fila de pasos (en pantallas pequeñas: scroll horizontal o wrap) -->
          <div
            class="w-full flex flex-col md:flex-row md:justify-between md:items-center gap-6"
          >
            <div
              *ngFor="let step of steps; let i = index"
              class="flex flex-col md:flex-row items-center gap-3"
            >
              <!-- Número con solo contorno -->
              <div class="text-outline font-extrabold text-3xl md:text-4xl uppercase">
                {{ step.number }}
              </div>

              <!-- Título y descripción -->
              <div class="text-left">
                <strong class="block text-gray-800 text-base md:text-lg font-semibold">
                  {{ step.title }}
                </strong>
                <p class="text-sm text-gray-600">
                  {{ step.text }}
                </p>
              </div>

              <!-- Flecha roja -->
              <!-- Solo se muestra flecha si NO es el último item -->
              <div
                *ngIf="i < steps.length - 1"
                class="text-red-500 text-xl md:text-2xl"
              >
                <fa-icon [icon]="faChevronRight"></fa-icon>
              </div>
            </div>
          </div>
        </div>

        <!-- Botón GET STARTED -->
        <div class="mt-8">
          <button
            class="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-md shadow-md transition-colors"
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  `,
  styles: [`
    /* Clase para texto con solo contorno (outline) */
    .text-outline {
      color: transparent;
      -webkit-text-stroke: 1px #000; /* grosor y color del contorno */
      text-stroke: 1px #000;         /* para navegadores que lo soporten */
    }
    /* Fallback en Firefox (opcional):
       .text-outline {
         color: rgba(0,0,0,0.05);
       }
    */
  `]
})
export class EffectiveProcessComponent {
  // Flecha de FontAwesome
  faChevronRight = faChevronRight;

  // Arreglo de pasos
  steps: ProcessStep[] = [
    {
      number: '01',
      title: 'Discovery Call',
      text: 'Get to know each other'
    },
    {
      number: '02',
      title: 'Implementation Call',
      text: 'Learning the specifics'
    },
    {
      number: '03',
      title: 'Employee Selection',
      text: 'Finding your talent'
    },
    {
      number: '04',
      title: 'Training',
      text: 'Preparations'
    },
    {
      number: '05',
      title: 'Your team is ready to go!',
      text: 'Providing the best service'
    }
  ];
}
