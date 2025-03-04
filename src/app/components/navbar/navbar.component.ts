import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGlobe, faUser } from '@fortawesome/free-solid-svg-icons';
import { MobileMenuComponent } from './mobile-menu/mobile-menu.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, FontAwesomeModule, NgIf, MobileMenuComponent],
  template: `
    <nav class="w-full bg-white lg:text-l py-4 px-6 flex justify-between items-center shadow-sm bg-radial-white-purple-nav">
      <!-- Logo section -->
      <div class="flex items-center">
        <a routerLink="/">
          <img src="logo.png" alt="Advance Technology Projects" class="h-10">
        </a>
      </div>

      <!-- Main menu -->
      <div class="hidden lg:flex space-x-8">
        <a
          routerLink="/inicio"
          routerLinkActive="text-orange-500 font-bold"
          class="text-orange-500 font-bold hover:text-orange-600 transition-colors"
        >
          Inicio
        </a>
        <a
          routerLink="/servicios"
          routerLinkActive="text-orange-500 font-bold"
          class="text-gray-700 hover:text-orange-500 transition-colors"
        >
          Servicios
        </a>
        <a
          routerLink="/nosotros"
          routerLinkActive="text-orange-500 font-bold"
          class="text-gray-700 hover:text-orange-500 transition-colors"
        >
          Nosotros
        </a>
        <a
          routerLink="/alianzas"
          routerLinkActive="text-orange-500 font-bold"
          class="text-gray-700 hover:text-orange-500 transition-colors"
        >
          Alianzas
        </a>
        <a
          routerLink="/blog"
          routerLinkActive="text-orange-500 font-bold"
          class="text-gray-700 hover:text-orange-500 transition-colors"
        >
          Blog
        </a>
      </div>

      <!-- Action buttons -->
      <div class="flex items-center space-x-4">
        <!-- Products button -->
        <a
          routerLink="/productos"
          class="hidden md:block bg-purple-700 hover:bg-purple-800 text-white py-2 px-4 rounded-md transition-colors"
        >
          Ver Productos
        </a>

        <!-- Contact button -->
        <a
          routerLink="/contacto"
          class="hidden md:block border border-purple-700 text-purple-700 hover:bg-purple-50 py-2 px-4 rounded-md transition-colors"
        >
          Hablemos!
        </a>

        <!-- Login button -->
        <div class="flex items-center">
          <a
            routerLink="/login"
            class="flex items-center space-x-2 text-gray-700 hover:text-purple-700"
          >
            <span class="hidden md:inline">Inicia Sesión</span>
          </a>
        </div>

        <!-- Language selector -->
        <button class="text-gray-700 hover:text-purple-700 p-2">
          <fa-icon [icon]="faGlobe" size="lg"></fa-icon>
        </button>
      </div>

      <!-- Mobile menu button (only visible on small screens) -->
      <button
        class="lg:hidden text-gray-700 hover:text-purple-700 p-2"
        (click)="toggleMobileMenu()"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </nav>

    <!-- Mobile menu (only visible when toggled) -->
    <app-mobile-menu *ngIf="isMobileMenuOpen" (close)="closeMobileMenu()"></app-mobile-menu>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `
  ]
})
export class NavbarComponent {
  faGlobe = faGlobe;
  isMobileMenuOpen = false;

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    if (this.isMobileMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
    document.body.classList.remove('overflow-hidden');
  }
}
