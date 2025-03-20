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
        'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'THE PEOPLE',
      subtitle: 'The Right Talent For Your Business',
    },
    {
      image:
        'https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Innovation & Growth',
      subtitle: 'Transforming Businesses Worldwide',
    },
    {
      image:
        'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Empowering Teams',
      subtitle: 'Driving Success Through Collaboration',
    },
    {
      image:
        'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
