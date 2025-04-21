import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeroHeaderComponent } from '../../../components/hero-header/hero-header.component';
import { NosotrosComponent } from "../nosotros.component";

@Component({
  selector: 'app-ourhistory',
  imports: [CommonModule, HeroHeaderComponent, NosotrosComponent],
  templateUrl: './ourhistory.component.html',
})
export class OurhistoryComponent {

    // Array de premios/reconocimientos
    awards = [
      {
        src: 'logo.png',
        alt: 'Great Place to Work 2023',
      },
      {
        src: 'assets/awards/top-employer.png',
        alt: 'Top Employer',
      },
      {
        src: 'assets/awards/fastest-growing.png',
        alt: 'Fastest Growing Company',
      },
      // Agrega más imágenes si lo deseas
    ];

    currentSlideIndex = 0;

    prevSlide() {
      // Si estamos en el primer slide, volvemos al último
      if (this.currentSlideIndex === 0) {
        this.currentSlideIndex = this.awards.length - 1;
      } else {
        this.currentSlideIndex--;
      }
    }

    nextSlide() {
      // Si estamos en el último slide, volvemos al primero
      if (this.currentSlideIndex === this.awards.length - 1) {
        this.currentSlideIndex = 0;
      } else {
        this.currentSlideIndex++;
      }
    }
}
