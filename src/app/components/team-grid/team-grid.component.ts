import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface TeamMember {
  name: string;
  position: string;
  image: string;  // Ruta/URL de la foto
}

@Component({
  selector: 'app-team-grid',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-16 px-4">
      <div class="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div
          *ngFor="let member of members"
          class="bg-gray-800 rounded-lg overflow-hidden text-white flex flex-col items-center p-4"
        >
          <!-- Imagen del miembro -->
          <img
            [src]="member.image"
            [alt]="member.name"
            class="w-full h-64 object-cover mb-4"
          />
          <!-- Nombre -->
          <h3 class="text-lg font-bold mb-1">{{ member.name }}</h3>
          <!-- Cargo/posición -->
          <p class="text-sm text-gray-300">{{ member.position }}</p>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class TeamGridComponent {
  /** Arreglo de personas (nombre, cargo, imagen) */
  @Input() members: TeamMember[] = [];
}
