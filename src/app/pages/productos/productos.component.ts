import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faShoppingCart, faEye, faSearch, faLayerGroup, faTag, faCopyright, faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import { FooterComponent } from "../../components/footer/footer.component";


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
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, FormsModule, FontAwesomeModule, FooterComponent],
template: `
    <div class="min-h-screen bg-linear-to-r from-20% to-purple-50 py-8 pt-18">
      <div class="container mx-auto px-4">
        <!-- <div class="mb-8 text-center">
          <h1 class="text-4xl md:text-5xl font-bold text-purple-700 mb-4">
            Productos
          </h1>
          <p class="text-lg text-orange-600 underline max-w-3xl mx-auto cursor-pointer font-bold ">
            Explorar Marcas
          </p>
        </div> -->

        <div class="flex flex-col md:flex-row gap-8">
          <!-- Sidebar de filtros -->
          <aside class="w-full md:w-1/4 bg-white rounded-lg shadow p-6">
            <!-- Buscador -->
            <div class="mb-6">
              <label class="block text-gray-700 font-semibold mb-2"
                     for="search">Buscar <fa-icon [icon]="faSearch"></fa-icon></label>
              <input id="search"
                     type="text"
                     [(ngModel)]="searchTerm"
                     class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-purple-500"
                     placeholder="Nombre, marca o categoría" />
            </div>
            <!-- Filtro por Categoría -->
            <div class="mb-6">
              <h4 class="text-lg font-semibold text-gray-700 mb-3">Categorías</h4>
              <div *ngFor="let cat of categorias" class="flex items-center mb-2">
                <input type="checkbox"
                       [id]="cat"
                       (change)="onFiltroCategoria(cat, $event)"
                       class="form-checkbox h-5 w-5 text-purple-600 rounded focus:ring-purple-500 border-gray-300" />
                <label [for]="cat" class="ml-2 text-sm text-gray-600 cursor-pointer">
                  {{ cat }}
                </label>
              </div>
            </div>
            <!-- Filtro por Marca -->
            <div class="mb-6">
              <h4 class="text-lg font-semibold text-gray-700 mb-3">Marcas</h4>
              <div *ngFor="let m of marcas" class="flex items-center mb-2">
                <input type="checkbox"
                       [id]="m"
                       (change)="onFiltroMarca(m, $event)"
                       class="form-checkbox h-5 w-5 text-purple-600 rounded focus:ring-purple-500 border-gray-300" />
                <label [for]="m" class="ml-2 text-sm text-gray-600 cursor-pointer">
                  {{ m }}
                </label>
              </div>
            </div>
          </aside>

          <!-- Grid de productos -->
          <div class="w-full md:w-3/4">
            <div class="mb-4 text-gray-700">
              <p>
                Mostrando {{ productosFiltrados.length }} resultados de
                {{ productos.length }} productos.
              </p>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div *ngFor="let producto of productosFiltrados"
                   class="bg-white rounded-4xl shadow-lg overflow-hidden transform transition-transform hover:scale-105 flex flex-col">
                <img [src]="producto.imagen"
                     [alt]="producto.nombre"
                     class="w-full h-48 object-contain p-4" />
                <div class="p-4 flex flex-col flex-grow">
                  <h2 class="text-xl font-semibold text-gray-800 mb-2">
                    {{ producto.nombre }}
                  </h2>
                  <p class="text-gray-600 text-sm mb-4">
                    {{ producto.descripcion }}
                  </p>
                  <div class="flex gap-4 my-2">
                    <span class="bg-orange-100 text-orange-700 text-xs font-semibold px-2 py-1 rounded-lg">
                    <fa-icon [icon]="faCopririgth"></fa-icon>
                    {{producto.marca}}</span>
                    <span class=" text-purple-700 text-xs font-semibold px-2 py-1 rounded-full">
                    <fa-icon [icon]="faLayerGroup"></fa-icon>
                    {{producto.categoria}}
                      </span>
                  </div>
                  <div class="flex flex-wrap gap-2 mb-4">
                    <span *ngFor="let tag of producto.etiquetas"
                          class="bg-purple-100 text-purple-700 text-xs font-semibold px-2 py-1 rounded-full">
                          <fa-icon [icon]="faTag"></fa-icon>
                      {{ tag }}
                    </span>
                  </div>
                  <div class="flex justify-between items-center mt-auto">
                    <span class="text-purple-700 font-bold text-lg">
                      $ {{ producto.precio | number:'1.2-2' }}
                    </span>
                    <span>
                    <fa-icon [icon]="faEye" class=" text-slate-600 cursor-pointer hover:scale-110"></fa-icon>
                    </span>
                    <button class="bg-gradient-to-r bg-purple-500 hover:bg-purple-800 text-white py-2 px-4 rounded-lg transition-transform transform hover:scale-105 hover:-rotate-5">
                      Comprar
                      <fa-icon [icon]="faShoppingCart"></fa-icon>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <app-footer></app-footer>
  `,
  styles: [`
    .bg-radial-white-purple {
      background: radial-gradient(circle at center, white 0%, #f3e8ff 60%, #e9d5ff 100%);
    }
  `]
})
export class ProductosComponent {
  // Propiedades para filtro
  searchTerm: string = '';
  filtrosCategorias: string[] = [];
  filtrosMarcas: string[] = [];

