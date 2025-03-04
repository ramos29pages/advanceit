import { Component, Output, EventEmitter } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-mobile-menu',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <div class="fixed inset-0 bg-black bg-opacity-50 z-40" (click)="close.emit()"></div>
    <div class="fixed top-0 right-0 h-full w-64 bg-white z-50 shadow-lg transform transition-transform duration-300 ease-in-out">
      <div class="p-4 border-b">
        <button class="float-right text-gray-500" (click)="close.emit()">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div class="clear-both"></div>
      </div>

      <div class="flex flex-col p-4">
        <a
          routerLink="/inicio"
          routerLinkActive="text-orange-500 font-bold"
          class="py-2 text-gray-700 hover:text-orange-500 transition-colors"
          (click)="close.emit()"
        >
          Inicio
        </a>
        <a
          routerLink="/servicios"
          routerLinkActive="text-orange-500 font-bold"
          class="py-2 text-gray-700 hover:text-orange-500 transition-colors"
          (click)="close.emit()"
        >
          Servicios
        </a>
        <a
          routerLink="/nosotros"
          routerLinkActive="text-orange-500 font-bold"
          class="py-2 text-gray-700 hover:text-orange-500 transition-colors"
          (click)="close.emit()"
        >
          Nosotros
        </a>
        <a
          routerLink="/alianzas"
          routerLinkActive="text-orange-500 font-bold"
          class="py-2 text-gray-700 hover:text-orange-500 transition-colors"
          (click)="close.emit()"
        >
          Alianzas
        </a>
        <a
          routerLink="/blog"
          routerLinkActive="text-orange-500 font-bold"
          class="py-2 text-gray-700 hover:text-orange-500 transition-colors"
          (click)="close.emit()"
        >
          Blog
        </a>

        <div class="border-t mt-4 pt-4">
          <a
            routerLink="/productos"
            class="block w-full bg-purple-700 hover:bg-purple-800 text-white py-2 px-4 rounded-md transition-colors text-center mb-3"
            (click)="close.emit()"
          >
            Ver Productos
          </a>

          <a
            routerLink="/contacto"
            class="block w-full border border-purple-700 text-purple-700 hover:bg-purple-50 py-2 px-4 rounded-md transition-colors text-center mb-3"
            (click)="close.emit()"
          >
            Hablemos!
          </a>

          <a
            routerLink="/login"
            class="block w-full text-center py-2 text-gray-700 hover:text-purple-700"
            (click)="close.emit()"
          >
            Inicia Sesión
          </a>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        display: contents;
      }
    `
  ]
})
export class MobileMenuComponent {
  @Output() close = new EventEmitter<void>();
}
