import { Component, Output, EventEmitter } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgIf, NgClass } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-mobile-menu',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgIf, NgClass, FontAwesomeModule],
  template: `
    <!-- Overlay: al dar click se cierra el menú -->
    <div
      class="fixed inset-0 bg-black z-40"
      style="background-color: rgba(0, 0, 0, 0.5);"
      (click)="close.emit()"
    ></div>

    <!-- Contenedor del menú móvil -->
    <div
      class="fixed top-0 right-0 h-full w-64 bg-white z-50 shadow-lg transform transition-transform duration-300 ease-in-out overflow-y-auto"
    >
      <!-- Cabecera del menú -->
      <div
        class="p-4 h-18 border-b border-gray-200 flex justify-between items-center"
      >
        <span class="text-xl text-gray-500"></span>
        <button class="text-gray-500" (click)="close.emit()">
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <!-- Contenido del menú -->
      <div class="p-4 space-y-4">
        <!-- Sección: About Us -->
        <div>
          <button
            (click)="toggleSection('about')"
            class="w-full flex justify-between items-center py-2 text-gray-500 font-bold text-lg hover:text-orange-500 transition-colors focus:outline-none"
          >
            <span routerLink="/nuestra-historia" routerLinkActive="text-orange-500">About Us</span>
            <fa-icon
              [icon]="faChevronDown"
              [ngClass]="{ 'transform rotate-180': isAboutUsOpen }"
              class="h-4 w-4 transition-transform duration-300"
            ></fa-icon>
          </button>
          <div *ngIf="isAboutUsOpen" class="pl-4 mt-2 border-l border-gray-200">
            <a
              routerLink="/nuestra-historia"
              (click)="close.emit()"
              class="block py-1 text-gray-600 hover:text-orange-500 transition-colors"
              >Nuestra Historia</a
            >
            <a
              routerLink="/nuestro-equipo-directivo"
              (click)="close.emit()"
              class="block py-1 text-gray-600 hover:text-orange-500 transition-colors"
              >Nuestro Equipo Directivo</a
            >
            <a
              routerLink="/nuestro-equipo-ventas"
              (click)="close.emit()"
              class="block py-1 text-gray-600 hover:text-orange-500 transition-colors"
              >Nuestro Equipo de Ventas</a
            >
            <a
              routerLink="/impacto-social"
              (click)="close.emit()"
              class="block py-1 text-gray-600 hover:text-orange-500 transition-colors"
              >Impacto Social</a
            >
            <a
              routerLink="/noticias"
              (click)="close.emit()"
              class="block py-1 text-gray-600 hover:text-orange-500 transition-colors"
              >Noticias de la Empresa</a
            >
          </div>
        </div>

        <!-- Sección: Solutions -->
        <div>
          <button
            (click)="toggleSection('solutions')"
            class="w-full flex justify-between items-center py-2 text-gray-500 text-lg font-bold hover:text-orange-500 transition-colors focus:outline-none"
          >
            <span>Solutions</span>
            <fa-icon
              [icon]="faChevronDown"
              [ngClass]="{ 'transform rotate-180': isSolutionsOpen }"
              class="h-4 w-4 transition-transform duration-300"
            ></fa-icon>
          </button>
          <div
            *ngIf="isSolutionsOpen"
            class="pl-4 mt-2 border-l border-gray-200 space-y-3"
          >
            <!-- Sub-sección: Operations -->
            <div>
              <div class="text-sm font-semibold text-orange-500">
                Operations
              </div>
              <a
                routerLink="/transporte-logistica"
                (click)="close.emit()"
                class="block py-1 text-gray-600 hover:text-orange-500 transition-colors"
                >Transportation & Logistics</a
              >
              <a
                routerLink="/global-forwarding"
                (click)="close.emit()"
                class="block py-1 text-gray-600 hover:text-orange-500 transition-colors"
                >Global Forwarding</a
              >
              <a
                routerLink="/warehousing-distribution"
                (click)="close.emit()"
                class="block py-1 text-gray-600 hover:text-orange-500 transition-colors"
                >Warehousing & Distribution</a
              >
              <a
                routerLink="/back-office"
                (click)="close.emit()"
                class="block py-1 text-gray-600 hover:text-orange-500 transition-colors"
                >Back Office</a
              >
            </div>
            <!-- Sub-sección: Tech -->
            <div>
              <div class="text-sm font-semibold text-purple-600">Tech</div>
              <a
                routerLink="/software-development"
                (click)="close.emit()"
                class="block py-1 text-gray-600 hover:text-purple-600 transition-colors"
                >Software Development</a
              >
              <a
                routerLink="/heldesk-service"
                (click)="close.emit()"
                class="block py-1 text-gray-600 hover:text-purple-600 transition-colors"
                >Helpdesk Service</a
              >
              <a
                routerLink="/business-intelligence"
                (click)="close.emit()"
                class="block py-1 text-gray-600 hover:text-purple-600 transition-colors"
                >Business Intelligence</a
              >
              <a
                routerLink="/data-science"
                (click)="close.emit()"
                class="block py-1 text-gray-600 hover:text-purple-600 transition-colors"
                >Data Science</a
              >
            </div>
            <!-- Sub-sección: BPO -->
            <div>
              <div class="text-sm font-semibold text-pink-500">BPO</div>
              <a
                routerLink="/customer-support"
                (click)="close.emit()"
                class="block py-1 text-gray-600 hover:text-pink-500 transition-colors"
                >Customer Support</a
              >
              <a
                routerLink="/professional-services"
                (click)="close.emit()"
                class="block py-1 text-gray-600 hover:text-pink-500 transition-colors"
                >Professional Services</a
              >
              <a
                routerLink="/recruitment"
                (click)="close.emit()"
                class="block py-1 text-gray-600 hover:text-pink-500 transition-colors"
                >Recruitment</a
              >
            </div>
            <!-- Sub-sección: Marketing -->
            <div>
              <div class="text-sm font-semibold text-green-500">Marketing</div>
              <a
                routerLink="/creative-professionals"
                (click)="close.emit()"
                class="block py-1 text-gray-600 hover:text-green-500 transition-colors"
                >Creative Professionals</a
              >
            </div>
            <!-- Sub-sección: Sales -->
            <div>
              <div class="text-sm font-semibold text-blue-500">Sales</div>
              <a
                routerLink="/sales"
                (click)="close.emit()"
                class="block py-1 text-gray-600 hover:text-blue-500 transition-colors"
                >Sales Development Reps</a
              >
              <a
                routerLink="/carrier-sales"
                (click)="close.emit()"
                class="block py-1 text-gray-600 hover:text-blue-500 transition-colors"
                >Carrier Sales</a
              >
            </div>
          </div>
        </div>

        <!-- Sección: Industries -->
        <div>
          <button
            (click)="toggleSection('industries')"
            class="w-full flex justify-between items-center py-2 text-gray-500 text-lg font-bold hover:text-orange-500 transition-colors focus:outline-none"
          >
            <span>Industries</span>
            <fa-icon
              [icon]="faChevronDown"
              [ngClass]="{ 'transform rotate-180': isIndustriesOpen }"
              class="h-4 w-4 transition-transform duration-300"
            ></fa-icon>
          </button>
          <div
            *ngIf="isIndustriesOpen"
            class="pl-4 mt-2 border-l border-gray-200"
          >
            <a
              routerLink="/retail"
              (click)="close.emit()"
              class="block py-1 text-gray-600 hover:text-orange-500 transition-colors"
              >Retail</a
            >
            <a
              routerLink="/insurance"
              (click)="close.emit()"
              class="block py-1 text-gray-600 hover:text-orange-500 transition-colors"
              >Insurance</a
            >
            <a
              routerLink="/financial-services"
              (click)="close.emit()"
              class="block py-1 text-gray-600 hover:text-orange-500 transition-colors"
              >Financial Services</a
            >
            <a
              routerLink="/manufacturing"
              (click)="close.emit()"
              class="block py-1 text-gray-600 hover:text-orange-500 transition-colors"
              >Manufacturing</a
            >
          </div>
         </div>

        <!-- Sección: Our Offices -->
        <div>
          <button
            (click)="toggleSection('offices')"
            class="w-full flex justify-between items-center py-2 text-gray-500 text-lg font-bold hover:text-orange-500 transition-colors focus:outline-none"
          >
            <span>Our Offices</span>
            <fa-icon
              [icon]="faChevronDown"
              [ngClass]="{ 'transform rotate-180': isOfficesOpen }"
              class="h-4 w-4 transition-transform duration-300"
            ></fa-icon>
          </button>
          <div *ngIf="isOfficesOpen" class="pl-4 mt-2 border-l border-gray-200">
            <a
              routerLink="/nosotros"
              (click)="close.emit()"
              class="block py-1 text-gray-600 hover:text-orange-500 transition-colors"
              >Nuestra Historia</a
            >
          </div>
        </div>

        <!-- Sección: Resources -->
        <div>
          <button
            (click)="toggleSection('resources')"
            class="w-full flex justify-between items-center py-2 text-gray-500 text-lg font-bold hover:text-orange-500 transition-colors focus:outline-none"
          >
            <span>Resources</span>
            <fa-icon
              [icon]="faChevronDown"
              [ngClass]="{ 'transform rotate-180': isResourcesOpen }"
              class="h-4 w-4 transition-transform duration-300"
            ></fa-icon>
          </button>
          <div
            *ngIf="isResourcesOpen"
            class="pl-4 mt-2 border-l border-gray-200 space-y-1"
          >
            <a
              routerLink="/blog"
              (click)="close.emit()"
              class="block py-1 text-gray-600 hover:text-orange-500 transition-colors"
              >Blog</a
            >
            <a
              routerLink="/case-studies"
              (click)="close.emit()"
              class="block py-1 text-gray-600 hover:text-orange-500 transition-colors"
              >Case Studies</a
            >
            <a
              routerLink="/partners"
              (click)="close.emit()"
              class="block py-1 text-gray-600 hover:text-orange-500 transition-colors"
              >Partners</a
            >
            <a
              routerLink="/faq"
              fragment="faq"
              (click)="close.emit()"
              class="block py-1 text-gray-600 hover:text-orange-500 transition-colors"
              >FAQ</a
            >
            <a
              routerLink="/events"
              (click)="close.emit()"
              class="block py-1 text-gray-600 hover:text-orange-500 transition-colors"
              >Events</a
            >
            <a
              routerLink="/workforce-optimization"
              (click)="close.emit()"
              class="block py-1 text-gray-600 hover:text-orange-500 transition-colors"
              >Workforce Optimization</a
            >
            <a
              routerLink="/tech-talent"
              (click)="close.emit()"
              class="block py-1 text-gray-600 hover:text-orange-500 transition-colors"
              >Tech Talent</a
            >
          </div>
        </div>

        <!-- Botones de acción -->
        <div class="border-t pt-4 mt-4 space-y-3">
          <a
            routerLink="/productos"
            (click)="close.emit()"
            class="block w-full bg-purple-700 hover:bg-purple-800 text-white py-2 px-4 rounded-md transition-colors text-center"
            >Ver Productos</a
          >
          <a
            routerLink="/contacto"
            (click)="close.emit()"
            class="block w-full border border-purple-700 text-purple-700 hover:bg-purple-50 py-2 px-4 rounded-md transition-colors text-center"
            >Hablemos!</a
          >
          <a
            routerLink="/login"
            (click)="close.emit()"
            class="block w-full text-center py-2 text-gray-700 hover:text-purple-700"
            >Inicia Sesión</a
          >
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        display: contents;
      }
    `,
  ],
})
export class MobileMenuComponent {
  @Output() close = new EventEmitter<void>();

  faChevronDown = faChevronDown;

  isAboutUsOpen = false;
  isSolutionsOpen = false;
  isIndustriesOpen = false;
  isOfficesOpen = false;
  isResourcesOpen = false;

  toggleSection(section: string): void {
    switch (section) {
      case 'about':
        this.isAboutUsOpen = !this.isAboutUsOpen;
        break;
      case 'solutions':
        this.isSolutionsOpen = !this.isSolutionsOpen;
        break;
      case 'industries':
        this.isIndustriesOpen = !this.isIndustriesOpen;
        break;
      case 'offices':
        this.isOfficesOpen = !this.isOfficesOpen;
        break;
      case 'resources':
        this.isResourcesOpen = !this.isResourcesOpen;
        break;
      default:
        break;
    }
  }
}
