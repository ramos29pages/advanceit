import {
  Component,
  ElementRef,
  ViewChild
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';

/**
 * Representa un elemento del slider: logo + descripción (texto).
 */
interface AboutUsCard {
  logo: string;   // URL del logo
  text: string;   // Descripción breve
}

@Component({
  selector: 'app-slider-industries',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
templateUrl: './slider-industries.component.html',
})
export class SliderIndustriesComponent {

   // Iconos de FontAwesome
   faChevronLeft = faChevronLeft;
   faChevronRight = faChevronRight;

   // Índice actual del slide
   currentIndex = 0;

   // Array de tarjetas (todas con la misma imagen)
   cards = [
     {
       title: 'Reconocimiento 1',
       description: 'We live in an ISO 9001 culture where standardized processes and procedures help maintain an organized business structure. ​',
       image: 'https://cdn.prod.website-files.com/636a549426aa8438b3b45fa8/668e94d68b9faa41ba02158f_bureau-veritas.svg'
     },
     {
       title: 'Reconocimiento 2',
       description: 'Descripción breve del reconocimiento o certificación número 2.',
       image: 'https://cdn.prod.website-files.com/636a549426aa8438b3b45fa8/668e94d68b9faa41ba02158f_bureau-veritas.svg'
     },
     {
       title: 'Reconocimiento 3',
       description: 'Descripción breve del reconocimiento o certificación número 3.',
       image: 'https://cdn.prod.website-files.com/636a549426aa8438b3b45fa8/668e94d68b9faa41ba02158f_bureau-veritas.svg'
     }
   ];

   ngOnInit() {
     setInterval(() => {
       this.nextSlide();
     }, 4000);
   }

   nextSlide(): void {
     this.currentIndex = (this.currentIndex + 1) % this.cards.length;
   }

   prevSlide(): void {
     this.currentIndex = (this.currentIndex - 1 + this.cards.length) % this.cards.length;
   }
}
