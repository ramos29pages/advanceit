import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inicio',
  imports: [CommonModule],
  template: `
    <div class="relative w-full h-screen overflow-hidden bg-gray-100">
      <!-- Contenedor de las diapositivas -->
      <div
        *ngFor="let slide of slides; let i = index"
        class="absolute top-0 left-0 w-full h-full transition-opacity duration-700 ease-in-out"
        [ngStyle]="{ 'opacity': i === currentSlideIndex ? 1 : 0 }"
      >
        <!-- Imagen de fondo -->
        <img
          [src]="slide.image"
          alt="Imagen de Slide"
          class="w-full h-full object-cover"
        />
        <!-- Texto superpuesto (opcional) -->
        <div class="absolute bottom-0 left-0 p-8 text-white bg-black bg-opacity-40 max-w-xl">
          <h2 class="text-3xl md:text-5xl font-bold mb-2">
            {{ slide.title }}
          </h2>
          <p class="text-md md:text-lg">
            {{ slide.subtitle }}
          </p>
        </div>
      </div>

      <!-- Indicadores de posición (barras verticales) -->
      <div
        class="absolute left-6 top-1/2 transform -translate-y-1/2 flex flex-col space-y-3 z-10"
      >
        <div
          *ngFor="let s of slides; let j = index"
          (click)="goToSlide(j)"
          class="cursor-pointer w-2 h-8 rounded-sm transition-colors duration-300"
          [ngClass]="{
            'bg-purple-700': currentSlideIndex === j,
            'bg-white opacity-70 hover:opacity-100': currentSlideIndex !== j
          }"
        ></div>
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `
  ]
})
export class InicioComponent implements OnInit, OnDestroy {
  slides = [
    {
      image: 'https://img.freepik.com/vector-gratis/fondo-realista-estilo-futurista_23-2149129125.jpg?t=st=1741761023~exp=1741764623~hmac=f4d7ca4859a4327828bff654b72db0ec55c68542f66e4d28ffdfa99b61b047b8&w=1380',
      title: 'THE PEOPLE',
      subtitle: 'The Right Talent For Your Business'
    },
    {
      image: 'https://img.freepik.com/vector-gratis/fondo-futurista-tecnologia-degradada_23-2149131655.jpg?t=st=1741761077~exp=1741764677~hmac=225b4a8f70d1cf9c294c6b0a610a7b854125911189f7b9bcbb12cd01184fad24&w=1380',
      title: 'Innovation & Growth',
      subtitle: 'Transforming Businesses Worldwide'
    },
    {
      image: 'https://img.freepik.com/foto-gratis/ciudad-inteligente-futurista-tecnologia-red-global-5g_53876-98438.jpg?t=st=1741761111~exp=1741764711~hmac=007de21eff63a79fcd6d80df2c27a21407b963b5b148c565d304671abeef1266&w=1380',
      title: 'Empowering Teams',
      subtitle: 'Driving Success Through Collaboration'
    },
    {
      image: 'https://img.freepik.com/foto-gratis/hombre-usando-tecnologia-inteligente-maqueta-psd-tableta-digital_53876-110815.jpg?t=st=1741761162~exp=1741764762~hmac=117525ce1ca071d0193ec95427175be63ac09c2da9e3bcddbb6603dc4baafefb&w=1380',
      title: 'Global Reach',
      subtitle: 'Connecting You to Worldwide Opportunities'
    },
    {
      image: 'https://img.freepik.com/foto-gratis/fondo-humano-apreton-manos-robot-era-digital-futurista_53876-129770.jpg?t=st=1741761198~exp=1741764798~hmac=a3a60c25a512a7d5fbfbc0a5e87c8f0a45511734844d6e08bd3cda9cd4bdd18d&w=1380',
      title: 'Building the Future',
      subtitle: 'Cutting-Edge Solutions for Modern Challenges'
    }
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

  /**
   * Inicia el desplazamiento automático del slider cada 5 segundos.
   */
  startAutoSlide(): void {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  /**
   * Avanza al siguiente slide de manera cíclica.
   */
  nextSlide(): void {
    this.currentSlideIndex =
      (this.currentSlideIndex + 1) % this.slides.length;
  }

  /**
   * Permite ir a un slide específico al hacer clic en el indicador.
   * También reinicia el intervalo para mantener el loop infinito.
   */
  goToSlide(index: number): void {
    this.currentSlideIndex = index;
    // Reinicia el temporizador para que siga el loop correctamente
    clearInterval(this.intervalId);
    this.startAutoSlide();
  }
}
