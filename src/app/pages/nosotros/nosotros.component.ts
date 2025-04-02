import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../components/footer/footer.component';
import { StatsComponent } from '../../components/stats/stats.component';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SimpleCtaComponent } from '../../components/inicio/simple-cta/simple-cta.component';
import { SimpleTitleSectionComponent } from '../../components/inicio/simple-title-section/simple-title-section.component';
import { RetailBenefitsComponent } from "../../components/industries/retail-benefits/retail-benefits.component";
import { SliderIndustriesComponent } from "../../components/industries/slider-industries/slider-industries.component";
import { CategoriesInicioComponent } from "../../components/inicio/categories-inicio/categories-inicio.component";

@Component({
  imports: [
    CommonModule,
    FooterComponent,
    StatsComponent,
    FontAwesomeModule,
    SimpleCtaComponent,
    SimpleTitleSectionComponent,
    RetailBenefitsComponent,
    SliderIndustriesComponent,
    CategoriesInicioComponent
],
  selector: 'app-nosotros',
  standalone: true,
  template: `
    <section class="mt-20">
      <div
        class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8"
      >
        <!-- Columna Izquierda: Título y Descripción -->
        <div class="text-left">
          <h2
            class="text-3xl md:text-5xl font-extrabold text-purple-700 uppercase mb-4"
          >
          Advance Technology Projects SAS
          </h2>
          <p class="text-lg text-gray-700">
           was founded with a singular mission: to provide a white-glove, red-carpet IT service tailored for Multinationals, Fortune 500 companies, and large enterprises that demand excellence in technology solutions. Our journey began when we recognized the growing need for an IT partner that goes beyond traditional support—a company that understands the complexities of enterprise technology and delivers personalized, high-touch service.
          With years of experience serving global organizations, we built a team of passionate technology enthusiasts and IT geeks dedicated to ensuring seamless technology operations. From hardware provisioning to cloud security and AI-powered automation, our specialists leverage cutting-edge innovations to optimize, secure, and scale enterprise IT infrastructures. Our commitment to excellence, reliability, and customer-centric solutions has positioned us as a trusted partner in the technology space
          </p>
        </div>

        <!-- Columna Derecha: Imagen con forma y trazo curvo -->
        <div class="flex justify-center h-120  overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1491911923017-19f90d8d7f83?q=80&w=1887&auto=format&fit=crop"
            class=""
            alt=""
          />
        </div>
      </div>
    </section>

    <!-- simple section -->
    <!-- <section class="py-16 px-4 text-center">
      <div class="max-w-4xl mx-auto">
        <h2
          class="text-2xl md:text-4xl font-extrabold text-purple-700 uppercase mb-4"
        >
          WORKFORCE SOLUTIONS FOCUSED ON SEAMLESS SCALABILITY
        </h2>
        <p class="text-gray-700 text-lg mb-6">
          We are experts in workforce optimization, established in 2012, with
          operations in strategic cities in Colombia, Guatemala, Mexico, and the
          Philippines. Our service offering includes back-office support,
          technology, marketing, sales, customer service, all in one place.
        </p>
        <button
          class="bg-purple-700 hover:bg-purple-800 text-white px-6 py-3 rounded-md shadow-md transition-colors"
        >
          GET STARTED
        </button>
      </div>
    </section>  -->

    <!-- tarjetas -->


    <app-simple-title-section
      title="Advance Technologies is a certified value added reseller of the TOP IT brands in the industry catering to U.S. and Canadian companies with remote teams in Latin America. From hardware to software, we provide end-to-end solutions tailored to your needs, with all the trust and reliability of top brands, including Microsoft Autopilot for seamless device setup."
    ></app-simple-title-section>

    <!-- slider  -->
     <app-slider-industries [cards]="cards"></app-slider-industries>

    <!-- mision and vision -->
    <section
      class="relative py-16 px-4 bg-purple-500 text-white overflow-hidden"
      style="background: url('https://images.unsplash.com/photo-1626544827763-d516dce335e2?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');"
    >
      <div
        class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center"
      >
        <!-- Columna Izquierda: Misión y Visión -->
        <div>
          <h2 class="text-2xl md:text-3xl font-extrabold uppercase mb-4">
            Mission
          </h2>
          <p class="mb-8">
            Powering Businesses with Seamless IT & Remote Support We are a
            Colombian-American company dedicated to optimizing IT operations and
            remote workforce solutions (nearshoring) for U.S.-based companies.
            We provide top-tier hardware, software, and IT services, backed by:
          </p>

          <div>
            <p>
              <fa-icon [icon]="faCheck"></fa-icon>Robust communication systems
            </p>
            <p>
              <fa-icon [icon]="faCheck"></fa-icon> Expert and highly trained
              teams
            </p>
            <p>
              <fa-icon [icon]="faCheck"></fa-icon> Proven processes that drive
              efficiency
            </p>
            <br />
          </div>
          <p class="mb-8">
            Our mission is simple: keep businesses running smoothly, ensuring
            continuity, security, and operational excellence while also creating
            valuable career opportunities across Latin America.
          </p>

          <h2 class="text-2xl md:text-3xl font-extrabold uppercase mb-4">
            Vision
          </h2>
          <p>
            Leading the Future of Nearshore IT Solutions By 2025, we aim to be
            the national leader in nearshoring IT services, driven by:
            Cutting-edge technology that transforms operations Standardized
            processes that guarantee quality Strong client relationships built
            on trust and reliability We don’t just offer IT solutions—we build
            long-term partnerships, helping companies expand, optimize, and
            future-proof their technology operations in Latin America and
            beyond. Let’s build the future of IT together!
          </p>
        </div>

        <!-- Columna Derecha: Imagen con formas de colores detrás -->
        <div class="w-100 h-auto flex justify-center">
          <!-- Forma de colores detrás (bg1-right.svg) -->
          <!-- <img
            src=""
            alt="Colorful Shapes"
            class="absolute top-0 right-0 h-auto z-0 object-cover"
            style="background-url: https://images.unsplash.com/photo-1626544827763-d516dce335e2?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          /> -->

          <!-- Imagen principal (edificio, equipo, etc.) -->
          <img
            src="https://images.pexels.com/photos/302831/pexels-photo-302831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Company Building"
            class="relative z-10 w-full max-w-sm md:max-w-md h-auto"
          />
        </div>
      </div>
    </section>

    <app-stats></app-stats>

    <h2
      class="text-2xl text-center md:text-5xl font-extrabold text-gray-800 uppercase mb-12"
    >
      OUR FULL SERVICE SOLUTIONS
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
  //ncosn

  faCheck = faCheck;
  // Array de premios/reconocimientos
  awards = [
    {
      src: 'https://cloudfi.ai/wp-content/uploads/2024/09/aws-cloudfi-1.png',
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


  cards =  [
    {
      title: 'Reconocimiento 1',
      description: 'We live in an ISO 9001 culture where standardized processes and procedures help maintain an organized business structure.',
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
    {
      title: 'Reconocimiento 4',
      description: 'lorem',
      image: 'https://cloudfi.ai/wp-content/uploads/2024/09/lenovo-cloudfi.png'
    },
    {
      title: 'Reconocimiento 4',
      description: 'lorem',
      image: 'https://cloudfi.ai/wp-content/uploads/2024/09/adobe-cloudfi.png'
    },
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

  //   <section class="py-16 px-4">
  //   <div
  //     class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
  //   >
  //     <!-- Columna Izquierda: Título en outline
  //     <div class="text-left">
  //       <h2
  //         class="text-4xl text-center md:text-5xl font-extrabold uppercase tracking-wide mb-4 text-outline-purple"
  //       >

  //       </h2>
  //     </div>

  //     <!-- Columna Derecha: Slider de imágenes -->
  //     <div class="relative w-full overflow-hidden">
  //       <!-- Contenedor de diapositivas -->
  //       <div class="relative h-64">
  //         <!-- Cada imagen se posiciona absoluta y se desplaza con translateX -->
  //         <div
  //           *ngFor="let award of awards; let i = index"
  //           class="absolute top-0 left-0 w-full h-full transition-transform duration-700 ease-in-out"
  //           [ngStyle]="{
  //             transform: 'translateX(' + (i - currentSlideIndex) * 100 + '%)'
  //           }"
  //         >
  //           <img
  //             [src]="award.src"
  //             [alt]="award.alt"
  //             class="w-full h-full object-contain"
  //           />
  //         </div>
  //       </div>

  //       <!-- Flecha izquierda -->
  //       <button
  //         (click)="prevSlide()"
  //         class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-gray-700
  //                p-2 rounded-full shadow hover:bg-gray-100 transition-colors"
  //       >
  //         <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
  //           <path
  //             fill-rule="evenodd"
  //             d="M12.293 15.707a1 1 0 010-1.414L15.586
  //                11H4a1 1 0 110-2h11.586l-3.293-3.293a1
  //                1 0 011.414-1.414l5 5a1 1 0
  //                010 1.414l-5 5a1 1 0
  //                01-1.414 0z"
  //             clip-rule="evenodd"
  //           ></path>
  //         </svg>
  //       </button>

  //       <!-- Flecha derecha -->
  //       <button
  //         (click)="nextSlide()"
  //         class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-gray-700
  //                p-2 rounded-full shadow hover:bg-gray-100 transition-colors"
  //       >
  //         <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
  //           <path
  //             fill-rule="evenodd"
  //             d="M7.707 14.293a1 1 0
  //                010-1.414L10.586 11H4a1 1 0
  //                110-2h6.586l-2.879-2.879a1
  //                1 0 111.414-1.414l5
  //                5a1 1 0 010 1.414l-5
  //                5a1 1 0 01-1.414 0z"
  //             clip-rule="evenodd"
  //           ></path>
  //         </svg>
  //       </button>
  //     </div>
  //   </div>
  // </section>
}
