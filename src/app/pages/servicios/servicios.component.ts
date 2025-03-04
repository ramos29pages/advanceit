import { Component } from '@angular/core';
import { FaIconLibrary, FaIconComponent } from '@fortawesome/angular-fontawesome';
import {
  faChevronDown,
  faChevronUp,
  faDesktop,
  faCloud,
  faShieldAlt,
  faHeadset,
  faProjectDiagram
} from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { CommonModule } from '@angular/common';

interface Servicio {
  titulo: string;
  descripcion: string;
  puntos: string[];
  icono: IconDefinition;
}

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [FaIconComponent, CommonModule],
  template: `
    <div class="hero-sectionS bg-radial-white-purple">
      <div class="container mx-auto px-4 py-16 max-w-7xl">

        <!-- Encabezado -->
        <div class="text-center mb-12">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">Nuestros Servicios</h1>
          <p class="text-lg text-gray-700 max-w-3xl mx-auto">
            Ofrecemos soluciones integrales para impulsar la eficiencia, la seguridad y el crecimiento tecnológico de tu empresa.
          </p>
        </div>

        <!-- Acordeón de servicios -->
        <div *ngFor="let servicio of servicios; let i = index"
             class="bg-white rounded-xl shadow-lg p-6 mb-4 transition-transform hover:scale-[1.01]"
             >
          <!-- Encabezado del servicio -->
          <div class="flex justify-between items-center cursor-pointer" (click)="toggleServicio(i)">
            <div class="flex items-center">
              <fa-icon [icon]="servicio.icono" class="text-2xl mr-2"></fa-icon>
              <h2 class="text-xl font-semibold text-gray-800">
                {{ servicio.titulo }}
              </h2>
            </div>
            <fa-icon
              [icon]="isExpanded(i) ? faChevronUp : faChevronDown"
              class="text-gray-500 text-xl"
            ></fa-icon>
          </div>

          <!-- Contenido expandible -->
          <div *ngIf="isExpanded(i)" class="mt-4 text-gray-700 text-justify">
            <p class="mb-2">{{ servicio.descripcion }}</p>
            <ul class="list-disc list-inside space-y-2">
              <li *ngFor="let punto of servicio.puntos">{{ punto }}</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  `,
  styles: [`
    .hero-sectionS {
      background: radial-gradient(circle at center, white 0%, #f3e8ff 60%, #e9d5ff 100%);
      min-height: calc(100vh - 64px);
      position: relative;
      overflow: hidden;
    }
  `]
})
export class ServiciosComponent {
  // Íconos para expandir/colapsar
  faChevronDown = faChevronDown;
  faChevronUp = faChevronUp;

  // Control del acordeón
  indiceSeleccionado: number | null = null;

