// En AddProductsComponent (o el componente que administre el dashboard)
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddFormComponent } from '../add-form/add-form.component'; // ajusta la ruta según corresponda
import { faSearch, faPlus } from '@fortawesome/free-solid-svg-icons';

interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
  marca: string;
  categoria: string;
  etiquetas: string[];
}


@Component({
  selector: 'app-add-products',
  standalone: true,
  imports: [CommonModule, FormsModule, FontAwesomeModule, AddFormComponent],
  template: `
    <div class="p-6 bg-gray-50 min-h-[86dvh]">
      <!-- Encabezado con búsqueda y botón de añadir -->
      <div class="flex flex-col sm:flex-row items-center justify-between mb-6">
        <div class="flex items-center w-full sm:w-1/2 mb-4 sm:mb-0">
          <fa-icon [icon]="faSearch" class="text-gray-600 mr-2"></fa-icon>
          <input type="text"
                 [(ngModel)]="searchTerm"
                 placeholder="Buscar producto..."
                 class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-purple-500" />
        </div>
        <button (click)="mostrarModal = true"
                class="flex items-center bg-purple-500 hover:bg-purple-700 text-white font-semibold px-4 py-2 rounded-md transition-all">
          <fa-icon [icon]="faPlus" class="mr-2"></fa-icon>
          Añadir Nuevo
        </button>
      </div>

      <!-- Tabla de productos (con scroll) -->
      <div class="bg-white shadow rounded-lg overflow-auto max-h-96">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-purple-500">
            <tr>
              <th class="px-4 py-2 text-left text-white font-medium">ID</th>
              <th class="px-4 py-2 text-left text-white font-medium">Nombre</th>
              <th class="px-4 py-2 text-left text-white font-medium">Descripción</th>
              <th class="px-4 py-2 text-left text-white font-medium">Precio</th>
              <th class="px-4 py-2 text-left text-white font-medium">Marca</th>
              <th class="px-4 py-2 text-left text-white font-medium">Categoría</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-100">
            <tr *ngFor="let producto of filteredProducts()" class="hover:bg-gray-50 transition-colors">
              <td class="px-4 py-2">{{ producto.id }}</td>
              <td class="px-4 py-2">{{ producto.nombre }}</td>
              <td class="px-4 py-2">{{ producto.descripcion }}</td>
              <td class="px-4 py-2">$ {{ producto.precio | number:'1.2-2' }}</td>
              <td class="px-4 py-2">{{ producto.marca }}</td>
              <td class="px-4 py-2">{{ producto.categoria }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Mostrar el modal de formulario cuando corresponda -->
    <app-add-form *ngIf="mostrarModal"
                  (onAddProduct)="agregarProducto($event)"
                  (onClose)="mostrarModal = false"></app-add-form>
  `,
  styles: []
})
export class AddProductsComponent {
  faSearch = faSearch;
  faPlus = faPlus;
  searchTerm: string = '';
  mostrarModal: boolean = false;

  // Array de productos inicial
  productos = [
    {
      id: 1,
      nombre: 'Laptop Profesional',
      descripcion: 'Potente y ligera, ideal para el trabajo.',
      precio: 1499.99,
      imagen: 'Producto1.png',
      marca: 'Dell',
      categoria: 'Computadoras',
      etiquetas: ['Nuevo', 'Popular']
    },
    {
      id: 2,
      nombre: 'Smartphone de Alta Gama',
      descripcion: 'Tecnología de punta en un diseño elegante.',
      precio: 999.99,
      imagen: 'Producto2.png',
      marca: 'Samsung',
      categoria: 'Electrónica',
      etiquetas: ['Oferta']
    },
    {
      id: 3,
      nombre: 'Auriculares Inalámbricos',
      descripcion: 'Sonido envolvente y cancelación de ruido activa.',
      precio: 199.99,
      imagen: 'Producto3.png',
      marca: 'HP',
      categoria: 'Accesorios',
      etiquetas: ['Recomendado']
    }
  ];

  // Función para filtrar productos según el término de búsqueda
  filteredProducts(): Producto[] {
    return this.productos.filter(producto =>
      producto.nombre.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      producto.marca.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      producto.categoria.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  // Agrega el producto recibido al array y cierra el modal
  agregarProducto(nuevoProducto: Producto) {
    this.productos.push(nuevoProducto);
    this.mostrarModal = false;
  }
}
