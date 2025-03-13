import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

interface AccomplishmentSlide {
  image: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-slider-impact',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  template: `
    <section class="py-16 px-4">
      <!-- Título y descripción inicial -->
      <div class="text-center mb-8">
        <h2 class="text-xl md:text-4xl text-orange-500 font-extrabold uppercase mb-2">
          Our Accomplishments
        </h2>
        <p class="text-gray-700">
          Thus far, we have provided educational opportunities to many professionals.
        </p>
      </div>

      <!-- Contenedor principal del slider -->
      <div class="relative max-w-4xl mx-auto shadow-xl p-8">

        <!-- Slides -->
        <ng-container *ngFor="let slide of slides; let i = index">
          <div
            *ngIf="currentSlideIndex === i"
            class="flex flex-col md:flex-row items-center space-x-4"
          >
            <!-- Imagen -->
            <img
              [src]="slide.image"
              [alt]="slide.title"
              class="w-92 h-auto rounded-md shadow mb-4 md:mb-0"
            />
            <!-- Texto de la diapositiva -->
            <div>
              <h3 class="text-xl md:text-2xl font-bold text-purple-700 mb-2">
                {{ slide.title }}
              </h3>
              <p class="text-gray-700 leading-relaxed">
                {{ slide.description }}
              </p>
            </div>
          </div>
        </ng-container>

        <!-- Flecha izquierda -->
        <button
          (click)="prevSlide()"
          class="absolute -left-20 top-1/2 transform text-5xl -translate-y-1/2 bg-white text-gray-700
                 p-2 rounded-full hover:bg-gray-100 transition-colors"
        >
          <fa-icon [icon]="faChevronLeft"></fa-icon>
        </button>

        <!-- Flecha derecha -->
        <button
          (click)="nextSlide()"
          class="absolute -right-20 top-1/2 text-5xl transform -translate-y-1/2 bg-white text-gray-700
                 p-2 rounded-full hover:bg-gray-100 transition-colors"
        >
          <fa-icon [icon]="faChevronRight"></fa-icon>
        </button>

        <!-- Indicadores (dots) -->
        <div class="flex justify-center mt-4 space-x-2">
          <div
            *ngFor="let slide of slides; let i = index"
            (click)="goToSlide(i)"
            [class]="
              'w-3 h-3 rounded-full cursor-pointer transition-all ' +
              (currentSlideIndex === i
                ? 'bg-purple-600'
                : 'bg-gray-300 hover:bg-gray-400')
            "
          ></div>
        </div>

      </div>
    </section>
  `,
  styles: []
})
export class AccomplishmentsSliderComponent {
  /** Array de diapositivas: imagen, título, descripción */
  @Input() slides: AccomplishmentSlide[] = [
    {
      image: 'https://cdn.prod.website-files.com/636a549426aa8438b3b45fa8/64dce283658e315ce97b4208_rofe-foundation-p-500.jpg',
      title: 'LYNXS PLATFORM',
      description: `This initiative offers a month-long deep English immersion and trains
        youth in soft skills, logistics, and transportation. Achieving 100% coverage,
        it operates in groups of up to 10, benefiting 551 youth since 2020, with 164 hires
        by Lean Solutions Group.`
    },
    {
      image: 'https://cdn.prod.website-files.com/636a549426aa8438b3b45fa8/64dba580df2cf6ea9d80b5af_LYNX-p-500.jpg',
      title: 'Second Achievement',
      description: `An example of a second accomplishment. We have impacted hundreds of
        professionals by providing new job opportunities in tech and support roles.`
    },
    // Agrega más diapositivas según tu necesidad
  ];

  /** Índice de la diapositiva actual */
  currentSlideIndex: number = 0;

  // Íconos de FontAwesome
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;

  /** Ir a la diapositiva anterior */
  prevSlide() {
    if (this.currentSlideIndex === 0) {
      this.currentSlideIndex = this.slides.length - 1;
    } else {
      this.currentSlideIndex--;
    }
  }

  /** Ir a la diapositiva siguiente */
  nextSlide() {
    if (this.currentSlideIndex === this.slides.length - 1) {
      this.currentSlideIndex = 0;
    } else {
      this.currentSlideIndex++;
    }
  }

  /** Ir a una diapositiva específica */
  goToSlide(index: number) {
    this.currentSlideIndex = index;
  }
}
