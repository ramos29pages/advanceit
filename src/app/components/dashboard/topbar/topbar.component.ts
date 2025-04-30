/*==================================*/
/*   TOPBAR COMPONENT (topbar.component.ts)   */
/*==================================*/
import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faBars,
  faBell,
  faEnvelope,
  faSearch,
  faCircleDot
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  template: `
    <div class="h-16 bg-white shadow px-4 z-9999 flex sticky top-0 items-center justify-between">
      <div class="flex items-center space-x-4">
        <!-- Botón hamburguesa para mostrar/ocultar sidebar en móvil -->
        <button
          class="p-2 text-gray-600 hover:bg-gray-100 rounded focus:outline-none md:hidden"
          (click)="toggleSidebarMobile.emit()"
        >
          <fa-icon [icon]="faBars" class="text-xl"></fa-icon>
        </button>

        <!-- Botón hamburguesa para expandir/colapsar en escritorio -->
        <button
          class="p-2 text-gray-600 hover:bg-gray-100 rounded focus:outline-none hidden md:block"
          (click)="toggleSidebarDesktop.emit()"
        >
          <fa-icon [icon]="faBars" class="text-xl"></fa-icon>
        </button>

        <!-- Caja de búsqueda -->
        <div class="hidden md:flex items-center space-x-2 text-gray-500">
          <fa-icon [icon]="faSearch"></fa-icon>
          <input
            type="text"
            placeholder="Search projects"
            class="focus:outline-none"
          />
        </div>
      </div>

      <div class="flex items-center space-x-4">
        <button class="relative p-2 text-gray-600 hover:bg-gray-100 rounded focus:outline-none">
          <fa-icon [icon]="faEnvelope" class="text-lg"></fa-icon>
          <span
            class="absolute top-1 right-1 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full"
            >1</span
          >
        </button>

        <button class="relative p-2 text-gray-600 hover:bg-gray-100 rounded focus:outline-none">
          <fa-icon [icon]="faBell" class="text-lg"></fa-icon>
          <span
            class="absolute top-1 right-1 bg-yellow-400 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full"
            >2</span
          >
        </button>

        <fa-icon [icon]="faCircleDot" class="text-green-500 text-xl"></fa-icon>

        <span class="font-semibold text-gray-800">Arturo Esguerra</span>
        <img
          src="https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg"
          alt="avatar"
          class="w-8 h-8 rounded-full"
        />
      </div>
    </div>
  `,
  styles: []
})
export class TopbarComponent {
  faBars = faBars;
  faSearch = faSearch;
  faBell = faBell;
  faEnvelope = faEnvelope;
  faCircleDot = faCircleDot;

  @Output() toggleSidebarMobile = new EventEmitter<void>();
  @Output() toggleSidebarDesktop = new EventEmitter<void>();
}
