import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
}

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="hero-sectionS bg-radial-white-purple">
      <div class="container mx-auto px-4 py-16">
        <!-- Encabezado de la tienda -->
        <!-- <div class="text-center mb-12">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">Tienda de Productos</h1>
          <p class="text-lg text-gray-700 max-w-3xl mx-auto">
            Explora nuestra selección de productos destacados, diseñados para satisfacer las necesidades de tu negocio.
          </p>
        </div> -->
        <!-- Grid de productos -->
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div *ngFor="let producto of productos"
               class="bg-white rounded-4xl shadow-lg overflow-hidden transform transition-transform hover:scale-105">
            <img [src]="producto.imagen" [alt]="producto.nombre" class="w-full h-48 object-contain">
            <div class="p-4">
              <h2 class="text-xl font-semibold text-gray-800 mb-2">{{ producto.nombre }}</h2>
              <p class="text-gray-600 text-sm mb-4">{{ producto.descripcion }}</p>
              <div class="flex justify-between items-center">
                <span class="text-purple-700 font-bold text-lg">$ {{ producto.precio | number:'1.2-2' }}</span>
                <button class="bg-gradient-to-r from-purple-500 to-orange-400 hover:from-purple-800 hover:to-orange-600 text-white py-2 px-4 rounded-lg transition-transform transform hover:scale-105">
                  Comprar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .hero-sectionS {
      background: radial-gradient(circle at center, white 0%, #f3e8ff 60%, #e9d5ff 100%);
      min-height: 100vh;
      position: relative;
      overflow: hidden;
    }
  `]
})
export class ProductosComponent {
  productos: Producto[] = [
    {
      id: 1,
      nombre: 'Laptop Profesional',
      descripcion: 'Potente y ligera, ideal para el trabajo y la movilidad.',
      precio: 1499.99,
      imagen: 'Producto5.png'
    },
    {
      id: 2,
      nombre: 'Smartphone de Alta Gama',
      descripcion: 'Tecnología de punta en un diseño elegante.',
      precio: 999.99,
      imagen: 'Producto5.png'
    },
    {
      id: 3,
      nombre: 'Auriculares Inalámbricos',
      descripcion: 'Sonido envolvente y cancelación de ruido activa.',
      precio: 199.99,
      imagen: 'Producto5.png'
    },
    {
      id: 4,
      nombre: 'Monitor Ultra HD',
      descripcion: 'Visualiza cada detalle con una claridad increíble.',
      precio: 399.99,
      imagen: 'Producto5.png'
    },
    {
      id: 5,
      nombre: 'Teclado Mecánico',
      descripcion: 'Precisión y respuesta táctil para profesionales y gamers.',
      precio: 129.99,
      imagen: 'Producto5.png'
    },
    {
      id: 6,
      nombre: 'Mouse Inalámbrico',
      descripcion: 'Ergonómico y rápido, diseñado para largas jornadas.',
      precio: 59.99,
      imagen: 'Producto5.png'
    }
  ];
}
