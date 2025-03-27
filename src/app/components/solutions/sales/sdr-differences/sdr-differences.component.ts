import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faChalkboardTeacher,
  faUserFriends,
  faBullseye,
  faAward
} from '@fortawesome/free-solid-svg-icons';

interface SdrDifferenceItem {
  icon: any;           // Ícono de FontAwesome
  title: string;       // Título
  description: string; // Descripción breve
}

@Component({
  selector: 'app-sdr-differences',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  template: `
    <section class="py-16 px-4 bg-white text-center">
      <div class="max-w-6xl mx-auto">

        <!-- Título principal -->
        <h2 class="text-2xl md:text-3xl font-extrabold uppercase text-purple-700 mb-12">
          What Makes Our SDRs Different?
        </h2>

        <!-- Grid con 4 elementos -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Tarjeta por cada ítem -->
          <div
            *ngFor="let item of differences"
            class="bg-white shadow-md rounded-lg p-6 flex flex-col items-center space-y-3"
          >
            <!-- Contenedor del ícono con fondo morado -->
            <div class="w-12 h-12 bg-purple-100 text-purple-700 rounded flex items-center justify-center">
              <fa-icon [icon]="item.icon" class="text-xl"></fa-icon>
            </div>
            <!-- Título -->
            <h3 class="text-lg font-semibold text-gray-800 mt-2">
              {{ item.title }}
            </h3>
            <!-- Descripción -->
            <p class="text-sm text-gray-600">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class SdrDifferencesComponent {
  // Íconos de FontAwesome
  faChalkboardTeacher = faChalkboardTeacher;
  faUserFriends = faUserFriends;
  faBullseye = faBullseye;
  faAward = faAward;

  // Lista de items a mostrar
  differences: SdrDifferenceItem[] = [
    {
      icon: this.faChalkboardTeacher,
      title: 'Customized Training',
      description: 'SDRs become experts in your business, fast.'
    },
    {
      icon: this.faUserFriends,
      title: 'Social Selling Pros Training',
      description: 'Turn LinkedIn into a lead generation machine.'
    },
    {
      icon: this.faBullseye,
      title: 'AI-Powered Targeting',
      description: 'Find the perfect prospects, every time.'
    },
    {
      icon: this.faAward,
      title: 'Top Talent, Day 1 Results',
      description: 'Get bilingual, college-educated professionals driving sales immediately.'
    }
  ];
}
