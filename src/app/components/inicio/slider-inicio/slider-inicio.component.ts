import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-slider-inicio',
  imports: [CommonModule],
  templateUrl: './slider-inicio.component.html',
  styleUrl: './slider-inicio.component.css',
})
export class SliderInicioComponent {
  slides = [
    {
      image:
        'https://img.freepik.com/vector-gratis/fondo-realista-estilo-futurista_23-2149129125.jpg',
      title: 'THE PEOPLE',
      subtitle: 'The Right Talent For Your Business',
    },
    {
      image:
        'https://img.freepik.com/vector-gratis/fondo-futurista-tecnologia-degradada_23-2149131655.jpg',
      title: 'Innovation & Growth',
      subtitle: 'Transforming Businesses Worldwide',
    },
    {
      image:
        'https://img.freepik.com/foto-gratis/ciudad-inteligente-futurista-tecnologia-red-global-5g_53876-98438.jpg',
      title: 'Empowering Teams',
      subtitle: 'Driving Success Through Collaboration',
    },
    {
      image:
        'https://img.freepik.com/foto-gratis/hombre-usando-tecnologia-inteligente-maqueta-psd-tableta-digital_53876-110815.jpg',
      title: 'Global Reach',
      subtitle: 'Connecting You to Worldwide Opportunities',
    },
    {
      image:
        'https://img.freepik.com/foto-gratis/fondo-humano-apreton-manos-robot-era-digital-futurista_53876-129770.jpg',
      title: 'Building the Future',
      subtitle: 'Cutting-Edge Solutions for Modern Challenges',
    },
  ];

  currentSlideIndex = 0;
  private intervalId: any;

  ngOnInit(): void {
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  startAutoSlide(): void {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  nextSlide(): void {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
  }

  goToSlide(index: number): void {
    this.currentSlideIndex = index;
    clearInterval(this.intervalId);
    this.startAutoSlide();
  }
}
