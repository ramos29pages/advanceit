import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCheck, faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-feature-section',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  template: `
    <div
      class="relative py-12 lg:py-20 px-6 flex flex-col md:flex-row lg:mx-20 items-center gap-10"
      [ngClass]="{'md:flex-row-reverse': reverse}"
      [ngStyle]="{'background-image': backgroundImage ? 'url(' + backgroundImage + ')' : 'none'}"
    >
      <!-- Contenedor de la imagen con recorte para evitar que imágenes grandes afecten la UI -->
      <div class="md:w-1/2 flex justify-center lg:mt-10">
        <div class="w-full max-w-4xl h-74 overflow-hidden rounded-lg">
          <img
            *ngIf="imageSrc"
            [src]="imageSrc"
            alt="Feature Image"
            class="w-full h-full object-cover"
          >
        </div>
      </div>

      <!-- Contenido -->
      <div class="md:w-1/2 bg-white p-6 rounded-lg" [ngClass]="shadow ? 'shadow-lg' : ''">
        <p *ngIf="note" class="text-purple-600 bg-purple-100 w-30 text-center rounded-3xl py-2">
          Our Team
        </p>
        <h2 class="text-2xl md:text-3xl font-bold uppercase text-purple-700 py-4 mb-4">
          {{ title }}
        </h2>

        <!-- Caso: description es un string -->
        <ng-container *ngIf="!isDescriptionArray(); else multipleDesc">
          <p class="text-gray-700 mb-4">{{ description }}</p>
        </ng-container>
        <!-- Caso: description es un array -->
        <ng-template #multipleDesc>
          <p *ngFor="let item of descriptionArray" class="text-gray-700 mb-4">
            {{ item }}
          </p>
        </ng-template>

        <!-- Lista de características -->
        <ul *ngIf="features" class="mb-2">
          <li *ngFor="let feature of features" class="flex items-center gap-2 text-gray-700">
            <fa-icon [icon]="faCheck" class="text-purple-600 text-xl"></fa-icon> {{ feature }}
          </li>
        </ul>

        <!-- Lista de niveles -->
        <ul *ngIf="levels" class="mb-8 ml-8">
          <li *ngFor="let l of levels" class="flex items-center gap-2 text-gray-700">
            <fa-icon [icon]="faArrowRight" class="text-slate-600 text-xl"></fa-icon> {{ l }}
          </li>
        </ul>

        <!-- Botón (opcional) -->
        <a *ngIf="buttonText" [href]="buttonLink" class="bg-purple-600 hover:bg-purple-800 text-white px-6 py-2 rounded-lg shadow transition">
          {{ buttonText }}
        </a>
      </div>
    </div>
  `,
  styles: []
})
export class FeatureSectionComponent {
  @Input() backgroundImage: string = '';
  @Input() imageSrc: string = '';
  @Input() title: string = '';
  @Input() note?: boolean = false;
  @Input() shadow?: boolean = false;
  @Input() description: string | string[] = [];
  @Input() features?: string[];
  @Input() levels?: string[];
  @Input() buttonText?: string;
  @Input() buttonLink: string = '#';
  @Input() reverse: boolean = false;
  faCheck = faCheck;
  faArrowRight = faArrowRight;

  // Getter para usar en el *ngFor cuando description es un array
  get descriptionArray(): string[] {
    return Array.isArray(this.description) ? this.description : [];
  }

  // Función para determinar si description es array
  isDescriptionArray(): boolean {
    return Array.isArray(this.description);
  }
}
