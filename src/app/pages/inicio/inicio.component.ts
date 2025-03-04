import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  FaIconLibrary,
  FaIconComponent,
} from '@fortawesome/angular-fontawesome';
import {
  faRocket,
  faChartLine,
  faHandSparkles,
  faBuilding,
  faCogs,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [RouterLink, FaIconComponent],
  template: `
    <div class="hero-sectionS">
      <div class="container mx-auto px-4 pt-16 pb-32">
        <!-- Sección superior: logo e íconos -->
        <div class="flex items-center justify-between mb-0">
          <img src="logo0.png" alt="Logo" class="h-12" />
          <div class="flex space-x-4">
            <fa-icon
              [icon]="faRocket"
              class="text-2xl text-purple-700"
            ></fa-icon>
            <fa-icon
              [icon]="faChartLine"
              class="text-2xl text-orange-500"
            ></fa-icon>
          </div>
        </div>

        <!-- Encabezados -->
        <div class="max-w-7xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl lg:text-5xl font-bold mb-8">
            Soluciones tecnológicas de élite para empresas que no aceptan menos
            que excelencia
          </h1>
          <p class="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Transformamos su infraestructura IT con un servicio de guante
            blanco, diseñado para anticipar y superar las demandas de su
            negocio.
          </p>
        </div>

        <!-- Grid de tarjetas y botón principal -->
        <!-- Grid de tarjetas y botón principal -->
        <!-- Grid de tarjetas y botón principal -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-0">
          <!-- Tarjeta Hardware -->
          <div
            class="bg-white rotate-350 rounded-2xl w-50 h-25 shadow-lg p-2 border-10 border-purple-200
           transform transition-transform hover:scale-105"
          >
            <h3 class="text-sm font-semibold text-gray-800 mb-1">Hardware</h3>
            <p class="text-gray-600 text-[9.5px]">
              Asegure una gestión impecable del ciclo de vida completo de su
              hardware.
            </p>
          </div>

          <!-- Botón CTA (sin cambios) -->
          <div class="flex items-center">
            <a
              routerLink="/servicios"
              class="py-6 px-16 text-white font-medium text-xl rounded-lg text-center inline-block
             bg-gradient-to-r from-purple-500 to-orange-400 hover:from-purple-800 hover:to-orange-600
             transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              ¡Empecemos el cambio!
            </a>
          </div>

          <!-- Tarjeta Asistente de IA -->
          <div
            class="bg-white rotate-10 rounded-2xl justify-self-end w-48 h-24 shadow-lg p-2 border-10 border-orange-200
           transform transition-transform hover:scale-105"
          >
            <h3 class="text-sm font-semibold text-gray-800 mb-1">
              Asistente de IA
            </h3>
            <p class="text-gray-600 text-[9.5px]">
              Compre y asesórese cuando desee con nuestro chatbot impulsado por
              IA.
            </p>
          </div>
        </div>

        <!-- Vista previa del dashboard -->
        <div
          class="bg-white rounded-xl shadow-xl overflow-hidden max-w-4xl mx-auto mb-16"
        >
          <img
            src="dash.png"
            alt="IT Management Dashboard"
            class="w-full h-auto"
          />
        </div>

        <!-- NUEVA SECCIÓN: Hexágonos en 2 filas x 5 columnas -->
        <section class="max-w-7xl mx-auto text-center mb-16">
          <h2 class="text-3xl font-bold mb-4">
            Nuestro Portafolio de Servicios IT de Clase Mundial.
          </h2>
          <p class="text-lg text-gray-700 mb-8">
            Soluciones Integrales para Impulsar la Eficiencia, Seguridad y
            Escalabilidad de su Empresa.
          </p>

          <!-- Grid con 2 filas y 5 columnas -->
          <div class="grid grid-rows-2 grid-cols-5 gap-8 justify-items-center">
            <!-- Hexágono 1 (fila 0, col 0) -->
            <div
              class="row-start-1 col-start-1 relative w-[220px] h-[190px] bg-white shadow-2xl
                     transform border-5 border-orange-200 transition-transform
                     hover:scale-105 clip-hex flex items-center justify-center p-8"
            >
              <div class="text-center">
                <h3 class="text-xl font-semibold text-orange-600 mb-2">
                  Gestión de Activos IT
                </h3>
                <p class="text-gray-600 text-sm">
                  Control total de inventarios y ciclo de vida de sus recursos
                  tecnológicos.
                </p>
              </div>
            </div>

            <!-- Hexágono 2 (fila 1, col 1) -->
            <div
              class="row-start-2 col-start-2 relative w-[220px] h-[190px] bg-white shadow-lg
                     transform border-5 border-purple-200 transition-transform
                     hover:scale-105 clip-hex flex items-center justify-center p-4"
            >
              <div class="text-center">
                <h3 class="text-xl font-semibold text-purple-700 mb-2">
                  Seguridad y Ciberseguridad
                </h3>
                <p class="text-gray-600 text-sm">
                  Proteja su infraestructura con soluciones adaptadas a los
                  riesgos actuales.
                </p>
              </div>
            </div>

            <!-- Hexágono 3 (fila 0, col 2) -->
            <div
              class="row-start-1 col-start-3 relative w-[220px] h-[190px] bg-white shadow-lg
                     transform border-5 border-orange-200 transition-transform
                     hover:scale-105 clip-hex flex items-center justify-center p-4"
            >
              <div class="text-center">
                <h3 class="text-xl font-semibold text-orange-600 mb-2">
                  Servicios en la Nube
                </h3>
                <p class="text-gray-600 text-sm">
                  Migración y optimización en la nube para escalabilidad y alto
                  rendimiento.
                </p>
              </div>
            </div>

            <!-- Hexágono 4 (fila 1, col 3) -->
            <div
              class="row-start-2 col-start-4 relative w-[220px] h-[190px] bg-white shadow-lg
                     transform border-5 border-purple-200 transition-transform
                     hover:scale-105 clip-hex flex items-center justify-center p-4"
            >
              <div class="text-center">
                <h3 class="text-xl font-semibold text-purple-700 mb-2">
                  Soporte 24/7
                </h3>
                <p class="text-gray-600 text-sm">
                  Respuesta inmediata y asistencia continua para mantener su
                  negocio en marcha.
                </p>
              </div>
            </div>

            <!-- Hexágono 5 (fila 0, col 4) -->
            <div
              class="row-start-1 col-start-5 relative w-[220px] h-[190px] bg-white shadow-lg
                     transform border-5 border-orange-200 transition-transform
                     hover:scale-105 clip-hex flex items-center justify-center p-4"
            >
              <div class="text-center">
                <h3 class="text-xl font-semibold text-orange-600 mb-2">
                  Transformación Digital
                </h3>
                <p class="text-gray-600 text-sm">
                  Innovación y automatización para un crecimiento sostenible en
                  la era digital.
                </p>
              </div>
            </div>
          </div>
        </section>

        <!-- Sección: ¿Por Qué las Empresas Líderes Confían en Advance Technology Projects? -->
        <section class="max-w-5xl mx-auto mt-16">
          <h2 class="text-center text-3xl font-bold mb-8">
            ¿Por Qué las Empresas Líderes Confían en Advance Technology
            Projects?
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- Bloque 1 -->
            <div
              class="bg-white rounded-xl shadow-lg p-6 flex flex-col items-start transform transition-transform hover:scale-105"
            >
              <fa-icon
                [icon]="faHandSparkles"
                class="text-purple-700 text-3xl mb-4"
              ></fa-icon>
              <h3 class="text-xl font-semibold mb-2">
                Servicio Exclusivo "White-Glove, Red-Carpet"
              </h3>
              <p class="text-gray-600 text-sm">
                Atención personalizada y proactiva, superando las expectativas
                del soporte IT tradicional.
              </p>
            </div>
            <!-- Bloque 2 -->
            <div
              class="bg-white rounded-xl shadow-lg p-6 flex flex-col items-start transform transition-transform hover:scale-105"
            >
              <fa-icon
                [icon]="faBuilding"
                class="text-purple-700 text-3xl mb-4"
              ></fa-icon>
              <h3 class="text-xl font-semibold mb-2">
                Experiencia Comprobada con Grandes Empresas
              </h3>
              <p class="text-gray-600 text-sm">
                Años de trayectoria sirviendo a multinacionales y Fortune 500,
                entendiendo la complejidad empresarial.
              </p>
            </div>
            <!-- Bloque 3 -->
            <div
              class="bg-white rounded-xl shadow-lg p-6 flex flex-col items-start transform transition-transform hover:scale-105"
            >
              <fa-icon
                [icon]="faCogs"
                class="text-purple-700 text-3xl mb-4"
              ></fa-icon>
              <h3 class="text-xl font-semibold mb-2">
                Soluciones Integrales y a la Medida
              </h3>
              <p class="text-gray-600 text-sm">
                Desde hardware hasta la nube y ciberseguridad, adaptamos
                soluciones a los objetivos específicos de su empresa.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  `,
  styles: [
    `
      .hero-sectionS {
        background: radial-gradient(circle at center, white 40%, #f3e8ff 60%);
        position: relative;
        overflow: hidden;
      }
      /* Clase para dar forma de hexágono */
      .clip-hex {
        clip-path: polygon(
          25% 0%,
          75% 0%,
          100% 50%,
          75% 100%,
          25% 100%,
          0% 50%
        );
      }
    `,
  ],
})
export class InicioComponent {
  // Íconos que uses en este componente
  faRocket = faRocket;
  faChartLine = faChartLine;
  faHandSparkles = faHandSparkles;
  faBuilding = faBuilding;
  faCogs = faCogs;

  constructor(library: FaIconLibrary) {
    library.addIcons(faRocket, faChartLine, faHandSparkles, faBuilding, faCogs);
  }
}
