import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// Importamos los íconos que usaremos
import { faCogs, faShieldAlt, faLaptopCode, faUsers } from '@fortawesome/free-solid-svg-icons';

interface BackOfficeItem {
  title: string;
  description: string;
  icon: any;  // Referencia al ícono de FontAwesome
  imageUrl: string;  // Imagen de fondo
}

@Component({
  selector: 'app-back-office-functions',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  template: `
    <section class="py-16 px-4">
      <div class="max-w-6xl mx-auto">
        <!-- Título principal -->
        <h2 class="text-2xl md:text-3xl font-extrabold uppercase text-purple-700 mb-8">
          Common Back-Office Functions
        </h2>

        <!-- Grid de tarjetas -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <!-- Tarjeta por cada elemento -->
          <div *ngFor="let item of items" class="relative rounded-lg overflow-hidden shadow-lg">
            <!-- Imagen de fondo -->
            <img
              [src]="item.imageUrl"
              alt="Background"
              class="w-full h-56 object-cover"
            />
            <!-- Overlay negro -->
            <div class="absolute inset-0 bg-opacity-90"></div>

            <!-- Contenido (icono, titulo, descripción) -->
            <div class="absolute inset-0 flex flex-col justify-end p-4 text-white">
              <!-- Ícono -->
              <fa-icon [icon]="item.icon" class="text-2xl mb-2"></fa-icon>
              <!-- Título -->
              <h3 class="font-semibold text-lg mb-1">
                {{ item.title }}
              </h3>
              <!-- Descripción -->
              <p class="text-sm">
                {{ item.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class BackOfficeFunctionsComponent {
  // Íconos Font Awesome (puedes cambiarlos a los que gustes)
  faCogs = faCogs;
  faShieldAlt = faShieldAlt;
  faLaptopCode = faLaptopCode;
  faUsers = faUsers;

  // Lista de elementos a mostrar
  items: BackOfficeItem[] = [
    {
      title: 'Operations',
      description: 'Skilled professionals properly manage resources and address supply chain challenges to boost company productivity.',
      icon: this.faCogs,
      imageUrl: 'https://cdn.prod.website-files.com/636a549426aa8438b3b45fa8/63a3b1323e5c9a4bfa145293_Rectangle-95-1.jpg'
    },
    {
      title: 'Compliance',
      description: 'Quality is ensured by implementing the right laws, regulations, and standards.',
      icon: this.faShieldAlt,
      imageUrl: 'https://cdn.prod.website-files.com/636a549426aa8438b3b45fa8/63a3b1323e5c9a4bfa145293_Rectangle-95-1.jpg'
    },
    {
      title: 'Technology',
      description: 'Create value from world-class tech development to simplify your operations and meet industry needs.',
      icon: this.faLaptopCode,
      imageUrl: 'https://cdn.prod.website-files.com/636a549426aa8438b3b45fa8/63a3b1323e5c9a4bfa145293_Rectangle-95-1.jpg'
    },
    {
      title: 'Human Resources',
      description: 'Accelerate your recruitment activity with a back office team that takes care of the entire process.',
      icon: this.faUsers,
      imageUrl: 'https://cdn.prod.website-files.com/636a549426aa8438b3b45fa8/63a3b1323e5c9a4bfa145293_Rectangle-95-1.jpg'
    }
  ];
}
