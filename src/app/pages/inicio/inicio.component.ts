import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, FooterComponent],
template: `
    <!-- Contenedor principal para separar el contenido del navbar si está fixed -->
    <div class="pt-18 md:pt-20">
      <!-- SLIDER (fondo e imágenes) -->
      <div class="relative w-full min-h-screen overflow-hidden bg-gray-100">
        <!-- Diapositivas -->

        <div
          *ngFor="let slide of slides; let i = index"
          class="absolute top-0 left-0 w-full h-full transition-opacity duration-700 ease-in-out"
          [ngStyle]="{ opacity: i === currentSlideIndex ? 1 : 0 }"
        >
          <!-- Imagen de fondo -->
          <img
            [src]="slide.image"
            alt="Imagen de Slide"
            class="w-full h-full object-cover"
          />
          <!-- Texto superpuesto -->
          <div
            class="absolute bottom-1/2 left-18 p-8 text-white bg-opacity-40 max-w-5xl z-2"
          >
            <h2 class="text-3xl uppercase font-extrabold md:text-6xl mb-2">
              {{ slide.title }}
            </h2>
            <p class="text-md md:text-xl">
              {{ slide.subtitle }}
            </p>

            <div class="flex gap-2">
              <button
                class="p-2 mt-4  w-30 border-2 cursor-pointer border-purple-600 rounded-md"
              >
                Learn more
              </button>
              <button
                class="p-2 mt-4 w-30 rounded-md cursor-pointer bg-purple-600"
              >
                Start now
              </button>
            </div>
          </div>
        </div>

        <div
          class="absolute top-0 left-0 text-amber-50 bg-black opacity-50 w-full h-full z-1"
        >
          ramosdev
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

      <!-- NUEVA SECCIÓN: "BECOME AN EARLY ADOPTER OF AI" -->
      <div class="w-full bg-white py-16 px-4 text-center">
        <div class="max-w-4xl mx-auto">
          <h2
            class="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 text-purple-700 uppercase"
          >
            BECOME AN EARLY ADOPTER OF AI
          </h2>
          <p class="text-lg md:text-xl text-gray-700 mb-8">
            A key goal of Lean Solutions Group is to make our clients'
            experiences easier and more efficient in everything from recruiting
            to operations. That can mean continually upgrading client-facing
            technology platforms, but it can also come from effectively
            deploying AI solutions.
          </p>
          <button
            class="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-md shadow-md transition-all"
          >
            Learn More
          </button>
        </div>
      </div>

      <!-- NUEVA SECCIÓN: "What's Most Important" -->
      <div class="w-full bg-white py-16 px-4 text-center">
        <div
          class="max-w-4xl mx-auto shadow-[0px_0px_10px_1px_rgba(0,0,0,0.1)] px-6 py-12"
        >
          <span
            class="inline-block px-4 py-2 bg-orange-500 text-white font-bold rounded-full mb-4"
          >
            What's Most Important
          </span>
          <h3 class="text-2xl md:text-4xl font-bold mb-4 uppercase">
            MEETING CUSTOMER EXPECTATIONS FOR MORE
          </h3>
          <p class="text-gray-700 mb-4">
            Are you looking for the cost savings of a traditional BPO with the
            quality assurance of an in-house team? Lean Solutions Group is a
            staff augmentation company offering the expertise you need.
          </p>
          <p class="text-gray-700 mb-4">
            To accomplish more, we give you the leverage and talent your
            business needs through a proven nearshore/offshore model for
            establishing remote satellite offices in Latin America and the
            Philippines. Build mission-critical teams across key business
            functions in just 3–5 weeks with nearshore talent solutions.
          </p>
          <div class="text-orange-600 mb-8 font-bold text-xl">
            Visibility. Simplicity. Efficiency.
          </div>
          <button
            class="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-md shadow-md transition-all"
          >
            Get started
          </button>
        </div>
      </div>

      <h2
        class="outline-text text-center text-4xl text-gray-800 mb-12 md:text-5xl font-extrabold uppercase tracking-wide"
      >
        ADVANCE PROJECTS
      </h2>
      <!-- NUEVA SECCIÓN: ADVANCE PROJECTS (Estilo "Lean Solutions" con formas irregulares) -->
      <section class="relative w-full py-16 px-4 text-center overflow-hidden">
        <!-- Patrón de fondo en baja opacidad -->
        <!-- <div
          class="absolute inset-0 pointer-events-none bg-center bg-cover opacity-10"
          style="background-image: url('https://cdn.prod.website-files.com/636a549426aa8438b3b45fa8/6372587c9ba56f0e66ea0544_section-bg1.svg');"
        ></div> -->

        <img
          class="absolute inset-0 pointer-events-none bg-center bg-contain opacity-50"
          src="https://cdn.prod.website-files.com/636a549426aa8438b3b45fa8/6372587c9ba56f0e66ea0544_section-bg1.svg"
          alt="imagen de fondo grabado"
          srcset="
            https://cdn.prod.website-files.com/636a549426aa8438b3b45fa8/6372587c9ba56f0e66ea0544_section-bg1.svg
          "
        />

        <div class="max-w-6xl mx-auto relative z-10">
          <!-- Título -->

          <!-- Contenedor de las categorías -->
          <div
            class="grid grid-cols-1 sm:grid-cols-5 gap-6 sm:gap-8 items-center justify-items-center"
          >
            <!-- Operations -->
            <div class="flex flex-col items-center">
              <div
                class="relative w-32 h-32 transform hover:scale-110 transition-transform"
              >
                <!-- Forma irregular en azul -->
                <img
                  src="assets/images/shapes/shape-operations.svg"
                  alt="Operations Shape"
                  class="w-full h-full object-cover"
                />
                <!-- Ícono encima de la forma -->
                <img
                  src="assets/images/icons/icon-operations.svg"
                  alt="Operations Icon"
                  class="absolute inset-0 m-auto w-8 h-8"
                />
              </div>
              <p class="mt-4 text-blue-600 font-bold text-lg">Operations</p>
            </div>

            <!-- Tech -->
            <div class="flex flex-col items-center">
              <div
                class="relative w-32 h-32 transform hover:scale-110 transition-transform"
              >
                <img
                  src="assets/images/shapes/shape-tech.svg"
                  alt="Tech Shape"
                  class="w-full h-full object-cover"
                />
                <img
                  src="assets/images/icons/icon-tech.svg"
                  alt="Tech Icon"
                  class="absolute inset-0 m-auto w-8 h-8"
                />
              </div>
              <p class="mt-4 text-orange-500 font-bold text-lg">Tech</p>
            </div>

            <!-- Marketing -->
            <div class="flex flex-col items-center">
              <div
                class="relative w-32 h-32 transform hover:scale-110 transition-transform"
              >
                <img
                  src="assets/images/shapes/shape-marketing.svg"
                  alt="Marketing Shape"
                  class="w-full h-full object-cover"
                />
                <img
                  src="assets/images/icons/icon-marketing.svg"
                  alt="Marketing Icon"
                  class="absolute inset-0 m-auto w-8 h-8"
                />
              </div>
              <p class="mt-4 text-green-500 font-bold text-lg">Marketing</p>
            </div>

            <!-- BPO -->
            <div class="flex flex-col items-center">
              <div
                class="relative w-32 h-32 transform hover:scale-110 transition-transform"
              >
                <img
                  src="assets/images/shapes/shape-bpo.svg"
                  alt="BPO Shape"
                  class="w-full h-full object-cover"
                />
                <img
                  src="assets/images/icons/icon-bpo.svg"
                  alt="BPO Icon"
                  class="absolute inset-0 m-auto w-8 h-8"
                />
              </div>
              <p class="mt-4 text-red-400 font-bold text-lg">BPO</p>
            </div>

            <!-- Sales -->
            <div class="flex flex-col items-center">
              <div
                class="relative w-32 h-32 transform hover:scale-110 transition-transform"
              >
                <img
                  src="assets/images/shapes/shape-sales.svg"
                  alt="Sales Shape"
                  class="w-full h-full object-cover"
                />
                <img
                  src="assets/images/icons/icon-sales.svg"
                  alt="Sales Icon"
                  class="absolute inset-0 m-auto w-8 h-8"
                />
              </div>
              <p class="mt-4 text-purple-500 font-bold text-lg">Sales</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Sección Workforce Optimization Solutions -->
      <section class="py-16 px-4 text-center bg-white">
        <div class="max-w-5xl mx-auto">
          <!-- Título principal -->
          <h2
            class="text-3xl md:text-4xl font-bold uppercase tracking-wide mb-4 text-purple-700"
          >
            WORKFORCE OPTIMIZATION SOLUTIONS
          </h2>

          <!-- Texto descriptivo -->
          <p class="text-lg md:text-xl text-gray-700 mb-12">
            We've expanded our workforce service offering across borders,
            allowing you to work with top global talent.
          </p>

          <!-- Contenedor de mapas (4 columnas en pantallas medianas) -->
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
            <!-- Colombia -->
            <div class="flex flex-col items-center">
              <img
                src="https://cdn.prod.website-files.com/636a549426aa8438b3b45fa8/63cef73c0af34f1a9f7cc003_LeanSolutions_2023_AssetsColombia_Map.svg"
                alt="Colombia"
                class="h-32 w-auto mb-2"
              />
              <span class="text-gray-900 font-semibold">Colombia</span>
            </div>

            <!-- Philippines -->
            <div class="flex flex-col items-center">
              <img
                src="https://cdn.prod.website-files.com/636a549426aa8438b3b45fa8/63a500d2ee23042f664d270c_Element_Philipines_Map.png"
                alt="Philippines"
                class="h-32 w-auto mb-2"
              />
              <span class="text-gray-900 font-semibold">Philippines</span>
            </div>

            <!-- Mexico -->
            <div class="flex flex-col items-center">
              <img
                src="https://cdn.prod.website-files.com/636a549426aa8438b3b45fa8/63cef73d4e8dcad40b688820_LeanSolutions_2023_AssetsMexico_Map.svg"
                alt="Mexico"
                class="h-32 w-auto mb-2"
              />
              <span class="text-gray-900 font-semibold">Mexico</span>
            </div>
          </div>

          <!-- Texto grande en rojo/fucsia -->
          <h3
            class="text-2xl md:text-3xl font-extrabold uppercase text-orange-500 mb-6"
          >
            RIGHT TALENT. RIGHT CULTURE. RIGHT PRICE.
          </h3>

          <!-- Botón principal -->
          <button
            class="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-md shadow-md transition-all"
          >
            OUR OFFICES
          </button>
        </div>
      </section>

      <section class="text-center bg-linear-to-b from-purple-500 to-purple-800">
        <img
          src="https://cdn.prod.website-files.com/636a549426aa8438b3b45fa8/63892c7c3562b3babf615793_white-bg-ornament.svg"
          alt=""
          srcset="
            https://cdn.prod.website-files.com/636a549426aa8438b3b45fa8/63892c7c3562b3babf615793_white-bg-ornament.svg
          "
        />

        <!-- Título principal -->
        <h2
          class="text-3xl md:text-5xl font-bold uppercase tracking-wide mb-4 text-white"
        >
          WORKFORCE staffing
        </h2>

        <!-- Texto descriptivo -->
        <p class="text-md md:text-md pb-4 text-white text-center px-100 mb-12">
          What does your business need to succeed? Is it nearshoring?
          Offshoring? We give you globalshoring! With our vast workforce
          augmentation options, we align the people, processes, and technology
          you need to maximize customer experiences while minimizing operational
          costs. At Lean Solutions Group, we work closely with businesses to
          ensure we understand our clients’ goals and select the ideal nearshore
          employees for their satellite locations in Latin America and the
          Philippines. During the hiring process, we take time to carefully
          align each employee with the businesses we work with—you'll have the
          best staff at your satellite locations.
          <br />
          <br />
          CONTACT US <br />Contact us today to set up an appointment with our
          nearshore staff augmentation company. You’ll reach our team of
          professionals by sending us a message or calling us at (888) 323-995.
          Leverage the best with our staff augmentation services.
        </p>
      </section>

      <section
        class="py-16 px-4 bg-linear-to-t from-purple-500 to-purple-800 text-center"
      >
        <div class="max-w-6xl mx-auto">
          <!-- Título principal -->
          <h2
            class="text-3xl md:text-4xl font-extrabold uppercase text-white mb-8 tracking-wide"
          >
            EXPLORE THE LATEST WORKFORCE OPTIMIZATION INSIGHTS
          </h2>

          <!-- Grid de tarjetas -->
          <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
            <!-- Tarjeta 1 -->
            <div
              class="bg-white rounded-lg shadow-lg overflow-hidden relative text-left"
            >
              <!-- Imagen principal de la tarjeta -->
              <div class="relative">
                <img
                  src="assets/images/card1.jpg"
                  alt="Card 1 image"
                  class="w-full h-48 object-cover"
                />
                <!-- Avatar -->
                <div class="absolute -top-6 left-4 w-12 h-12 z-10">
                  <img
                    src="assets/avatars/avatar1.jpg"
                    alt="Author avatar"
                    class="w-12 h-12 object-cover rounded-full border-2 border-white"
                  />
                </div>
              </div>
              <!-- Contenido de texto -->
              <div class="p-6">
                <div class="text-xs text-gray-500 font-semibold mb-1">
                  Our Company
                </div>
                <h3 class="text-sm font-bold text-gray-800 mb-4">
                  AI, Anxiety, and the Productivity Paradox: How Lean Solutions
                  Bridges The Gap
                </h3>
                <!-- Enlace "Read More" con ícono de flecha -->
                <a
                  href="#"
                  class="inline-flex items-center text-sm font-semibold text-purple-600 hover:text-purple-800"
                >
                  Read More
                  <svg
                    class="ml-2 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 15.707a1 1 0 010-1.414L13.586 11H4a1 1 0
                   110-2h9.586L10.293 5.707a1 1 0
                   111.414-1.414l4 4a1 1 0
                   010 1.414l-4 4a1 1 0
                   01-1.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>

            <!-- Tarjeta 2 -->
            <div
              class="bg-white rounded-lg shadow-lg overflow-hidden relative text-left"
            >
              <div class="relative">
                <img
                  src="assets/images/card2.jpg"
                  alt="Card 2 image"
                  class="w-full h-48 object-cover"
                />
                <div class="absolute -top-6 left-4 w-12 h-12 z-10">
                  <img
                    src="assets/avatars/avatar2.jpg"
                    alt="Author avatar"
                    class="w-12 h-12 object-cover rounded-full border-2 border-white"
                  />
                </div>
              </div>
              <div class="p-6">
                <div class="text-xs text-gray-500 font-semibold mb-1">
                  Logistics
                </div>
                <h3 class="text-sm font-bold text-gray-800 mb-4">
                  5 Driving Forces Behind The Evolution Of The 3PL &amp;
                  Logistics Industry
                </h3>
                <a
                  href="#"
                  class="inline-flex items-center text-sm font-semibold text-purple-600 hover:text-purple-800"
                >
                  Read More
                  <svg
                    class="ml-2 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 15.707a1 1 0 010-1.414L13.586 11H4a1 1 0
                   110-2h9.586L10.293 5.707a1 1 0
                   111.414-1.414l4 4a1 1 0
                   010 1.414l-4 4a1 1 0
                   01-1.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>

            <!-- Tarjeta 3 -->
            <div
              class="bg-white rounded-lg shadow-lg overflow-hidden relative text-left"
            >
              <div class="relative">
                <img
                  src="assets/images/card3.jpg"
                  alt="Card 3 image"
                  class="w-full h-48 object-cover"
                />
                <div class="absolute -top-6 left-4 w-12 h-12 z-10">
                  <img
                    src="assets/avatars/avatar3.jpg"
                    alt="Author avatar"
                    class="w-12 h-12 object-cover rounded-full border-2 border-white"
                  />
                </div>
              </div>
              <div class="p-6">
                <div class="text-xs text-gray-500 font-semibold mb-1">
                  Workforce Optimization
                </div>
                <h3 class="text-sm font-bold text-gray-800 mb-4">
                  The Supply Chain &amp; 3PL Talent Crisis Of 2025
                </h3>
                <a
                  href="#"
                  class="inline-flex items-center text-sm font-semibold text-purple-600 hover:text-purple-800"
                >
                  Read More
                  <svg
                    class="ml-2 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 15.707a1 1 0 010-1.414L13.586 11H4a1 1 0
                   110-2h9.586L10.293 5.707a1 1 0
                   111.414-1.414l4 4a1 1 0
                   010 1.414l-4 4a1 1 0
                   01-1.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>

            <!-- Tarjeta 4 -->
            <div
              class="bg-white rounded-lg shadow-lg overflow-hidden relative text-left"
            >
              <div class="relative">
                <img
                  src="assets/images/card4.jpg"
                  alt="Card 4 image"
                  class="w-full h-48 object-cover"
                />
                <div class="absolute -top-6 left-4 w-12 h-12 z-10">
                  <img
                    src="assets/avatars/avatar4.jpg"
                    alt="Author avatar"
                    class="w-12 h-12 object-cover rounded-full border-2 border-white"
                  />
                </div>
              </div>
              <div class="p-6">
                <div class="text-xs text-gray-500 font-semibold mb-1">
                  Logistics
                </div>
                <h3 class="text-sm font-bold text-gray-800 mb-4">
                  From Recruitment To Retention: Building A Future-Ready
                  Workforce In Logistics
                </h3>
                <a
                  href="#"
                  class="inline-flex items-center text-sm font-semibold text-purple-600 hover:text-purple-800"
                >
                  Read More
                  <svg
                    class="ml-2 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 15.707a1 1 0 010-1.414L13.586 11H4a1 1 0
                   110-2h9.586L10.293 5.707a1 1 0
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

      <!-- Sección Workforce Optimization at a Global Scale -->
      <section class="py-16 px-4">
        <div
          class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
        >
          <!-- Columna Izquierda: Imagen -->
          <div class="flex justify-center">
            <!-- Reemplaza el src con la ruta de tu imagen -->
            <img
              src="https://cdn.prod.website-files.com/636a549426aa8438b3b45fa8/638f92ab6484d7e6b298989b_lsg-homepage-asset.png"
              alt="Workforce Optimization"
              class="max-w-full h-auto"
            />
          </div>

          <!-- Columna Derecha: Título y Lista de Beneficios -->
          <div class="text-left">
            <h2
              class="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-800 uppercase mb-6"
            >
              Workforce Optimization at a Global Scale
            </h2>
            <ul class="list-disc list-inside text-gray-700 space-y-2 mb-8">
              <li>Highly Skilled Professionals</li>
              <li>Visibility Through our Client Portal</li>
              <li>Co-managed with our QA Teams</li>
              <li>Dedicated Data Security</li>
              <li>Integrated with your Systems and SOPs</li>
              <li>Stop the Endless Recruitment Cycle</li>
              <li>Expand Seamlessly with a Global Talent Pool</li>
              <li>
                Save on Facilities Overhead, Recruiting, Training, and Employee
                Retention Costs
              </li>
            </ul>
          </div>
        </div>

        <!-- Texto Final Centrado -->
        <div class="max-w-3xl mx-auto mt-12 text-center">
          <h3
            class="text-2xl md:text-3xl font-bold text-purple-700 shadow-cc uppercase p-4"
          >
            Let us help you get the most out of your satellite office
          </h3>
        </div>
      </section>

      <section class="py-16 px-4">
        <div
          class="max-w-6xl mx-auto bg-gray-50 rounded-lg shadow-xs p-8 grid grid-cols-1 md:grid-cols-2 items-center gap-8"
        >
          <!-- Columna Izquierda: Texto -->
          <div>
            <!-- Etiqueta "Social Impact" -->
            <span
              class="inline-block bg-purple-100 text-purple-800 text-sm font-bold px-3 py-1 rounded-full mb-4"
            >
              Social Impact
            </span>

            <!-- Párrafo descriptivo -->
            <p class="text-lg text-gray-700 mb-6">
              We are committed to giving back! That's why we have created a
              Corporate Social Responsibility department to change the lives of
              people under complex circumstances. Want to know how we are
              helping?
            </p>

            <!-- Botón "Learn More!" -->
            <button
              class="bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-md shadow-md transition-colors"
            >
              Learn More!
            </button>
          </div>

          <!-- Columna Derecha: Imagen -->
          <div class="flex justify-center">
            <img
              src="https://cdn.prod.website-files.com/636a549426aa8438b3b45fa8/643562a472ffee96eec11946_social-impact-img.png"
              alt="Social Impact"
              class="max-w-full h-auto rounded-md"
            />
          </div>
        </div>
      </section>

      <section
        class="flex justify-center uppercase text-2xl md:text-3xl text center px-20"
      >
        <h1 class="max-w-180 text-purple-700 shadow-lg p-4 mb-8 font-extrabold">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus
          laborum ut repellendus, aliquid dolore nobis, atque.
        </h1>
      </section>
    </div>

    <app-footer></app-footer>

  `,
  styles: [
    `
      :host {
        display: block;
      }

      .outline-text {
        font-size: 5rem; /* Tamaño de ejemplo */
        font-weight: 900; /* Para trazo grueso */
        font-style: italic;
        color: transparent; /* Sin relleno */
        -webkit-text-stroke: 1px #4b3b92; /* Grosor y color del contorno (WebKit) */
        text-stroke: 1px #4b3b92; /* Para navegadores que lo soporten */
      }
    `,
  ],
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
