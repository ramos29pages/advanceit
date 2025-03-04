import { Component } from '@angular/core';

@Component({
  selector: 'app-nosotros',
  standalone: true,
  template: `
    <div class="hero-sectionS">
      <div class="container mx-auto px-4 py-16 relative z-10">
        <div class="max-w-5xl mx-auto">
          <!-- Título principal -->
          <h1 class="text-4xl md:text-5xl font-bold text-center mb-8">
            ¿Quiénes Somos?
          </h1>

          <!-- Contenido -->
          <p class="text-lg text-gray-700 text-justify mb-4">
            <strong>Advance Technology Projects</strong> nace de una visión clara: redefinir el estándar de servicio IT para las organizaciones más exigentes del mundo. No somos simplemente proveedores; somos socios estratégicos que comprenden que en el mundo empresarial actual, la tecnología no es solo una herramienta, es el diferenciador competitivo que determinará el éxito.
          </p>
          <p class="text-lg text-gray-700 text-justify mb-4">
            Nuestra filosofía es simple pero poderosa: combinar <em>expertise</em> técnico incomparable con un servicio personalizado que hace que incluso las transformaciones tecnológicas más complejas parezcan sencillas. Cada miembro de nuestro equipo es un especialista apasionado por la excelencia, y sabe mantener su infraestructura tecnológica en su máximo rendimiento.
          </p>
          <p class="text-lg text-gray-700 text-justify">
            Cuando las grandes empresas enfrentan desafíos tecnológicos que parecen imposibles, nosotros somos quienes convertimos esos desafíos en oportunidades.
          </p>

          <!-- Botón CTA -->
          <div class="flex items-center justify-center mt-8">
            <a
              routerLink="/servicios"
              class="py-6 px-16 text-white font-medium text-2xl rounded-lg text-center inline-block
                     bg-gradient-to-r from-purple-500 to-orange-400 hover:from-purple-800 hover:to-orange-600
                     transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              ¡Empecemos el cambio!
            </a>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .hero-sectionS {
      position: relative;
      background: radial-gradient(circle at center, white 40%, #f3e8ff 60%);
      min-height: calc(100vh - 64px);
      overflow: hidden;
    }

    /* Pseudo-elemento para colocar el logo al fondo */
    .hero-sectionS::before {
      content: "";
      position: absolute;
      /* Ocupa todo el contenedor */
      inset: 0;
      /* Imagen de fondo sin repetir */
      background: url("/logo0.png") no-repeat;
      /* Ajusta el tamaño del logo */
      background-size: 700px auto;
      /* Ubícalo en la parte inferior izquierda */
      background-position: -5rem 1rem;
      /* Transparencia al 90% */
      opacity: 0.08;
      z-index: 0;
    }

    /* Asegura que el contenido quede por encima de la imagen de fondo */
    .hero-sectionS > .container {
      position: relative;
      z-index: 1;
    }
  `]
})
export class NosotrosComponent {}





