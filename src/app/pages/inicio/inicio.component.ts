import { Component} from '@angular/core';
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
      <app-simple-cta ></app-simple-cta>

      <app-brand-slider></app-brand-slider>

      <!-- NUEVA SECCIÓN: "What's Most Important" -->
      <app-what-most
      noteText="home.whatMostNoteText"
        title="home.whatMostTitle"
        description = "home.whatMostP1"
        footerText="home.whatMostFooterText"
        buttonText="home.whatMostButtonText"
      ></app-what-most>

      <app-simple-cta title="home.simpleTitle"></app-simple-cta>

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
export class InicioComponent {

}
