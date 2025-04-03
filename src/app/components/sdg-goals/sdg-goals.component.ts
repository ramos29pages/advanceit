import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

/** Interfaz para cada objetivo (SDG Item) */
interface SdgGoal {
  title: string;
  image: string; // Ruta o URL de la imagen
  description: string; // Texto descriptivo
}

@Component({
  selector: 'app-sdg-goals',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-16 px-4">
      <div class="max-w-6xl mx-auto">
        <!-- Título principal (opcional) -->
        <h2
          class="text-xl md:text-2xl font-extrabold uppercase text-center mb-8 bg-gradient-to-r from-purple-500/50 via-pink-500/50 to-orange-500/50 text-white py-20"
        >
          Terms And Conditions
        </h2>

        <!-- Contenedor de 2 columnas: lista izquierda, contenido derecho -->
        <div class="grid grid-cols-1 md:grid-cols-[250px_auto] gap-8 sticky top-20">
          <!-- Columna Izquierda: Lista de objetivos -->
          <div>
            <ul class="space-y-2">
              <li
                *ngFor="let goal of sdgGoals; let i = index"
                (click)="selectGoal(i)"
                class="truncate"
                [class]="
                  'cursor-pointer p-2 border-l-4 ' +
                  (selectedIndex === i
                    ? 'border-purple-600 bg-purple-50 font-semibold'
                    : 'border-transparent hover:bg-gray-100')
                "
              >
                {{ goal.title }}
              </li>
            </ul>
          </div>

          <!-- Columna Derecha: Contenido del objetivo seleccionado -->
          <div>
            <div class="bg-white rounded-lg shadow p-6">
              <img
                [src]="sdgGoals[selectedIndex].image"
                [alt]="sdgGoals[selectedIndex].title"
                class="w-50 h-auto mb-4 object-cover rounded"
              />
              <h3 class="text-lg md:text-xl font-bold mb-2 text-purple-700">
                {{ sdgGoals[selectedIndex].title }}
              </h3>
              <p class="text-gray-700 leading-relaxed">
                {{ sdgGoals[selectedIndex].description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [],
})
export class SdgGoalsComponent {
  // Arreglo de objetivos. Ajusta textos, imágenes y títulos según tu necesidad
  sdgGoals: SdgGoal[] = [
    {
      title: 'POLÍTICA DE COOKIES DE ADVANCE TECHNOLOGY PROJECTS SAS',
      image:
        'logo.png',
      description: `1. Introducción
En cumplimiento de la normativa colombiana vigente, en especial lo establecido en la Ley 1581 de 2012 y sus decretos reglamentarios, Advance Technology Projects SAS informa a los usuarios de este sitio web sobre el uso de cookies y tecnologías afines. La presente política tiene como finalidad transparentar el tratamiento de la información recolectada mediante cookies, garantizando el derecho a la privacidad y a la protección de datos personales de nuestros usuarios.
2. ¿Qué son las Cookies?
Las cookies son pequeños archivos de texto que se almacenan en el dispositivo del usuario al visitar nuestro sitio web. Dichos archivos permiten reconocer el navegador o dispositivo en visitas posteriores, facilitando la navegación y mejorando la experiencia del usuario. Asimismo, contribuyen a la obtención de información estadística y al funcionamiento óptimo de determinadas funcionalidades del sitio.
3. Tipos de Cookies Utilizadas
•	Cookies Esenciales o Técnicas: Son necesarias para el correcto funcionamiento del sitio web y para prestar los servicios solicitados por el usuario.
•	Cookies de Análisis y Rendimiento: Permiten medir y analizar el uso del sitio web, mejorando su rendimiento y funcionalidades mediante el estudio del comportamiento del usuario.
•	Cookies de Publicidad: Se emplean para gestionar la oferta de contenidos publicitarios de terceros, adaptando los anuncios a los intereses del usuario.
4. Finalidad del Uso de Cookies
El uso de cookies en este sitio web tiene como objetivos:
•	Facilitar la navegación y el acceso a los servicios ofertados.
•	Recopilar información estadística que permita optimizar el diseño y contenido del sitio.
•	Personalizar la experiencia del usuario y mejorar la relevancia de la información y los anuncios presentados.
5. Consentimiento del Usuario
El usuario, al acceder y navegar en el sitio web de Advance Technology Projects SAS, otorga su consentimiento expreso para el uso de cookies, conforme a lo descrito en la presente política. En caso de que el usuario no desee aceptar el uso de cookies, podrá configurar su navegador para bloquear su instalación o eliminar aquellas que ya se encuentren instaladas. No obstante, es posible que algunas funcionalidades del sitio se vean afectadas.
6. Configuración y Eliminación de Cookies
La mayoría de los navegadores permiten gestionar las cookies mediante la configuración de sus opciones de privacidad. Se recomienda consultar el menú de configuración del navegador utilizado para conocer las opciones disponibles. El usuario puede, en cualquier momento, modificar o revocar su consentimiento respecto al uso de cookies, lo cual no afectará la legalidad del tratamiento basado en el consentimiento previamente otorgado.
7. Modificaciones a la Política de Cookies
Advance Technology Projects SAS se reserva el derecho de actualizar o modificar la presente política en cualquier momento, con el fin de adaptarla a novedades legislativas, tecnológicas o de cualquier otra índole. Se invita a los usuarios a revisar periódicamente esta política para estar informados de las posibles actualizaciones.
8. Información de Contacto
Para consultas o comentarios relacionados con el uso de cookies en este sitio web, por favor diríjase a:
Correo electrónico: info@advanceit.co
`,
    },
    {
      title: 'RESPONSABLE DEL TRATAMIENTO DE DATOS',
      image: 'logo.png',
      description: `This objective strives to guarantee food security and collaboration
        with food aid organizations, ensuring everyone has access to nutritious meals.`,
    },
    {
      title: 'TÉRMINOS Y CONDICIONES DE USO',
      image: 'logo.png',
      description: `We focus on improving health, safety, and well-being for communities,
        reducing risks and providing access to essential services.`,
    },
    {
      title: 'POLÍTICA DE HABEAS DATA Y PROTECCIÓN DE DATOS PERSONALES',
      image: 'logo.png',
      description: `We focus on improving health, safety, and well-being for communities,
        reducing risks and providing access to essential services.`,
    },
  ];

  selectedIndex: number = 0; // Por defecto, se muestra el primer objetivo

  selectGoal(index: number) {
    this.selectedIndex = index;
  }
}
