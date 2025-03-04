import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="hero-sectionS bg-radial-white-purple">
      <div class="container mx-auto px-4 py-16">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div class="text-center md:text-left px-4">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">
              ¿Listo para impulsar tu negocio?
            </h2>
            <p class="text-lg md:text-xl text-gray-700 mb-6">
              Estamos aquí para ayudarte a alcanzar la excelencia tecnológica.
              Nuestro equipo de expertos trabajará contigo para diseñar e
              implementar soluciones que potencien tus operaciones, incrementen
              tu productividad y te diferencien en el mercado.
            </p>
            <p class="text-md text-gray-700">
              No dejes pasar la oportunidad de transformar tus desafíos en
              ventajas competitivas. Contáctanos y descubre cómo podemos llevar
              tu empresa al siguiente nivel.
            </p>
          </div>

          <!-- Sección Izquierda: Formulario de Contacto -->
          <div
            class="bg-white rounded-4xl shadow-xl p-8 border-4 border-purple-200 transform transition-transform hover:scale-105"
          >
            <h2 class="text-2xl font-bold mb-4">Contáctanos</h2>
            <form (ngSubmit)="enviarFormulario()">
              <!-- Nombre -->
              <div class="mb-4">
                <label class="block text-gray-700 mb-2" for="nombre"
                  >Nombre</label
                >
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  [(ngModel)]="nombre"
                  class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
                  placeholder="Ingresa tu nombre"
                  required
                />
              </div>

              <!-- Correo -->
              <div class="mb-4">
                <label class="block text-gray-700 mb-2" for="email"
                  >Correo electrónico</label
                >
                <input
                  type="email"
                  id="email"
                  name="email"
                  [(ngModel)]="email"
                  class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
                  placeholder="correo@ejemplo.com"
                  required
                />
              </div>

              <!-- Mensaje -->
              <div class="mb-4">
                <label class="block text-gray-700 mb-2" for="mensaje"
                  >Mensaje</label
                >
                <textarea
                  id="mensaje"
                  name="mensaje"
                  [(ngModel)]="mensaje"
                  class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
                  rows="4"
                  placeholder="Cuéntanos cómo podemos ayudarte..."
                  required
                ></textarea>
              </div>

              <!-- Botón Enviar -->
              <button
                type="submit"
                class="w-full bg-gradient-to-r from-purple-500 to-orange-400 hover:from-purple-800 hover:to-orange-600 text-white py-3 rounded-lg font-medium transition-transform transform hover:scale-105"
              >
                Enviar
              </button>
            </form>
          </div>

          <!-- Sección Derecha: Título y Descripción persuasiva -->
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .hero-sectionS {
        background: radial-gradient(circle at center, white 40%, #f3e8ff 60%);
        min-height: calc(100vh - 64px);
        position: relative;
        overflow: hidden;
      }
    `,
  ],
})
export class ContactoComponent {
  nombre: string = '';
  email: string = '';
  mensaje: string = '';

  enviarFormulario(): void {
    // Aquí puedes implementar la lógica para enviar el formulario
    console.log('Formulario enviado:', {
      nombre: this.nombre,
      email: this.email,
      mensaje: this.mensaje,
    });
    // Resetea o navega a otra página si es necesario
  }
}
