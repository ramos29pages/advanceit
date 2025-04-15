import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {TranslatePipe, TranslateDirective, TranslateService} from "@ngx-translate/core";


@Component({
  selector: 'app-slider-inicio',
  imports: [CommonModule, TranslatePipe, RouterLink ],
  templateUrl: './slider-inicio.component.html',
//   template: `
//   <h1 class="mt-20"></h1>
//   <h1 class="mt-20">hola</h1>
//   <button (click)="cambiarIdioma('en')">English</button>
//   <button (click)="cambiarIdioma('es')">Español</button>
// `,
})
export class SliderInicioComponent {
  slides = [
    {
      image:
        'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3',
      title: 'home.slider.ourTeam',
      subtitle: 'home.slider.ourTeamDescription',
      link: 'hardware-provisioning'
    },
    {
      image:
        'https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3',
      title: 'home.slider.innovationAndGrowth',
      subtitle: 'home.slider.innovationAndGrowthDescription',
      link: 'software-as-a-service'
    },
    {
      image:
        'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3',
      title: 'home.slider.empoweringTeams',
      subtitle: 'home.slider.empoweringTeamsDescription',
      link: 'cloud-cibersecurity'
    },
    {
      image:
        'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3',
      title: 'home.slider.latamReach',
      subtitle: 'home.slider.latamReachDescription',
      link: 'helpdesk-support'
    },
    {
      image:
        'https://img.freepik.com/foto-gratis/fondo-humano-apreton-manos-robot-era-digital-futurista_53876-129770.jpg',
      title: 'home.slider.buildingTheFuture',
      subtitle: 'home.slider.buildingTheFutureDescription',
      link: 'enterprise-technologies'
    }
  ];


  constructor(private translate: TranslateService) {
    this.translate.addLangs(['es', 'en']);
    this.translate.setDefaultLang('es');
    this.translate.use('es');
  }

  cambiarIdioma(idioma: string) {
    this.translate.use(idioma);
  }

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