  faShoppingCart = faShoppingCart;
  faEye = faEye;
  faSearch = faSearch;
  faLayerGroup = faLayerGroup;
  faTag = faTag;
  faCopririgth = faCopyright;
  faCodeBranch = faCodeBranch;

  // Arrays de filtros disponibles
  categorias: string[] = ['Electrónica', 'Computadoras', 'Accesorios'];
  marcas: string[] = ['Apple', 'Dell', 'HP', 'Samsung'];

  // Lista de productos (ejemplo ampliado con propiedades adicionales)
  productos: Producto[] = [
    {
      id: 1,
      nombre: 'Laptop Profesional',
      descripcion: 'Potente y ligera, ideal para el trabajo y la movilidad.',
      precio: 1499.99,
      imagen: 'Producto5.png',
      marca: 'Dell',
      categoria: 'Computadoras',
      etiquetas: ['Nuevo', 'Popular']
    },
    {
      id: 2,
      nombre: 'Smartphone de Alta Gama',
      descripcion: 'Tecnología de punta en un diseño elegante.',
      precio: 999.99,
      imagen: 'Producto5.png',
      marca: 'Samsung',
      categoria: 'Electrónica',
      etiquetas: ['Oferta']
    },
    {
      id: 3,
      nombre: 'Auriculares Inalámbricos',
      descripcion: 'Sonido envolvente y cancelación de ruido activa.',
      precio: 199.99,
      imagen: 'Producto5.png',
      marca: 'HP',
      categoria: 'Accesorios',
      etiquetas: ['Recomendado']
    },
    {
      id: 4,
      nombre: 'Monitor Ultra HD',
      descripcion: 'Visualiza cada detalle con una claridad increíble.',
      precio: 399.99,
      imagen: 'Producto5.png',
      marca: 'Dell',
      categoria: 'Computadoras',
      etiquetas: ['Nuevo']
    },
    {
      id: 5,
      nombre: 'Teclado Mecánico',
      descripcion: 'Precisión y respuesta táctil para profesionales y gamers.',
      precio: 129.99,
      imagen: 'Producto5.png',
      marca: 'HP',
      categoria: 'Accesorios',
      etiquetas: ['Popular']
    },
    {
      id: 6,
      nombre: 'Mouse Inalámbrico',
      descripcion: 'Ergonómico y rápido, diseñado para largas jornadas.',
      precio: 59.99,
      imagen: 'Producto5.png',
      marca: 'Apple',
      categoria: 'Accesorios',
      etiquetas: ['Oferta', 'Popular']
    }
  ];

  // Filtrado dinámico
  get productosFiltrados(): Producto[] {
    return this.productos.filter((producto) => {
      const matchesSearch = this.searchTerm
        ? producto.nombre.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          producto.marca.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          producto.categoria.toLowerCase().includes(this.searchTerm.toLowerCase())
        : true;
      const matchesCategoria = this.filtrosCategorias.length > 0
        ? this.filtrosCategorias.includes(producto.categoria)
        : true;
      const matchesMarca = this.filtrosMarcas.length > 0
        ? this.filtrosMarcas.includes(producto.marca)
        : true;
      return matchesSearch && matchesCategoria && matchesMarca;
    });
  }

  // Manejo de filtros para categorías
  onFiltroCategoria(categoria: string, event: any) {
    if (event.target.checked) {
      this.filtrosCategorias.push(categoria);
    } else {
      this.filtrosCategorias = this.filtrosCategorias.filter(c => c !== categoria);
    }
  }

  // Manejo de filtros para marcas
  onFiltroMarca(marca: string, event: any) {
    if (event.target.checked) {
      this.filtrosMarcas.push(marca);
    } else {
      this.filtrosMarcas = this.filtrosMarcas.filter(m => m !== marca);
    }
  }
}
