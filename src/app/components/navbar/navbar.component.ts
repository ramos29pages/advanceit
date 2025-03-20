import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faGlobe,
  faUser,
  faChevronDown,
  faTruck, // Icono para 'Operations'
  faLaptopCode, // Icono para 'Tech'
  faHeadset, // Icono para 'BPO'
  faChartLine, // Icono para 'Marketing'
  faHandshake, // Icono para 'Sales'
  faWarehouse, // Subitem 'Warehousing'
  faClipboard, // Subitem 'Back Office'
  faCode, // Subitem 'Software Development'
  faPhoneVolume, // Subitem 'Helpdesk'
  faChartPie, // Subitem 'Business Intelligence'
  faDatabase, // Subitem 'Data Science'
  faHandsHelping, // Subitem 'Customer Support'
  faUserTie, // Subitem 'Professional Services'
  faUsers, // Subitem 'Recruitment'
  faPalette, // Subitem 'Creative Professionals'
  faUserFriends, // Subitem 'Sales Dev Reps'
  faDollarSign, // Subitem 'Nuestro Equipo de Ventas'
  faClockRotateLeft,
  faNewspaper,
  faHeart,
  faShieldHalved,
  faStore,
  faIndustry,
  faFileLines,
  faCircleQuestion,
  faCalendarDays,
  faUserGear,
  faPlaneUp,
} from '@fortawesome/free-solid-svg-icons';
import { MobileMenuComponent } from './mobile-menu/mobile-menu.component';
// import { MobileMenuComponent } from './mobile-menu/mobile-menu.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    FontAwesomeModule,
    NgClass,
    MobileMenuComponent,
    NgIf,
  ],
  template: `
    <nav
      class="fixed top-0 left-0 w-full bg-white lg:text-sm py-4 px-6 flex justify-between items-center shadow-md z-50"
    >
      <!-- Logo -->
      <div class="flex items-center">
        <a routerLink="/">
          <img src="logo.png" alt="Advance Technology Projects" class="h-10" />
        </a>
      </div>

      <!-- Menú principal -->
      <div class="hidden lg:flex space-x-2">
        <!-- Bloque "About Us" -->
        <div class="relative group">
          <a
            routerLink="/nosotros"
            routerLinkActive="text-orange-500 font-bold"
            class="text-orange-500 font-bold hover:text-orange-600 flex justify-between gap-2 transition-colors p-4"
          >
            <span>About Us</span>
            <fa-icon [icon]="faChevronDown" size="sm"></fa-icon>
          </a>
          <div
            class="absolute left-0 mt-full w-60 bg-white shadow-[0px_0px_5px_1px_rgba(0,0,0,0.4)] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50 group-hover:block hidden"
          >
            <ul class="py-4">
              <!-- Ejemplo de ítems con íconos FontAwesome -->
              <li
                class="flex items-center space-x-3 px-4 py-4 hover:bg-purple-100 hover:cursor-pointer"
              >
                <fa-icon
                  [icon]="faClockRotateLeft"
                  class="text-gray-700"
                ></fa-icon>
                <a routerLink="/nuestra-historia" class="text-gray-950 ">
                  Nuestra Historia
                </a>
              </li>
              <li
                class="flex items-center space-x-3 px-4 py-4 hover:bg-purple-100 hover:cursor-pointer"
              >
                <fa-icon [icon]="faUserTie" class="text-slate-700"></fa-icon>
                <a routerLink="/nuestro-equipo-directivo" class="text-gray-950">
                  Nuestro Equipo Directivo
                </a>
              </li>
              <li
                class="flex items-center space-x-3 px-4 py-4 hover:bg-purple-100 hover:cursor-pointer"
              >
                <fa-icon [icon]="faDollarSign" class="text-slate-950"></fa-icon>
                <a routerLink="/nuestro-equipo-ventas" class="text-gray-950">
                  Nuestro Equipo de Ventas
                </a>
              </li>
              <li
                class="flex items-center space-x-3 px-4 py-4 hover:bg-purple-100 hover:cursor-pointer"
              >
                <fa-icon [icon]="faHeart" class="text-slate-700"></fa-icon>
                <a routerLink="/impacto-social" class="text-gray-950">
                  Impacto Social
                </a>
              </li>
              <li
                class="flex items-center space-x-3 px-4 py-4 hover:bg-purple-100 hover:cursor-pointer"
              >
                <fa-icon [icon]="faNewspaper" class="text-slate-700"></fa-icon>
                <a routerLink="/noticias" class="text-gray-950">
                  Noticias de la Empresa
                </a>
              </li>
            </ul>
          </div>
        </div>

        <!-- Bloque "Solutions" -->
        <div
          class="group inline-block"
          (mouseenter)="isMegaMenuOpen = true"
          (mouseleave)="isMegaMenuOpen = false"
          (click)="isMegaMenuOpen = false"
        >
          <a
            routerLink="/servicios"
            routerLinkActive="text-orange-500 font-bold"
            class="text-orange-500 font-bold hover:text-orange-600 flex justify-between gap-2 transition-colors p-4"
          >
            <span>Solutions</span>
            <fa-icon [icon]="faChevronDown" size="sm"></fa-icon>
          </a>
          <!-- Contenedor del mega menú -->
          <div
            [ngClass]="
              isMegaMenuOpen
                ? 'visible pointer-events-auto opacity-100'
                : 'invisible pointer-events-none opacity-0'
            "
            class="absolute top-16 left-0 w-full shadow-[0px_12px_12px_1px_rgba(0,0,0,0.1)] bg-rose-500 transition-all duration-300 z-50"
          >
            <!-- Fondo del mega menú con sombra y padding -->
            <div class="bg-white pt-8 pb-8">
              <!-- Contenido centrado -->
              <div class="mx-auto max-w-7xl px-8">
                <div class="grid grid-cols-1 md:grid-cols-5 gap-6 ">
                  <!-- OPERATIONS -->
                  <div>
                    <div
                      class="flex items-center space-x-2 mb-4 border-b-gray-300 hover:border-orange-500 border-b-1"
                    >
                      <fa-icon
                        [icon]="faTruck"
                        class="text-orange-500"
                      ></fa-icon>
                      <h3 class="text-lg font-bold uppercase text-orange-500 ">
                        Operations
                      </h3>
                    </div>
                    <ul class="space-y-3 text-gray-700 text-md">
                      <li
                        class="flex items-center space-x-2 px-2 py-4 hover:bg-orange-50"
                      >
                        <fa-icon
                          [icon]="faTruck"
                          class="text-md text-orange-500"
                        ></fa-icon>
                        <a
                          routerLink="/transporte-logistica"
                          class="hover:text-orange-500"
                          (click)="isMegaMenuOpen = false"
                        >
                          Transportation & Logistics
                        </a>
                      </li>
                      <li
                        class="flex items-center space-x-2 py-4 px-2 hover:bg-orange-50"
                      >
                        <fa-icon
                          [icon]="faGlobe"
                          class="text-sm text-orange-500"
                        ></fa-icon>
                        <a
                          routerLink="/global-forwarding"
                          class="hover:text-orange-500"
                          (click)="isMegaMenuOpen = false"
                        >
                          Global Forwarding
                        </a>
                      </li>
                      <li
                        class="flex items-center space-x-2 py-4 px-2 hover:bg-orange-50 hover:rounded-md"
                      >
                        <fa-icon
                          [icon]="faWarehouse"
                          class="text-sm text-orange-500"
                        ></fa-icon>
                        <a
                          routerLink="/warehousing-distribution"
                          class="hover:text-orange-500"
                          (click)="isMegaMenuOpen = false"
                        >
                          Warehousing & Distribution
                        </a>
                      </li>
                      <li
                        class="flex items-center space-x-2 py-4 px-2 hover:bg-orange-50"
                      >
                        <fa-icon
                          [icon]="faClipboard"
                          class="text-sm text-orange-500"
                        ></fa-icon>
                        <a
                          routerLink="/back-office"
                          class="hover:text-orange-500"
                          routerLinkActive="text-orange-500 font-bold"
                          (click)="isMegaMenuOpen = false"
                        >
                          Back Office
                        </a>
                      </li>
                    </ul>
                  </div>

                  <!-- TECH -->
                  <div>
                    <div
                      class="flex items-center space-x-2 mb-4 border-b-gray-300 hover:border-purple-500 border-b-1"
                    >
                      <fa-icon
                        [icon]="faLaptopCode"
                        class="text-purple-600"
                      ></fa-icon>
                      <h3 class="text-lg font-bold uppercase text-purple-600">
                        Tech
                      </h3>
                    </div>
                    <ul class="space-y-3 text-gray-700">
                      <li
                        class="flex items-center space-x-2 px-2 py-4 hover:bg-purple-50"
                      >
                        <fa-icon
                          [icon]="faCode"
                          class="text-sm text-purple-600"
                        ></fa-icon>
                        <a
                          routerLink="/software-development"
                          class="hover:text-purple-600"
                          (click)="isMegaMenuOpen = false"
                        >
                          Software Development
                        </a>
                      </li>
                      <li
                        class="flex items-center space-x-2 px-2 py-4 hover:bg-purple-50"
                      >
                        <fa-icon
                          [icon]="faPhoneVolume"
                          class="text-sm text-purple-600"
                        ></fa-icon>
                        <a
                          routerLink="/heldesk-service"
                          class="hover:text-purple-600"
                          (click)="isMegaMenuOpen = false"
                        >
                          Helpdesk Service
                        </a>
                      </li>
                      <li
                        class="flex items-center space-x-2 px-2 py-4 hover:bg-purple-50"
                      >
                        <fa-icon
                          [icon]="faChartPie"
                          class="text-sm text-purple-600"
                        ></fa-icon>
                        <a
                          routerLink="/business-intelligence"
                          class="hover:text-purple-600"
                          (click)="isMegaMenuOpen = false"
                        >
                          Business Intelligence
                        </a>
                      </li>
                      <li
                        class="flex items-center space-x-2 px-2 py-4 hover:bg-purple-50"
                      >
                        <fa-icon
                          [icon]="faDatabase"
                          class="text-sm text-purple-600"
                        ></fa-icon>
                        <a
                          routerLink="/data-science"
                          class="hover:text-purple-600"
                          (click)="isMegaMenuOpen = false"
                        >
                          Data Science
                        </a>
                      </li>
                    </ul>
                  </div>

                  <!-- BPO -->
                  <div>
                    <div
                      class="flex items-center space-x-2 mb-4 border-b-gray-300 hover:border-pink-500 border-b-1"
                    >
                      <fa-icon
                        [icon]="faHeadset"
                        class="text-pink-500"
                      ></fa-icon>
                      <h3 class="text-lg font-bold uppercase text-pink-500">
                        BPO
                      </h3>
                    </div>
                    <ul class="space-y-3 text-gray-700">
                      <li
                        class="flex items-center space-x-2 px-2 py-4 hover:bg-pink-50"
                      >
                        <fa-icon
                          [icon]="faHandsHelping"
                          class="text-sm text-pink-500"
                        ></fa-icon>
                        <a
                          routerLink="/customer-support"
                          class="hover:text-pink-500"
                          (click)="isMegaMenuOpen = false"
                        >
                          Customer Support
                        </a>
                      </li>
                      <li
                        class="flex items-center space-x-2 px-2 py-4 hover:bg-pink-50"
                      >
                        <fa-icon
                          [icon]="faUserTie"
                          class="text-sm text-pink-500"
                        ></fa-icon>
                        <a
                          routerLink="/professional-services"
                          class="hover:text-pink-500"
                          (click)="isMegaMenuOpen = false"
                        >
                          Professional Services
                        </a>
                      </li>
                      <li
                        class="flex items-center space-x-2 px-2 py-4 hover:bg-pink-50"
                      >
                        <fa-icon
                          [icon]="faUsers"
                          class="text-sm text-pink-500"
                        ></fa-icon>
                        <a
                          routerLink="/recruitment"
                          class="hover:text-pink-500"
                          (click)="isMegaMenuOpen = false"
                        >
                          Recruitment
                        </a>
                      </li>
                    </ul>
                  </div>

                  <!-- MARKETING -->
                  <div>
                    <div
                      class="flex items-center space-x-2 mb-4 border-b-gray-300 hover:border-green-500 border-b-1"
                    >
                      <fa-icon
                        [icon]="faChartLine"
                        class="text-green-500"
                      ></fa-icon>
                      <h3 class="text-lg font-bold uppercase text-green-500">
                        Marketing
                      </h3>
                    </div>
                    <ul class="space-y-3 text-gray-700">
                      <li
                        class="flex items-center space-x-2 px-2 py-4 hover:bg-green-50"
                      >
                        <fa-icon
                          [icon]="faPalette"
                          class="text-sm text-green-500"
                        ></fa-icon>
                        <a
                          routerLink="/creative-professionals"
                          class="hover:text-green-500"
                          (click)="isMegaMenuOpen = false"
                        >
                          Creative Professionals
                        </a>
                      </li>
                    </ul>
                  </div>

                  <!-- SALES -->
                  <div>
                    <div
                      class="flex items-center space-x-2 mb-4 border-b-gray-300 hover:border-blue-500 border-b-1"
                    >
                      <fa-icon
                        [icon]="faHandshake"
                        class="text-blue-500"
                      ></fa-icon>
                      <h3 class="text-lg font-bold uppercase text-blue-500">
                        Sales
                      </h3>
                    </div>
                    <ul class="space-y-3 text-gray-700">
                      <li
                        class="flex items-center space-x-2 px-2 py-4 hover:bg-blue-50"
                      >
                        <fa-icon
                          [icon]="faUserFriends"
                          class="text-sm text-blue-500"
                        ></fa-icon>
                        <a
                          routerLink="/sales"
                          class="hover:text-blue-500"
                          (click)="isMegaMenuOpen = false"
                        >
                          Sales Development Reps
                        </a>
                      </li>
                      <li
                        class="flex items-center space-x-2 px-2 py-4 hover:bg-blue-50"
                      >
                        <fa-icon
                          [icon]="faHandshake"
                          class="text-sm text-blue-500"
                        ></fa-icon>
                        <a
                          routerLink="/carrier-sales"
                          class="hover:text-blue-500"
                          (click)="isMegaMenuOpen = false"
                        >
                          Carrier Sales
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Bloque "Industries" -->
        <div class="relative group">
          <a
            routerLink="/industries"
            routerLinkActive="text-orange-500 font-bold"
            class="text-orange-500 font-bold hover:text-orange-600 flex justify-between gap-2 transition-colors p-4"
          >
            <span>Industries</span>
            <fa-icon [icon]="faChevronDown" size="sm"></fa-icon>
          </a>
          <!-- Menú desplegable -->
          <div
            class="absolute left-0 mt-full w-60 bg-white shadow-[0px_0px_5px_1px_rgba(0,0,0,0.4)] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50 group-hover:block hidden"
          >
            <ul class="py-4">
              <!-- Retail -->
              <li
                class="flex items-center space-x-3 px-4 py-4 hover:bg-purple-100 hover:cursor-pointer"
              >
                <fa-icon [icon]="faStore" class="text-slate-700"></fa-icon>
                <a routerLink="/retail" class="text-gray-950"> Retail </a>
              </li>
              <!-- Insurance -->
              <li
                class="flex items-center space-x-3 px-4 py-4 hover:bg-purple-100 hover:cursor-pointer"
              >
                <fa-icon
                  [icon]="faShieldHalved"
                  class="text-slate-700"
                ></fa-icon>
                <a routerLink="/insurance" class="text-gray-950"> Insurance </a>
              </li>
              <!-- Financial Services -->
              <li
                class="flex items-center space-x-3 px-4 py-4 hover:bg-purple-100 hover:cursor-pointer"
              >
                <fa-icon [icon]="faDollarSign" class="text-slate-700"></fa-icon>
                <a routerLink="/financial-services" class="text-gray-950">
                  Financial Services
                </a>
              </li>
              <!-- Manufacturing -->
              <li
                class="flex items-center space-x-3 px-4 py-4 hover:bg-purple-100 hover:cursor-pointer"
              >
                <fa-icon [icon]="faIndustry" class="text-slate-700"></fa-icon>
                <a routerLink="/manufacturing" class="text-gray-950">
                  Manufacturing
                </a>
              </li>
            </ul>
          </div>
        </div>

        <!-- Bloque "Our Offices" -->
        <div class="relative group inline-block">
          <!-- Enlace principal -->
          <a
            routerLink="/nosotros"
            routerLinkActive="text-orange-500 font-bold"
            class="text-orange-500 font-bold hover:text-orange-600 flex justify-between gap-2 transition-colors p-4"
          >
            <span>Our Offices</span>
            <fa-icon [icon]="faChevronDown" size="sm"></fa-icon>
          </a>

          <!-- Menú desplegable -->
          <div
            class="absolute top-full left-0 w-64 bg-white rounded-lg
           opacity-0 invisible shadow-[0px_0px_5px_1px_rgba(0,0,0,0.4)]
           pointer-events-none
           group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto
           transition-all duration-300 z-50"
          >
            <ul class="py-4">
              <li
                class="flex items-center space-x-3 px-4 py-4 hover:bg-purple-100 hover:cursor-pointer"
              >
                <fa-icon [icon]="faPlaneUp" class="text-gray-700"></fa-icon>
                <a routerLink="/nosotros" class="text-gray-950 ">
                  Nuestra Historia
                </a>
              </li>
            </ul>
          </div>
        </div>

        <!-- Bloque "Resources" -->
        <div class="relative group">
          <a
            routerLink="/resources"
            routerLinkActive="text-orange-500 font-bold"
            class="text-orange-500 font-bold hover:text-orange-600 flex justify-between gap-2 transition-colors p-4"
          >
            <span>Resources</span>
            <fa-icon [icon]="faChevronDown" size="sm"></fa-icon>
          </a>

          <!-- Menú desplegable -->
          <div
            class="absolute left-0 mt-full w-60 bg-white shadow-[0px_0px_5px_1px_rgba(0,0,0,0.4)] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50 group-hover:block hidden"
          >
            <ul class="py-4">
              <!-- Blog -->
              <li
                class="flex items-center space-x-3 px-4 py-4 hover:bg-purple-100 hover:cursor-pointer"
              >
                <fa-icon [icon]="faNewspaper" class="text-slate-700"></fa-icon>
                <a routerLink="/blog" class="text-gray-950"> Blog </a>
              </li>
              <!-- Case Studies -->
              <li
                class="flex items-center space-x-3 px-4 py-4 hover:bg-purple-100 hover:cursor-pointer"
              >
                <fa-icon [icon]="faFileLines" class="text-slate-700"></fa-icon>
                <a routerLink="/case-studies" class="text-gray-950">
                  Case Studies
                </a>
              </li>
              <!-- Partners -->
              <li
                class="flex items-center space-x-3 px-4 py-4 hover:bg-purple-100 hover:cursor-pointer"
              >
                <fa-icon [icon]="faHandshake" class="text-slate-700"></fa-icon>
                <a routerLink="/partners" class="text-gray-950"> Partners </a>
              </li>
              <!-- FAQ -->
              <li
                class="flex items-center space-x-3 px-4 py-4 hover:bg-purple-100 hover:cursor-pointer"
              >
                <fa-icon
                  [icon]="faCircleQuestion"
                  class="text-slate-700"
                ></fa-icon>
                <a routerLink="/faq" fragment="faq" class="text-gray-950">
                  FAQ
                </a>
              </li>
              <!-- Events -->
              <li
                class="flex items-center space-x-3 px-4 py-4 hover:bg-purple-100 hover:cursor-pointer"
              >
                <fa-icon
                  [icon]="faCalendarDays"
                  class="text-slate-700"
                ></fa-icon>
                <a routerLink="/events" class="text-gray-950"> Events </a>
              </li>
              <!-- Workforce Optimization -->
              <li
                class="flex items-center space-x-3 px-4 py-4 hover:bg-purple-100 hover:cursor-pointer"
              >
                <fa-icon [icon]="faUserGear" class="text-slate-700"></fa-icon>
                <a routerLink="/workforce-optimization" class="text-gray-950">
                  Workforce Optimization
                </a>
              </li>
              <!-- Tech Talent -->
              <li
                class="flex items-center space-x-3 px-4 py-4 hover:bg-purple-100 hover:cursor-pointer"
              >
                <fa-icon [icon]="faLaptopCode" class="text-slate-700"></fa-icon>
                <a routerLink="/tech-talent" class="text-gray-950">
                  Tech Talent
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Botones de acción -->
      <div class="flex items-center space-x-4">
        <a
          routerLink="/productos"
          class="hidden md:block bg-purple-700 hover:bg-purple-800 text-white py-2 px-4 rounded-md transition-colors"
        >
          Ver Productos
        </a>
        <a
          routerLink="/contacto"
          class="hidden md:block border border-purple-700 text-purple-700 hover:bg-purple-50 py-2 px-4 rounded-md transition-colors"
        >
          Hablemos!
        </a>
        <div class="flex items-center">
          <a
            routerLink="/login"
            class="flex items-center space-x-2 text-gray-700 hover:text-purple-700"
          >
            <!-- <fa-icon [icon]="faUser" size="lg"></fa-icon> -->
            <span class="hidden md:inline">Inicia Sesión</span>
          </a>
        </div>
        <!-- <button class="text-gray-700 hover:text-purple-700 p-2">
          <fa-icon [icon]="faGlobe" size="lg"></fa-icon>
        </button> -->
      </div>

      <!-- Botón menú móvil -->
      <button
        class="lg:hidden text-gray-700 z-100 hover:text-purple-700 p-2"
        (click)="toggleMobileMenu()"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </nav>
    <!-- Menú móvil -->
    <app-mobile-menu
      *ngIf="isMobileMenuOpen"
      (close)="closeMobileMenu()"
    ></app-mobile-menu>
    <
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class NavbarComponent {
  faGlobe = faGlobe;
  faUser = faUser;

  // Íconos para mega menú
  faTruck = faTruck;
  faLaptopCode = faLaptopCode;
  faHeadset = faHeadset;
  faChartLine = faChartLine;
  faHandshake = faHandshake;
  faWarehouse = faWarehouse;
  faClipboard = faClipboard;
  faCode = faCode;
  faPhoneVolume = faPhoneVolume;
  faChartPie = faChartPie;
  faDatabase = faDatabase;
  faHandsHelping = faHandsHelping;
  faUserTie = faUserTie;
  faUsers = faUsers;
  faUserFriends = faUserFriends;
  faDollarSign = faDollarSign;
  faClockRotateLeft = faClockRotateLeft;
  faNewspaper = faNewspaper;
  faHeart = faHeart;
  faPalette = faPalette;
  faStore = faStore;
  faIndustry = faIndustry;
  faShieldHalved = faShieldHalved;
  faFileLines = faFileLines;
  faCircleQuestion = faCircleQuestion;
  faCalendarDays = faCalendarDays;
  faUserGear = faUserGear;
  faPlaneUp = faPlaneUp;
  faChevronDown = faChevronDown;

  isMobileMenuOpen = false;

  isMegaMenuOpen: boolean = false;

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    document.body.classList.toggle('overflow-hidden', this.isMobileMenuOpen);
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
    console.log('CERRAR MENU');
    document.body.classList.remove('overflow-hidden');
  }
}