  // Definición de los servicios con íconos
  servicios: Servicio[] = [
    {
      titulo: 'Aprovisionamiento de hardware y gestión de activos de TI',
      descripcion: 'Garantizamos una implementación y gestión de hardware sin inconvenientes para las empresas, lo que abarca:',
      puntos: [
        'Administración y seguimiento: gestión del ciclo de vida completo de los activos de TI, lo que garantiza la visibilidad y el control.',
        'Informes y análisis: información en tiempo real sobre la utilización, el rendimiento y el estado del ciclo de vida del hardware.',
        'Solución de problemas y mantenimiento: respuesta rápida y diagnóstico remoto para minimizar el tiempo de inactividad.',
        'Soporte de garantía local: gestión de reclamos de garantía en el sitio y de forma remota con los principales fabricantes.',
        'Eliminación y reciclaje de activos: desmantelamiento seguro y eliminación responsable con el medio ambiente de los activos de TI.',
        'Adquisiciones y logística globales: obtención y entrega eficientes de equipos de TI en todo el mundo.'
      ],
      icono: faDesktop
    },
    {
      titulo: 'Software como servicio (SaaS)',
      descripcion: 'Ofrecemos licencias, implementación y soporte para las principales soluciones de software:',
      puntos: [
        'Microsoft Office 365 y Power BI: colaboración optimizada, inteligencia empresarial y herramientas de productividad.',
        'Adobe Sign y Creative Cloud: soluciones de firma digital y software creativo para empresas.',
        'Aplicaciones empresariales basadas en la nube: implementación e integración de plataformas SaaS adaptadas a las necesidades empresariales.',
        'Optimización y cumplimiento de licencias: garantía de un uso rentable del software y del cumplimiento normativo.'
      ],
      icono: faCloud
    },
    {
      titulo: 'Soluciones de ciberseguridad y nube',
      descripcion: 'Ayudamos a las organizaciones a transitar la transformación digital con servicios de seguridad y nube sólidos:',
      puntos: [
        'Infraestructura en la nube: experiencia en Azure, AWS y Google Cloud para implementaciones escalables en la nube.',
        'Marcos de ciberseguridad: soluciones de seguridad de extremo a extremo, que incluyen detección de amenazas, protección de puntos finales y evaluaciones de vulnerabilidad.',
        'Copia de seguridad en la nube y recuperación ante desastres: planificación de la continuidad empresarial con estrategias de copia de seguridad seguras.',
        'Gestión de identidad y acceso: protección de la TI empresarial con inicio de sesión único (SSO) y autenticación multifactor (MFA).'
      ],
      icono: faShieldAlt
    },
    {
      titulo: 'Servicios de soporte técnico y de asistencia de TI',
      descripcion: 'Nuestro equipo de soporte dedicado brinda asistencia de TI en tiempo real para garantizar operaciones comerciales ininterrumpidas:',
      puntos: [
        'Soporte técnico las 24 horas, los 7 días de la semana: soporte remoto y en el sitio para la resolución de problemas.',
        'Estructura de soporte por niveles: Nivel 1 (resolución de problemas básicos), Nivel 2 (diagnóstico avanzado), Nivel 3 (ingenieros especializados).',
        'Asistencia de TI impulsada por IA: aprovechamiento de chatbots impulsados por IA para soporte instantáneo y automatización de tickets.',
        'Gestión del flujo de servicio: seguimiento de incidentes, resolución de tickets y mejora continua del servicio.'
      ],
      icono: faHeadset
    },
    {
      titulo: 'Proyectos de TI y tecnología empresarial',
      descripcion: 'Ofrecemos soluciones de TI de servicio completo para empresas que expanden o actualizan sus operaciones:',
      puntos: [
        'Configuración de TI de nueva oficina: implementación integral de infraestructura de TI, que incluye redes y cableado estructurado.',
        'Soluciones de AV y salas de conferencias: videoconferencia (Zoom Rooms, Microsoft Teams, Cisco Webex), sistemas de reserva de salas, paredes de video, monitores de pantalla y pizarrones interactivos, integraciones de audio y automatización IoT.',
        'Soluciones para centros de datos y salas de servidores: bastidores de servidores personalizados, sistemas de refrigeración y soluciones de energía redundante.',
        'Reubicación y expansión de TI: migración fluida de activos de TI durante reubicaciones de oficinas o expansiones globales.'
      ],
      icono: faProjectDiagram
    }
  ];

  constructor(library: FaIconLibrary) {
    library.addIcons(
      faChevronDown,
      faChevronUp,
      faDesktop,
      faCloud,
      faShieldAlt,
      faHeadset,
      faProjectDiagram
    );
  }

  /**
   * Alterna la expansión/contracción del acordeón según el índice.
   */
  toggleServicio(index: number) {
    this.indiceSeleccionado = this.indiceSeleccionado === index ? null : index;
  }

  /**
   * Indica si el acordeón en el índice dado está expandido.
   */
  isExpanded(index: number): boolean {
    return this.indiceSeleccionado === index;
  }

  /**
   * Retorna el color de borde para el acordeón según el índice.
   * Índices pares usan orange-600 (#F98A37) e impares usan purple-700 (#7E3B92)
   */
  getBorderColor(index: number): string {
    return index % 2 === 0 ? '#F98A37' : '#7E3B92';
  }
}
