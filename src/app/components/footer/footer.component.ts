import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-footer',
  imports: [FontAwesomeModule],
  template: `
    <section class="bg-linear-to-b from-purple-300 to-purple-900">
      <!-- <img
        src="https://cdn.prod.website-files.com/636a549426aa8438b3b45fa8/63892c7c3562b3babf615793_white-bg-ornament.svg"
        alt=""
        srcset="
          https://cdn.prod.website-files.com/636a549426aa8438b3b45fa8/63892c7c3562b3babf615793_white-bg-ornament.svg
        "
      /> -->
    </section>
    <footer class="relative bg-linear-to-b from-purple-300 to-purple-900 text-white">
      <!-- Patrón en la parte superior -->
      <!-- <div class="absolute top-0 left-0 w-full h-auto"
        style="background: url('https://cdn.prod.website-files.com/636a549426aa8438b3b45fa8/6397864739d978c73315e760_blue-pattern-01.svg') no-repeat center top;
               background-size: cover; height: 150px;">
       </div> -->

      <!-- Contenedor principal -->
      <div class="relative pt-10 pb-8 max-w-6xl mx-auto">
        <hr class="my-8 border-gray-500" />
        <!-- Se agrega justify-items-center para centrar en mobile y luego se restaura la alineación en md -->
        <div
          class="grid grid-cols-1 justify-items-center text-lg md:grid-cols-5 gap-8"
        >
          <!-- Columna 1: Logo e información -->
          <div class="text-center md:text-left">
            <!-- Logo (ajusta la ruta y tamaño a tu preferencia) -->
            <img
              src="logo.png"
              alt="Advance Technologies Logo"
              class="h-8 mb-4 mx-auto md:mx-0"
            />
            <!-- Texto “Follow Us” o íconos de redes (opcional) -->
            <p class="mb-2 font-bold">Follow Us</p>
            <div class="flex space-x-3 mb-6 justify-center md:justify-start">
              <!-- Ejemplo de íconos de redes sociales -->
              <a href="#" target="_blank" class="hover:text-gray-300">
                <img
                  src="https://img.icons8.com/color/48/facebook.png"
                  alt="facebook"
                />
              </a>
              <a href="#" target="_blank" class="hover:text-gray-300">
                <img
                  src="https://img.icons8.com/color/48/instagram-new--v1.png"
                  alt="instagram-new--v1"
                />
              </a>
              <a href="#" target="_blank" class="hover:text-gray-300">
                <img
                  src="https://img.icons8.com/color/48/linkedin.png"
                  alt="linkedin"
                />
              </a>
            </div>
          </div>

          <!-- Columna 2: Solutions -->
          <div class="text-center md:text-left">
            <h4 class="font-bold mb-4">Solutions</h4>
            <ul class="space-y-2 text-sm text-purple-100">
              <li>
                <a
                  routerLink="/solutions"
                  fragment="operations"
                  class="hover:underline"
                  >Operations</a
                >
              </li>
              <li>
                <a
                  routerLink="/solutions"
                  fragment="tech"
                  class="hover:underline"
                  >Tech</a
                >
              </li>
              <li>
                <a
                  routerLink="/solutions"
                  fragment="marketing"
                  class="hover:underline"
                  >Marketing</a
                >
              </li>
              <li>
                <a
                  routerLink="/solutions"
                  fragment="bpo"
                  class="hover:underline"
                  >BPO</a
                >
              </li>
              <li>
                <a
                  routerLink="/solutions"
                  fragment="sales"
                  class="hover:underline"
                  >Sales</a
                >
              </li>
            </ul>
          </div>

          <!-- Columna 3: About Us -->
          <div class="text-center md:text-left ">
            <h4 class="font-bold mb-4">About Us</h4>
            <ul class="space-y-2 text-sm text-purple-200">
              <li>
                <a
                  routerLink="/nosotros"
                  fragment="historia"
                  class="hover:underline"
                  >Our History</a
                >
              </li>
              <li>
                <a
                  routerLink="/nosotros"
                  fragment="management-team"
                  class="hover:underline"
                  >Our Management Team</a
                >
              </li>
              <li>
                <a
                  routerLink="/nosotros"
                  fragment="sales-team"
                  class="hover:underline"
                  >Our Sales Team</a
                >
              </li>
              <li>
                <a
                  routerLink="/nosotros"
                  fragment="mailing-address"
                  class="hover:underline"
                  >Mailing Address</a
                >
              </li>
            </ul>
          </div>

          <!-- Columna 4: Resources + Información de contacto -->
          <div class="text-center md:text-left">
            <h4 class="font-bold mb-4">Resources</h4>
            <ul class="space-y-2 text-sm mb-4 text-gray-200">
              <li class="hover:font-bold hover:text-white">
                <a routerLink="/blog" class="hover:underline">Blog</a>
              </li>
              <li class="hover:font-bold hover:text-white">
                <a
                  routerLink="/resources"
                  fragment="case-studies"
                  class="hover:underline"
                  >Case Studies</a
                >
              </li>
              <li class="hover:font-bold hover:text-white">
                <a
                  routerLink="/resources"
                  fragment="partners"
                  class="hover:underline"
                  >Partners</a
                >
              </li>
              <li>
                <a
                  routerLink="/resources"
                  fragment="faq"
                  class="hover:underline"
                  >FAQ</a
                >
              </li>
            </ul>
          </div>

          <!-- Columna 5: Contacto -->
          <div class="text-center md:text-left">
            <!-- Datos de contacto -->
            <p class="text-sm mb-1">sales&#64;advanceit.com</p>
            <p class="text-sm mb-1">hiring&#64;advanceit.com</p>
            <p class="text-sm mb-1">(1) 888 323-XXXX</p>
            <p class="text-sm">
              Bogotá Colombia 500067,<br />
              Cra 76 # 45 -45
            </p>
          </div>
        </div>

        <!-- Barra inferior: ubicaciones y derechos -->
        <hr class="my-8 border-gray-500" />
        <div
          class="flex flex-col md:flex-row items-center justify-between text-sm text-gray-300"
        >
          <!-- Ubicaciones -->
          <div
            class="flex flex-wrap items-center space-x-3 mb-4 md:mb-0 justify-center md:justify-start"
          >
            <span class="font-bold uppercase text-white mr-2"
              >Our Locations</span
            >
            <a routerLink="/locations" fragment="usa" class="hover:underline"
              >United States</a
            >
            <a
              routerLink="/locations"
              fragment="colombia"
              class="hover:underline"
              >Colombia</a
            >
            <a routerLink="/locations" fragment="mexico" class="hover:underline"
              >Mexico</a
            >
          </div>

          <!-- Derechos y links legales -->
          <div class="text-center md:text-right text-xs text-gray-400">
            © 2025 Advance Technologies projects. All rights reserved.
            <br class="md:hidden" />
            <a routerLink="/terms" class="hover:underline mx-2"
              >Terms and Privacy</a
            >
            |
            <a routerLink="/sitemap" class="hover:underline ml-2">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  `,
  styleUrl: './footer.component.css',
})
export class FooterComponent {}
