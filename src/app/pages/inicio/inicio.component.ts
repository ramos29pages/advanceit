import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../components/footer/footer.component';
import { SliderInicioComponent } from '../../components/inicio/slider-inicio/slider-inicio.component';
import { SimpleCtaComponent } from "../../components/inicio/simple-cta/simple-cta.component";
import { WhatMostComponent } from "../../components/inicio/what-most/what-most.component";
import { TitleMapsComponent } from "../../components/inicio/title-maps/title-maps.component";
import { CategoriesInicioComponent } from "../../components/inicio/categories-inicio/categories-inicio.component";
import { WorkforceStaffingComponent } from "../../components/inicio/workforce-staffing/workforce-staffing.component";
import { ImageDescriptionComponent } from "../../components/inicio/image-description/image-description.component";
import { SocialImpactComponent } from "../../components/inicio/social-impact/social-impact.component";
import { SimpleTitleSectionComponent } from "../../components/inicio/simple-title-section/simple-title-section.component";
import { BrandSliderComponent } from "../../shared/brand-slider/brand-slider.component";

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, FooterComponent, SliderInicioComponent, SimpleCtaComponent, WhatMostComponent, TitleMapsComponent, CategoriesInicioComponent, WorkforceStaffingComponent, ImageDescriptionComponent, SocialImpactComponent, SimpleTitleSectionComponent, BrandSliderComponent],
template: `
    <!-- Contenedor principal para separar el contenido del navbar si está fixed -->
    <div class="w-screen max-w-full overflow-hidden">
      <!-- SLIDER (fondo e imágenes) -->
      <app-slider-inicio></app-slider-inicio>

      <!-- NUEVA SECCIÓN: "BECOME AN EARLY ADOPTER OF AI" -->
      <app-simple-cta></app-simple-cta>

      <app-brand-slider></app-brand-slider>

      <!-- NUEVA SECCIÓN: "What's Most Important" -->
      <app-what-most
      noteText="We Care!"
        title="DELIVERING EXCEPTIONAL IT SUPPORT WITH NEARSHORE SOLUTIONS"
        description = "At Advance Technology Projects, we specialize in delivering personalized IT consultancy services, equipping businesses with the tools they need to succeed in today’s fast-paced digital world. We empower companies to reach their objectives by offering nearshore IT solutions that act as an extension of their in-house teams, providing the expertise and flexibility to drive growth."
        footerText="Clarity. Agility. Excellence."
        buttonText="Get Started..."
      ></app-what-most>

      <app-categories-inicio></app-categories-inicio>

      <app-title-maps></app-title-maps>

      <app-workforce-staffing></app-workforce-staffing>

      <!-- <app-optimization-insights></app-optimization-insights> -->

      <app-image-description></app-image-description>

      <app-social-impact></app-social-impact>

      <app-simple-title-section ></app-simple-title-section>
    </div>

    <app-footer></app-footer>
  `,
  styles: [``],
})
export class InicioComponent implements OnInit, OnDestroy {
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
