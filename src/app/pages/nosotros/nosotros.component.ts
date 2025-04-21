import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../components/footer/footer.component';
import { StatsComponent } from '../../components/stats/stats.component';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SimpleTitleSectionComponent } from '../../components/inicio/simple-title-section/simple-title-section.component';
import { CategoriesInicioComponent } from '../../components/inicio/categories-inicio/categories-inicio.component';
import { FeatureSectionComponent } from '../../shared/feature-section/feature-section.component';
import { CertificateSliderComponent } from "../../shared/certificate-slider/certificate-slider.component";
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  imports: [
    CommonModule,
    FooterComponent,
    StatsComponent,
    FontAwesomeModule,
    SimpleTitleSectionComponent,
    CategoriesInicioComponent,
    FeatureSectionComponent,
    CertificateSliderComponent,
    TranslatePipe
],
  selector: 'app-nosotros',
  standalone: true,
  template: `
    <section class="mt-20">
      <div
        class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8"
      >
        <div class="text-left">
          <h2
            class="text-3xl md:text-3xl text-center font-extrabold text-purple-700 uppercase mb-4"
          >
            {{ 'nosotrosPage.heroSection.title' | translate }}
          </h2>
          <p class="text-lg text-gray-700 text-center px-4">
            {{ 'nosotrosPage.heroSection.description' | translate }}
          </p>
        </div>

        <div class="flex justify-center h-120  overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1491911923017-19f90d8d7f83?q=80&w=1887&auto=format&fit=crop"
            class=""
            alt=""
          />
        </div>
      </div>
    </section>


    <app-feature-section
      imageSrc="https://images.unsplash.com/photo-1562577308-c8b2614b9b9a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      [title]="'nosotrosPage.enterpriseExcellence.title' | translate"
      [description]="'nosotrosPage.enterpriseExcellence.description' | translate"
    ></app-feature-section>
    <app-simple-title-section
      [title]="'nosotrosPage.certifiedReseller.title' | translate"
    ></app-simple-title-section>

    <app-certificate-slider></app-certificate-slider>
<section
      class="relative py-4 px-4 text-white overflow-hidden"
    >

    <app-feature-section
      [title]="'nosotrosPage.missionSection.title' | translate"
      [description]="'nosotrosPage.missionSection.description' | translate"
      [features]="features"
      [reverse]="true"
      imageSrc="https://images.unsplash.com/photo-1563461660947-507ef49e9c47?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ></app-feature-section>

    <app-feature-section
      [title]="'nosotrosPage.visionSection.title' | translate"
      [description]="'nosotrosPage.visionSection.description' | translate"
      colorTitle="orange"
      imageSrc="https://images.unsplash.com/photo-1564410267841-915d8e4d71ea?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ></app-feature-section>

    </section>

    <app-stats></app-stats>

    <h2
      class="text-2xl text-center md:text-5xl font-extrabold text-gray-800 uppercase mb-12"
    >
      {{ 'nosotrosPage.ourSolutionsTitle' | translate }}
    </h2>
    <app-categories-inicio></app-categories-inicio>

    <app-footer></app-footer>
  `,
  styles: [
    `
      .hero-sectionS {
        position: relative;
        background: radial-gradient(circle at center, white 40%, #f3e8ff 60%);
        min-height: calc(100vh - 64px);
        overflow: hidden;
      }

      /* Pseudo-elemento para colocar el logo al fondo */
      .hero-sectionS::before {
        content: '';
        position: absolute;
        /* Ocupa todo el contenedor */
        inset: 0;
        /* Imagen de fondo sin repetir */
        background: url('/logo0.png') no-repeat;
        /* Ajusta el tamaño del logo */
        background-size: 700px auto;
        /* Ubícalo en la parte inferior izquierda */
        background-position: -5rem 1rem;
        /* Transparencia al 90% */
        opacity: 0.08;
        z-index: 0;
      }

      .hero-sectionS > .container {
        position: relative;
        z-index: 1;
      }

      /* Clase para texto con solo contorno (outline) en color púrpura */
      .text-outline-purple {
        color: transparent;
        -webkit-text-stroke: 1px #6b4fa7; /* grosor y color del trazo (WebKit) */
        text-stroke: 1px #6b4fa7; /* para navegadores que soporten text-stroke */
      }
    `,
  ],
})
export class NosotrosComponent {
  faCheck = faCheck;

  features = ['nosotrosPage.missionSection.features.f1', 'nosotrosPage.missionSection.features.f2', 'nosotrosPage.missionSection.features.f3']

  cardImages = [
    'https://cloudfi.ai/wp-content/uploads/2024/09/aws-cloudfi-1.png',
    'https://cloudfi.ai/wp-content/uploads/2024/09/jabra-cloudfi-1.png',
    'https://cloudfi.ai/wp-content/uploads/2024/09/dell-cloudfi.png',
    'https://cloudfi.ai/wp-content/uploads/2024/09/solution-cloudfi.png',
    'https://cloudfi.ai/wp-content/uploads/2024/09/adobe-cloudfi.png',
    'https://cloudfi.ai/wp-content/uploads/2024/09/lenovo-cloudfi.png',
  ];

  cards = [
    {
      title: 'nosotrosPage.recognitionCards.0.title',
      description:
        'nosotrosPage.recognitionCards.0.description',
      image: 'https://cloudfi.ai/wp-content/uploads/2024/09/aws-cloudfi-1.png',
    },
    {
      title: 'nosotrosPage.recognitionCards.1.title',
      description:
        'nosotrosPage.recognitionCards.1.description',
      image:
        'https://cloudfi.ai/wp-content/uploads/2024/09/jabra-cloudfi-1.png',
    },
    {
      title: 'nosotrosPage.recognitionCards.2.title',
      description:
        'nosotrosPage.recognitionCards.2.description',
      image:
        'https://cloudfi.ai/wp-content/uploads/2024/09/solution-cloudfi.png',
    },
    {
      title: 'nosotrosPage.recognitionCards.3.title',
      description:
        'nosotrosPage.recognitionCards.3.description',
      image: 'https://cloudfi.ai/wp-content/uploads/2024/09/dell-cloudfi.png',
    },
    {
      title: 'nosotrosPage.recognitionCards.4.title',
      description: 'nosotrosPage.recognitionCards.4.description',
      image: 'https://cloudfi.ai/wp-content/uploads/2024/09/lenovo-cloudfi.png',
    },
    {
      title: 'nosotrosPage.recognitionCards.5.title',
      description: 'nosotrosPage.recognitionCards.5.description',
      image: 'https://cloudfi.ai/wp-content/uploads/2024/09/adobe-cloudfi.png',
    },
    {
      title: 'nosotrosPage.recognitionCards.6.title',
      description: 'nosotrosPage.recognitionCards.6.description',
      image: 'assets/images/barco.png',
    },
  ];

  currentSlideIndex = 0;

}
