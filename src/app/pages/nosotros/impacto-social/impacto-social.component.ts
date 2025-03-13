import { Component } from '@angular/core';
import { HeroHeaderComponent } from '../../../components/hero-header/hero-header.component';
import { SdgGoalsComponent } from '../../../components/sdg-goals/sdg-goals.component';
import { AccomplishmentsSliderComponent } from '../../../components/slider-impact/slider-impact.component';
import { WeimpactComponent } from '../../../components/weimpact/weimpact.component';
import { SimpleSectionComponent } from '../../../components/simple-section/simple-section.component';
import { FooterComponent } from '../../../components/footer/footer.component';
import { AlianzasComponent } from '../../alianzas/alianzas.component';
import { AlliancesComponent } from '../../../components/aliances/aliances.component';

@Component({
  selector: 'app-impacto-social',
  imports: [
    HeroHeaderComponent,
    SdgGoalsComponent,
    AccomplishmentsSliderComponent,
    WeimpactComponent,
    SimpleSectionComponent,
    AlliancesComponent,
    FooterComponent,
  ],
  template: `
    <app-hero-header
      class="mt-20"
      title="The Journey to Positive Change Through Organizational Development"
      backgroundImage="https://cdn.prod.website-files.com/636a549426aa8438b3b45fa8/63b73c4f82ae9d1cb4fe2e46_IMG_9916.JPG"
    >
    </app-hero-header>
    <app-simple-section [icon]="true"></app-simple-section>
    <!-- cajas izquierda y derecha -->
    <section class="relative py-16 px-4 overflow-hidden">
      <div class="max-w-6xl mx-auto space-y-16">
        <!-- SECCIÓN 1 -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <!-- Columna Izquierda: Texto -->
          <div>
            <h2
              class="text-2xl md:text-3xl font-extrabold uppercase text-orange-500 mb-4"
            >
              Overcoming Societal Challenges in a Place of Incredible
              Opportunities
            </h2>
            <p class="text-gray-500 leading-relaxed">
              Our company was founded in Colombia, a country striving for
              social, economic, and educational growth. Harmony for a better
              future and achieving its true potential. Hunger, poverty, and
              historical inequality are just some of the issues we face today.
              That’s why we are going beyond! Beyond offering career
              opportunities, we sincerely believe in uplifting communities
              worldwide.
            </p>
          </div>

          <!-- Columna Derecha: Forma de color + Imagen superpuesta -->
          <div class="relative w-full flex justify-center">
            <!-- Forma de color (SVG) detrás -->
            <!-- <img
              src=""
              alt="Colorful Shape"
              class="absolute w-64 h-64 md:w-72 md:h-72 object-contain z-0"
            /> -->
            <!-- Imagen principal encima de la forma -->
            <img
              src="https://cdn.prod.website-files.com/636a549426aa8438b3b45fa8/64d5361d833e3f5cb600c0b4_Overcoming.png"
              alt="Helping Kids"
              class="relative z-10 w-64 h-auto md:w-150 rounded-md shadow-mdg"
            />
          </div>
        </div>

        <!-- SECCIÓN 2 -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <!-- Columna Izquierda: Forma de color + Imagen (en pantallas grandes se muestra primero) -->
          <div class="relative w-full flex justify-center order-2 md:order-1">
            <img
              src="https://cdn.prod.website-files.com/636a549426aa8438b3b45fa8/64d5361ded82aea1b499aa55_Solution.png"
              alt="Creating Shared Value"
              class="relative z-10 w-64 h-auto md:w-150 rounded-md"
            />
          </div>

          <!-- Columna Derecha: Texto (en pantallas grandes se muestra a la derecha) -->
          <div class="order-1 md:order-2">
            <h2
              class="text-2xl md:text-3xl font-extrabold uppercase text-purple-700 mb-4"
            >
              The Solution: Creating Shared Value
            </h2>
            <p class="text-gray-500 leading-relaxed">
              By embracing a Shared Value approach, we strive to create real
              value for our company, customers, and the world. We’re ensuring
              our endeavors, resources, and influence boost the revitalization
              of society, and each day we bring hope to those in need.
            </p>
            <p class="text-gray-500 leading-relaxed mt-4">
              Creating social impact means fostering real effort. At Lean
              Solutions, we are committed to changing lives by focusing on the
              United Nations’ Sustainable Development Objectives.
            </p>
          </div>
        </div>
      </div>
    </section>
    <app-sdg-goals></app-sdg-goals>
    <section class="py-16 px-4 text-center">
      <div class="max-w-6xl mx-auto">
        <!-- Título principal -->
        <h2
          class="text-2xl md:text-5xl font-extrabold uppercase text-orange-500 mb-2"
        >
          HOW DO WE DO IT
        </h2>
        <!-- Descripción debajo del título -->
        <p class="text-gray-700 text-md w-full mb-8 text-center py-4">
          <span class="max-w-[350px] block mx-auto">
            Through our Organizational Development Department, which is made up
            of two divisions: Corporate Shared Value and Organizational Culture.
          </span>
        </p>

        <!-- Segundo encabezado -->
        <h3
          class="text-xl md:text-3xl font-ligth uppercase text-purple-700 mb-6"
        >
          STEPS LEADING TO CHANGE
        </h3>

        <!-- Grilla de 8 pasos -->
        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center"
        >
          <!-- Paso 1 -->
          <div
            class="bg-white rounded-lg shadow-lg p-4 flex items-center space-x-3 w-full max-w-sm"
          >
            <!-- Ícono con burbuja (opcional) -->
            <div class="relative w-10 h-10">
              <!-- Burbuja detrás (opcional) -->
              <img
                src="assets/shapes/purple-bubble.svg"
                alt=""
                class="absolute inset-0 w-full h-full object-contain"
              />
              <!-- Ícono principal -->
              <img
                src="assets/icons/discover.png"
                alt="Discover Key Social Issues"
                class="relative w-6 h-6 m-auto"
              />
            </div>
            <!-- Texto del paso -->
            <span class="text-gray-800 font-semibold"
              >Discover Key Social Issues</span
            >
          </div>

          <!-- Paso 2 -->
          <div
            class="bg-white rounded-lg shadow-lg p-4 flex items-center space-x-3 w-full max-w-sm"
          >
            <div class="relative w-10 h-10">
              <img
                src="assets/shapes/purple-bubble.svg"
                alt=""
                class="absolute inset-0 w-full h-full object-contain"
              />
              <img
                src="assets/icons/goals.png"
                alt="Set Clear Goals"
                class="relative w-6 h-6 m-auto"
              />
            </div>
            <span class="text-gray-800 font-semibold">Set Clear Goals</span>
          </div>

          <!-- Paso 3 -->
          <div
            class="bg-white rounded-lg shadow-lg p-4 flex items-center space-x-3 w-full max-w-sm"
          >
            <div class="relative w-10 h-10">
              <img
                src="assets/shapes/purple-bubble.svg"
                alt=""
                class="absolute inset-0 w-full h-full object-contain"
              />
              <img
                src="assets/icons/partner.png"
                alt="Partner with Nonprofits"
                class="relative w-6 h-6 m-auto"
              />
            </div>
            <span class="text-gray-800 font-semibold"
              >Partner with Nonprofits</span
            >
          </div>

          <!-- Paso 4 -->
          <div
            class="bg-white rounded-lg shadow-lg p-4 flex items-center space-x-3 w-full max-w-sm"
          >
            <div class="relative w-10 h-10">
              <img
                src="assets/shapes/purple-bubble.svg"
                alt=""
                class="absolute inset-0 w-full h-full object-contain"
              />
              <img
                src="assets/icons/engage.png"
                alt="Engage Employees"
                class="relative w-6 h-6 m-auto"
              />
            </div>
            <span class="text-gray-800 font-semibold">Engage Employees</span>
          </div>

          <!-- Paso 5 -->
          <div
            class="bg-white rounded-lg shadow-lg p-4 flex items-center space-x-3 w-full max-w-sm"
          >
            <div class="relative w-10 h-10">
              <img
                src="assets/shapes/purple-bubble.svg"
                alt=""
                class="absolute inset-0 w-full h-full object-contain"
              />
              <img
                src="assets/icons/sustainability.png"
                alt="Embrace Sustainability"
                class="relative w-6 h-6 m-auto"
              />
            </div>
            <span class="text-gray-800 font-semibold"
              >Embrace Sustainability</span
            >
          </div>

          <!-- Paso 6 -->
          <div
            class="bg-white rounded-lg shadow-lg p-4 flex items-center space-x-3 w-full max-w-sm"
          >
            <div class="relative w-10 h-10">
              <img
                src="assets/shapes/purple-bubble.svg"
                alt=""
                class="absolute inset-0 w-full h-full object-contain"
              />
              <img
                src="assets/icons/measure.png"
                alt="Measure & Report"
                class="relative w-6 h-6 m-auto"
              />
            </div>
            <span class="text-gray-800 font-semibold"
              >Measure &amp; Report</span
            >
          </div>

          <!-- Paso 7 -->
          <div
            class="bg-white rounded-lg shadow-lg p-4 flex items-center space-x-3 w-full max-w-sm"
          >
            <div class="relative w-10 h-10">
              <img
                src="assets/shapes/purple-bubble.svg"
                alt=""
                class="absolute inset-0 w-full h-full object-contain"
              />
              <img
                src="assets/icons/reach.png"
                alt="Reach Out to Communities"
                class="relative w-6 h-6 m-auto"
              />
            </div>
            <span class="text-gray-800 font-semibold"
              >Reach Out to Communities</span
            >
          </div>

          <!-- Paso 8 -->
          <div
            class="bg-white rounded-lg shadow-lg p-4 flex items-center space-x-3 w-full max-w-sm"
          >
            <div class="relative w-10 h-10">
              <img
                src="assets/shapes/purple-bubble.svg"
                alt=""
                class="absolute inset-0 w-full h-full object-contain"
              />
              <img
                src="assets/icons/advocate.png"
                alt="Advocate & Raise Awareness"
                class="relative w-6 h-6 m-auto"
              />
            </div>
            <span class="text-gray-800 font-semibold"
              >Advocate &amp; Raise Awareness</span
            >
          </div>
        </div>
      </div>
    </section>
    <app-weimpact></app-weimpact>
    <app-slider-impact></app-slider-impact>
    <app-simple-section></app-simple-section>
    <app-aliances></app-aliances>
    <app-footer></app-footer>
  `,
  styleUrl: './impacto-social.component.css',
})
export class ImpactoSocialComponent {}
