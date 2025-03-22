import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../components/footer/footer.component';
import { StatsComponent } from '../../components/stats/stats.component';
@Component({
  imports: [CommonModule, FooterComponent, StatsComponent],
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
            Workforce Optimization Solutions For Your Business
          </h2>
          <p class="text-lg text-gray-700">
            Leverage our global talent and generate outstanding business
            results.
          </p>
        </div>

        <!-- Columna Derecha: Imagen con forma y trazo curvo -->
        <div class="flex justify-center p-0 overflow-hidden">
          <svg
            class="drop-shadow-xl"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <!-- Definición de recursos -->
            <defs>
              <!-- 1. Definir el patrón que contendrá la imagen -->
              <pattern
                id="imgpattern"
                patternUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <!-- La imagen se ajusta al contenedor del patrón -->
                <image
                  xlink:href="https://images.unsplash.com/photo-1491911923017-19f90d8d7f83?q=80&w=1887&auto=format&fit=crop"
                  width="80"
                  height="80"
                  preserveAspectRatio="xMidYMid slice"
                />
              </pattern>
            </defs>

            <!-- 2. Usar la forma irregular (tu path) y rellenarlo con el patrón de la imagen -->
            <path
              fill="url(#imgpattern)"
              d="M21.6,-24.3C28.6,-20,35.1,-13.6,35.8,-6.7C36.5,0.2,31.4,7.7,26.6,14.8C21.8,21.9,17.3,28.6,10.8,31.8C4.4,35,-4.1,34.8,-11.8,32.1C-19.5,29.5,-26.4,24.4,-30.3,17.5C-34.1,10.7,-34.9,2.2,-33.5,-5.9C-32,-14,-28.3,-21.7,-22.4,-26.2C-16.4,-30.6,-8.2,-31.9,-0.4,-31.4C7.3,-30.9,14.7,-28.6,21.6,-24.3Z"
              transform="translate(50 50) scale(1.4)"
              stroke-width="0"
            />
          </svg>
        </div>
      </div>
    </section>

    <!-- simple section -->
    <section class="py-16 px-4 text-center">
      <div class="max-w-4xl mx-auto">
        <!-- Título grande -->
        <h2
          class="text-2xl md:text-4xl font-extrabold text-purple-700 uppercase mb-4"
        >
          WORKFORCE SOLUTIONS FOCUSED ON SEAMLESS SCALABILITY
        </h2>
        <!-- Descripción -->
        <p class="text-gray-700 text-lg mb-6">
          We are experts in workforce optimization, established in 2012, with
          operations in strategic cities in Colombia, Guatemala, Mexico, and the
          Philippines. Our service offering includes back-office support,
          technology, marketing, sales, customer service, all in one place.
        </p>
        <!-- Botón principal -->
        <button
          class="bg-purple-700 hover:bg-purple-800 text-white px-6 py-3 rounded-md shadow-md transition-colors"
        >
          GET STARTED
        </button>
      </div>
    </section>

    <!-- tarjetas -->
    <section class="relative py-16 px-4 overflow-hidden">
      <!-- Fondo estampado -->
      <div
        class="absolute inset-0 bg-center bg-no-repeat bg-contain opacity-90"
        style="background: url('https://images.unsplash.com/photo-1626544827763-d516dce335e2?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');"
      ></div>

      <!-- Contenedor principal -->
      <div class="relative z-10 max-w-6xl mx-auto">
        <!-- Grid de 4 tarjetas -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <!-- Tarjeta 1: Our History -->
          <div class="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="assets/images/our-history.jpg"
              alt="Our History"
              class="w-full h-48 object-cover"
            />
            <div class="p-6">
              <h3 class="text-blue-600 font-bold text-lg mb-2">Our History</h3>
              <p class="text-gray-700 text-sm mb-4">
                Get to know how it all started and what led us to where we are
                today!
              </p>
              <a
                routerLink="/nosotros"
                fragment="historia"
                class="inline-flex items-center text-sm font-semibold text-purple-600 hover:text-purple-800"
              >
                Learn More
                <!-- Flecha -->
                <svg
                  class="ml-2 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 15.707a1 1 0 010-1.414L13.586 11H4a1 1
                   0 110-2h9.586L10.293 5.707a1 1 0
                   111.414-1.414l4 4a1 1 0
                   010 1.414l-4 4a1 1 0
                   01-1.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>

          <!-- Tarjeta 2: Our Management Team -->
          <div class="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="assets/images/our-management.jpg"
              alt="Our Management Team"
              class="w-full h-48 object-cover"
            />
            <div class="p-6">
              <h3 class="text-orange-600 font-bold text-lg mb-2">
                Our Management Team
              </h3>
              <p class="text-gray-700 text-sm mb-4">
                Meet the team that, with clear vision and dedication, has led
                LSG to success.
              </p>
              <a
                routerLink="/nosotros"
                fragment="management-team"
                class="inline-flex items-center text-sm font-semibold text-purple-600 hover:text-purple-800"
              >
                Learn More
                <svg
                  class="ml-2 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 15.707a1 1 0 010-1.414L13.586 11H4a1 1
                   0 110-2h9.586L10.293 5.707a1 1 0
                   111.414-1.414l4 4a1 1 0
                   010 1.414l-4 4a1 1 0
                   01-1.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>

          <!-- Tarjeta 3: Our Sales Team -->
          <div class="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="assets/images/our-sales.jpg"
              alt="Our Sales Team"
              class="w-full h-48 object-cover"
            />
            <div class="p-6">
              <h3 class="text-purple-600 font-bold text-lg mb-2">
                Our Sales Team
              </h3>
              <p class="text-gray-700 text-sm mb-4">
                Know more about the sales team that drives incredible business
                opportunities.
              </p>
              <a
                routerLink="/nosotros"
                fragment="sales-team"
                class="inline-flex items-center text-sm font-semibold text-purple-600 hover:text-purple-800"
              >
                Learn More
                <svg
                  class="ml-2 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 15.707a1 1 0 010-1.414L13.586 11H4a1 1
                   0 110-2h9.586L10.293 5.707a1 1 0
                   111.414-1.414l4 4a1 1 0
                   010 1.414l-4 4a1 1 0
                   01-1.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>

          <!-- Tarjeta 4: Social Impact -->
          <div class="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="assets/images/social-impact.jpg"
              alt="Social Impact"
              class="w-full h-48 object-cover"
            />
            <div class="p-6">
              <h3 class="text-pink-600 font-bold text-lg mb-2">
                Social Impact
              </h3>
              <p class="text-gray-700 text-sm mb-4">
                We are focused on positively impacting the lives of those who
                need it the most.
              </p>
              <a
                routerLink="/nosotros"
                fragment="impact"
                class="inline-flex items-center text-sm font-semibold text-purple-600 hover:text-purple-800"
              >
                Learn More
                <svg
                  class="ml-2 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 15.707a1 1 0 010-1.414L13.586 11H4a1 1
                   0 110-2h9.586L10.293 5.707a1 1 0
                   111.414-1.414l4 4a1 1 0
                   010 1.414l-4 4a1 1 0
                   01-1.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- slider  -->
    <section class="py-16 px-4">
      <div
        class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
      >
        <!-- Columna Izquierda: Título en outline -->
        <div class="text-left">
          <h2
            class="text-4xl text-center md:text-5xl font-extrabold uppercase tracking-wide mb-4 text-outline-purple"
          >
            Awards &amp; Recognitions
          </h2>
        </div>

        <!-- Columna Derecha: Slider de imágenes -->
        <div class="relative w-full overflow-hidden">
          <!-- Contenedor de diapositivas -->
          <div class="relative h-64">
            <!-- Cada imagen se posiciona absoluta y se desplaza con translateX -->
            <div
              *ngFor="let award of awards; let i = index"
              class="absolute top-0 left-0 w-full h-full transition-transform duration-700 ease-in-out"
              [ngStyle]="{
                transform: 'translateX(' + (i - currentSlideIndex) * 100 + '%)'
              }"
            >
              <img
                [src]="award.src"
                [alt]="award.alt"
                class="w-full h-full object-contain"
              />
            </div>
          </div>

          <!-- Flecha izquierda -->
          <button
            (click)="prevSlide()"
            class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-gray-700
                   p-2 rounded-full shadow hover:bg-gray-100 transition-colors"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fill-rule="evenodd"
                d="M12.293 15.707a1 1 0 010-1.414L15.586
                   11H4a1 1 0 110-2h11.586l-3.293-3.293a1
                   1 0 011.414-1.414l5 5a1 1 0
                   010 1.414l-5 5a1 1 0
                   01-1.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>

          <!-- Flecha derecha -->
          <button
            (click)="nextSlide()"
            class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-gray-700
                   p-2 rounded-full shadow hover:bg-gray-100 transition-colors"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fill-rule="evenodd"
                d="M7.707 14.293a1 1 0
                   010-1.414L10.586 11H4a1 1 0
                   110-2h6.586l-2.879-2.879a1
                   1 0 111.414-1.414l5
                   5a1 1 0 010 1.414l-5
                   5a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </section>

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
            We are a Colombian American company committed to providing remote
            operational support services (nearshoring) to U.S.-based companies
            within various industries. Services that are supported by efficient
            communication systems, competent and experienced work teams, and
            established processes, allowing continuity and operational
            excellence for our clients, as well as valuable career opportunities
            for people worldwide.
          </p>

          <h2 class="text-2xl md:text-3xl font-extrabold uppercase mb-4">
            Vision
          </h2>
          <p>
            By 2025, we will be leaders at the National level in the nearshoring
            service model, through innovative technology and the implementation
            of standardized processes and lessons learned that ensure quality
            and customer loyalty.
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

    <section class="py-16 px-4 text-center">
      <div class="max-w-6xl mx-auto">
        <!-- Título -->
        <h2
          class="text-2xl md:text-5xl font-extrabold text-gray-800 uppercase mb-12"
        >
          OUR FULL SERVICE SOLUTIONS
        </h2>

        <!-- Grid de 5 elementos -->
        <div
          class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 justify-items-center text-xl"
        >
          <!-- 1. Operations -->
          <div class="flex justify-center items-center flex-col">
            <div
              class="relative w-34 rounded-3xl h-24 transform hover:scale-110 transition-transform"
            >
              <!-- Forma de color (burbujas) -->
              <!-- <img
                src="https://cdn.prod.website-files.com/636a549426aa8438b3b45fa8/6376496707ceb140a5953b94_about-lsg-bg-4.svg"
                alt="Operations shape"
                class="absolute inset-0 w-full h-full"
              /> -->
              <!-- Ícono gratis de Flaticon (ejemplo) -->
              <img
                src="/assets/icons/hardware.png"
                alt="Operations Icon"
                class="absolute inset-0 m-auto w-20 h-20"
              />
            </div>
            <p class="mt-2 text-blue-700 font-bold">
              Hardware Provisioning & IT Asset Management
            </p>
          </div>

          <!-- 2. Tech -->
          <div class="flex justify-center items-center flex-col">
            <div
              class="relative w-24 h-24 transform hover:scale-110 transition-transform"
            >
              <!-- <img
                src="https://cdn.prod.website-files.com/636a549426aa8438b3b45fa8/63764967a4528500f5f04397_about-lsg-bg-2.svg"
                alt="Tech shape"
                class="absolute inset-0 w-full h-full"
              /> -->
              <img
                src="/assets/icons/software.png"
                alt="Tech Icon"
                class="absolute inset-0 m-auto w-20 h-20"
              />
            </div>
            <p class="mt-2 text-orange-600 font-bold">
              Enterprise IT & Technology Projects
            </p>
          </div>

          <!-- 3. Marketing -->
          <div class="flex justify-center items-center flex-col">
            <div
              class="relative w-24 h-24 transform hover:scale-110 transition-transform"
            >
              <!-- <img
                src="https://cdn.prod.website-files.com/636a549426aa8438b3b45fa8/637649676bacf339ee53482e_about-lsg-bg-3.svg"
                alt="Marketing shape"
                class="absolute inset-0 w-full h-full"
              /> -->
              <img
                src="/assets/icons/nube.png"
                alt="Marketing Icon"
                class="absolute inset-0 m-auto w-20 h-20"
              />
            </div>
            <p class="mt-2 text-green-500 font-bold">
              Software as a Service (SaaS)
            </p>
          </div>

          <!-- 4. BPO -->
          <div class="flex justify-center items-center flex-col">
            <div
              class="relative w-24 h-24 transform hover:scale-110 transition-transform"
            >
              <!-- <img
                src="https://cdn.prod.website-files.com/636a549426aa8438b3b45fa8/63764967a45285d2b5f04396_about-lsg-bg-1.svg"
                alt="BPO shape"
                class="absolute inset-0 w-full h-full"
              /> -->
              <img
                src="assets/icons/mesa.png"
                alt="BPO Icon"
                class="absolute inset-0 m-auto w-20 h-20"
              />
            </div>
            <p class="mt-2 text-pink-500 font-bold">
              Help Desk & IT Support Services
            </p>
          </div>

          <!-- 5. Sales -->
          <div class="flex justify-center items-center flex-col">
            <div
              class="relative w-24 h-24 transform hover:scale-110 transition-transform"
            >
              <!-- <img
                src="https://cdn.prod.website-files.com/636a549426aa8438b3b45fa8/637649673a162c300e4c4887_about-lsg-bg-6.svg"
                alt="Sales shape"
                class="absolute inset-0 w-full h-full"
              /> -->
              <img
                src="assets/icons/tech.png"
                alt="Sales Icon"
                class="absolute inset-0 m-auto w-20 h-20"
              />
            </div>
            <p class="mt-2 text-purple-600 font-bold">
              Cloud & Cybersecurity Solutions
            </p>
          </div>
        </div>
      </div>
    </section>

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

      .img-clip {
        clip-path: polygon(
          20% 0%,
          100% 0%,
          100% 80%,
          80% 100%,
          0% 100%,
          0% 20%
        );
      }
    `,
  ],
})
export class NosotrosComponent {
  // Array de premios/reconocimientos
  awards = [
    {
      src: 'logo.png',
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
}
