import {
  Component,
  ElementRef,
  Input,
  ViewChild
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';
import { SimpleTitleSectionComponent } from "../../inicio/simple-title-section/simple-title-section.component";

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
  imports: [CommonModule, FontAwesomeModule, SimpleTitleSectionComponent],
templateUrl: './slider-industries.component.html',
})
export class SliderIndustriesComponent {

   // Iconos de FontAwesome
   faChevronLeft = faChevronLeft;
   faChevronRight = faChevronRight;

   // Índice actual del slide
   currentIndex = 0;

   @Input() description !: string;

   // Array de tarjetas (todas con la misma imagen)
   @Input() cards = [
     {
       title: 'Reconocimiento 1',
       description: 'We live in an ISO 9001 culture where standardized processes and procedures help maintain an organized business structure. ​',
       image: 'https://cloudfi.ai/wp-content/uploads/2024/09/aws-cloudfi-1.png'
     },
     {
       title: 'Reconocimiento 2',
       description: 'Descripción breve del reconocimiento o certificación número 2.',
       image: 'https://cloudfi.ai/wp-content/uploads/2024/09/jabra-cloudfi-1.png'
     },
     {
       title: 'Reconocimiento 3',
       description: 'Descripción breve del reconocimiento o certificación número 3.',
       image: 'https://cloudfi.ai/wp-content/uploads/2024/09/solution-cloudfi.png'
     },
     {
       title: 'Reconocimiento 3',
       description: 'Descripción breve del reconocimiento o certificación número 3.',
       image: 'https://cloudfi.ai/wp-content/uploads/2024/09/dell-cloudfi.png'
     },
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
