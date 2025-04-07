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
        class="p-4 h-18 sticky z-50 top-0 border-b border-gray-200 bg-white flex justify-between items-center"
      >
        <span class="text-xl text-gray-500">
          <div class="flex items-center transition-all ease-in-out">
            <a routerLink="/" (click)="close.emit()">
              <img
                src="logo.png"
                alt="Advance Technology Projects"
                class="h-10"
              />
            </a>
          </div>
        </span>
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
            class="w-full flex justify-between items-center py-2 text-gray-500 font-bold text-lg hover:text-orange-500 transition-colors focus:outline-none sticky bg-white top-18"
          >
            <span routerLinkActive="text-orange-500"
              >About Us</span
            >
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
              >Our History</a
            >

            <a
              routerLink="/impacto-social"
              (click)="close.emit()"
              class="block py-1 text-gray-600 hover:text-orange-500 transition-colors"
              >Social Impact</a
            >
          </div>
        </div>

        <!-- Sección: Solutions -->
        <div>
          <button
            (click)="toggleSection('solutions')"
            class="w-full flex justify-between items-center py-2 text-gray-500 text-lg font-bold hover:text-orange-500 transition-colors focus:outline-none sticky bg-white top-18"
            routerLinkActive="text-orange-500"
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
            <!-- Sub-sección: Hardware Provisioning & IT Asset Management -->
            <div>
              <div class="text-sm font-semibold text-orange-500">
              Hardware Provisioning & IT Asset Management
              </div>
              <a
                routerLink="/hardware-provisioning"
                (click)="close.emit()"
                class="block py-1 text-gray-600 hover:text-orange-500 transition-colors"
              >
                Administration & Tracking
              </a>
              <a
                routerLink="/hardware-provisioning"
                (click)="close.emit()"
                class="block py-1 text-gray-600 hover:text-orange-500 transition-colors"
              >
                Reporting & Analytics
              </a>
              <a
                routerLink="/hardware-provisioning"
                (click)="close.emit()"
                class="block py-1 text-gray-600 hover:text-orange-500 transition-colors"
              >
                Troubleshooting & Maintenance
              </a>
              <a
                routerLink="/hardware-provisioning"
                (click)="close.emit()"
                class="block py-1 text-gray-600 hover:text-orange-500 transition-colors"
              >
                Local Warranty Support
              </a>
              <a
                routerLink="/hardware-provisioning"
                (click)="close.emit()"
                class="block py-1 text-gray-600 hover:text-orange-500 transition-colors"
              >
                Asset Disposal & Recycling
              </a>
              <a
                routerLink="/hardware-provisioning"
                (click)="close.emit()"
                class="block py-1 text-gray-600 hover:text-orange-500 transition-colors"
              >
                LATAM Procurement & Logistics
              </a>
            </div>
            <!-- Sub-sección: Software as a Service (SaaS) -->
            <div>
              <div class="text-sm font-semibold text-purple-600">
              Software as a Service (SaaS)
              </div>
              <a
                routerLink="/software-as-a-service"
                (click)="close.emit()"
                class="block py-1 text-gray-600 hover:text-purple-600 transition-colors"
              >
                Software Development
              </a>
              <a
                routerLink="/software-as-a-service"
                (click)="close.emit()"
                class="block py-1 text-gray-600 hover:text-purple-600 transition-colors"
              >
                Helpdesk Service
              </a>
              <a
                routerLink="/software-as-a-service"
                (click)="close.emit()"
                class="block py-1 text-gray-600 hover:text-purple-600 transition-colors"
              >
                Adobe Sign & Creative Cloud
              </a>
              <a
                routerLink="/software-as-a-service"
                (click)="close.emit()"
                class="block py-1 text-gray-600 hover:text-purple-600 transition-colors"
              >
                Cloud-Based Business Applications
              </a>
              <a
                routerLink="/software-as-a-service"
                (click)="close.emit()"
                class="block py-1 text-gray-600 hover:text-purple-600 transition-colors"
              >
                License Optimization & Compliance
              </a>
            </div>
            <!-- Sub-sección: Cloud & Cybersecurity Solutions -->
            <div>
              <div class="text-sm font-semibold text-pink-500">
              Cloud & Cybersecurity Solutions
              </div>
              <a
                routerLink="/cloud-cibersecurity"
                (click)="close.emit()"
                class="block py-1 text-gray-600 hover:text-pink-500 transition-colors"
              >
                Cloud Infrastructure
              </a>
              <a
                routerLink="/cloud-cibersecurity"
                (click)="close.emit()"
                class="block py-1 text-gray-600 hover:text-pink-500 transition-colors"
              >
                Cybersecurity Frameworks
              </a>
              <a
                routerLink="/cloud-cibersecurity"
                (click)="close.emit()"
                class="block py-1 text-gray-600 hover:text-pink-500 transition-colors"
              >
                Cloud Backup & Disaster Recovery
              </a>
              <a
                routerLink="/cloud-cibersecurity"
                (click)="close.emit()"
                class="block py-1 text-gray-600 hover:text-pink-500 transition-colors"
              >
                Identity & Access Management
              </a>
            </div>
            <!-- Sub-sección: Help Desk & IT Support Services -->
            <div>
              <div class="text-sm font-semibold text-green-500">
              Help Desk & IT Support Services
              </div>
              <a
                routerLink="/helpdesk-support"
                (click)="close.emit()"
                class="block py-1 text-gray-600 hover:text-green-500 transition-colors"
              >
                24/7 Help Desk Support
              </a>
              <a
                routerLink="/helpdesk-support"
                (click)="close.emit()"
                class="block py-1 text-gray-600 hover:text-green-500 transition-colors"
              >
                AI-Powered IT Assistance
              </a>
              <a
                routerLink="/helpdesk-support"
                (click)="close.emit()"
                class="block py-1 text-gray-600 hover:text-green-500 transition-colors"
              >
                Service Flow Management
              </a>
            </div>
            <!-- Sub-sección: Enterprise IT & Technology Projects -->
            <div>
              <div class="text-sm font-semibold text-blue-500">
              Enterprise IT & Technology Projects
              </div>
              <a
                routerLink="/enterprise-technologies"
                (click)="close.emit()"
                class="block py-1 text-gray-600 hover:text-blue-500 transition-colors"
              >
                New Office IT Setup
              </a>
              <a
                routerLink="/enterprise-technologies"
                (click)="close.emit()"
                class="block py-1 text-gray-600 hover:text-blue-500 transition-colors"
              >
                Conference Room & AV Solutions
              </a>
              <a
                routerLink="/enterprise-technologies"
                (click)="close.emit()"
                class="block py-1 text-gray-600 hover:text-blue-500 transition-colors"
              >
                Data Center & Server Room Solutions
              </a>
              <a
                routerLink="/enterprise-technologies"
                (click)="close.emit()"
                class="block py-1 text-gray-600 hover:text-blue-500 transition-colors"
              >
                IT Relocation & Expansion
              </a>
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
              >Heathcare</a
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
              >Logistics & Supply Chain</a
            >
            <a
              routerLink="/other-industries"
              (click)="close.emit()"
              class="block py-1 text-gray-600 hover:text-orange-500 transition-colors"
              >Other Industries</a
            >
          </div>
        </div>

        <!-- Sección: Our Offices -->
        <!-- <div>
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
              >Our History</a
            >
          </div>
        </div> -->

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
              routerLink="/case-studies"
              (click)="close.emit()"
              class="block py-1 text-gray-600 hover:text-orange-500 transition-colors"
              >Advance Academy</a
            >
            <a
              routerLink="/partners"
              (click)="close.emit()"
              class="block py-1 text-gray-600 hover:text-orange-500 transition-colors"
              >Partners</a
            >
            <a
              routerLink="/white-papers"
              (click)="close.emit()"
              class="block py-1 text-gray-600 hover:text-orange-500 transition-colors"
              >White papers</a
            >
            <a
              routerLink="/faq"
              fragment="faq"
              (click)="close.emit()"
              class="block py-1 text-gray-600 hover:text-orange-500 transition-colors"
              >FAQ</a
            >
          </div>
        </div>

        <!-- Botones de acción -->
        <div class="border-t pt-4 mt-4 space-y-3">
          <a
            routerLink="/productos"
            (click)="close.emit()"
            class="block w-full bg-purple-700 hover:bg-purple-800 text-white py-2 px-4 rounded-md transition-colors text-center"
            >All Products</a
          >
          <a
            routerLink="/contacto"
            (click)="close.emit()"
            class="block w-full border border-purple-700 text-purple-700 hover:bg-purple-50 py-2 px-4 rounded-md transition-colors text-center"
            >Let's talk!</a
          >
          <!-- <a
            routerLink="/login"
            (click)="close.emit()"
            class="block w-full text-center py-2 text-gray-700 hover:text-purple-700"
            >Login</a
          > -->
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
      case 'resources':
        this.isResourcesOpen = !this.isResourcesOpen;
        break;
      default:
        break;
    }
  }
}
