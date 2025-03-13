import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

/** Interfaz para cada objetivo (SDG Item) */
interface SdgGoal {
  title: string;
  image: string;       // Ruta o URL de la imagen
  description: string; // Texto descriptivo
}

@Component({
  selector: 'app-sdg-goals',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-16 px-4">
      <div class="max-w-6xl mx-auto">
        <!-- Título principal (opcional) -->
        <h2 class="text-xl md:text-2xl font-extrabold uppercase text-center mb-8 text-purple-700">
          We Support United Nations' Sustainable Development Goals
        </h2>

        <!-- Contenedor de 2 columnas: lista izquierda, contenido derecho -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">

          <!-- Columna Izquierda: Lista de objetivos -->
          <div>
            <ul class="space-y-2">
              <li
                *ngFor="let goal of sdgGoals; let i = index"
                (click)="selectGoal(i)"
                [class]="
                  'cursor-pointer p-2 border-l-4 ' +
                  (selectedIndex === i
                    ? 'border-purple-600 bg-purple-50 font-semibold'
                    : 'border-transparent hover:bg-gray-100')
                "
              >
                {{ goal.title }}
              </li>
            </ul>
          </div>

          <!-- Columna Derecha: Contenido del objetivo seleccionado -->
          <div>
            <div class="bg-white rounded-lg shadow p-6">
              <img
                [src]="sdgGoals[selectedIndex].image"
                [alt]="sdgGoals[selectedIndex].title"
                class="w-full h-auto mb-4 object-cover rounded"
              />
              <h3 class="text-lg md:text-xl font-bold mb-2 text-purple-700">
                {{ sdgGoals[selectedIndex].title }}
              </h3>
              <p class="text-gray-700 leading-relaxed">
                {{ sdgGoals[selectedIndex].description }}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  `,
  styles: []
})
export class SdgGoalsComponent {
  // Arreglo de objetivos. Ajusta textos, imágenes y títulos según tu necesidad
  sdgGoals: SdgGoal[] = [
    {
      title: 'ENDING POVERTY',
      image: 'https://cdn.prod.website-files.com/636a549426aa8438b3b45fa8/64d53e80fe91cdc15182d9bc_Ending-Poverty.png',
      description: `This objective aims to eradicate extreme poverty and ensure equal
        opportunities for everyone, focusing on sustainable livelihoods and social inclusion.`
    },
    {
      title: 'ZERO HUNGER',
      image: 'assets/sdg/zero-hunger.jpg',
      description: `This objective strives to guarantee food security and collaboration
        with food aid organizations, ensuring everyone has access to nutritious meals.`
    },
    {
      title: 'SAFETY AND WELL-BEING',
      image: 'assets/sdg/safety-wellbeing.jpg',
      description: `We focus on improving health, safety, and well-being for communities,
        reducing risks and providing access to essential services.`
    },
    {
      title: 'QUALITY EDUCATION',
      image: 'assets/sdg/quality-education.jpg',
      description: `Quality education is vital for breaking cycles of poverty. We work
        with local partners to improve schools, teacher training, and learning materials.`
    },
    {
      title: 'DECENT WORK AND ECONOMIC GROWTH',
      image: 'assets/sdg/decent-work.jpg',
      description: `We support job creation, entrepreneurship, and inclusive growth that
        benefits local communities, promoting fair wages and opportunities.`
    },
    {
      title: 'REDUCTION OF INEQUALITIES',
      image: 'assets/sdg/reduction-inequalities.jpg',
      description: `By bridging gaps between social groups, we foster an inclusive
        environment where everyone can thrive, regardless of background.`
    },
    {
      title: 'CLIMATE ACTION',
      image: 'assets/sdg/climate-action.jpg',
      description: `Protecting our planet is a priority. We encourage sustainable practices,
        reduced carbon footprints, and green initiatives in our operations.`
    },
    {
      title: 'LIFE ON LAND',
      image: 'assets/sdg/life-on-land.jpg',
      description: `We collaborate with conservation efforts, reforestation projects, and
        environmental education to preserve biodiversity and natural habitats.`
    }
  ];

  selectedIndex: number = 0; // Por defecto, se muestra el primer objetivo

  selectGoal(index: number) {
    this.selectedIndex = index;
  }
}
