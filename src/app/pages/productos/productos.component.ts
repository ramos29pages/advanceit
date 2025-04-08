import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faShoppingCart,
  faEye,
  faSearch,
  faLayerGroup,
  faTag,
  faCopyright,
  faCodeBranch,
} from '@fortawesome/free-solid-svg-icons';
import { FooterComponent } from '../../components/footer/footer.component';
import { RouterLink } from '@angular/router';

interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
  marca: string;
  categoria: string;
  caracteristicas?: string[];
  etiquetas: string[];
}

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule,
    FooterComponent,
    RouterLink,
  ],
  template: `
    <section class="min-h-screen bg-white">
      <!-- Header: Mission Statement -->
      <!-- <div class="text-center pt-24 px-4">
        <h1 class="text-5xl font-bold text-purple-600">
          Empowering Businesses with Seamless IT Solutions
        </h1>
        <p class="mt-4 text-xl text-gray-700 max-w-2xl mx-auto">
          We are a Colombian-American company dedicated to optimizing IT operations and delivering remote workforce solutions that ensure continuity, security, and excellence.
        </p>
      </div> -->

      <div class="min-h-screen bg-linear-to-r from-20% to-purple-50 py-8">
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
                <label
                  class="block text-gray-700 font-semibold mb-2"
                  for="search"
                  >Buscar <fa-icon [icon]="faSearch"></fa-icon
                ></label>
                <input
                  id="search"
                  type="text"
                  [(ngModel)]="searchTerm"
                  class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-purple-500"
                  placeholder="Nombre, marca o categoría"
                />
              </div>
              <!-- Filtro por Categoría -->
              <div class="mb-6">
                <h4 class="text-lg font-semibold text-gray-700 mb-3">
                  Categorías
                </h4>
                <div
                  *ngFor="let cat of categorias"
                  class="flex items-center mb-2"
                >
                  <input
                    type="checkbox"
                    [id]="cat"
                    (change)="onFiltroCategoria(cat, $event)"
                    class="form-checkbox h-5 w-5 text-purple-600 rounded focus:ring-purple-500 border-gray-300"
                  />
                  <label
                    [for]="cat"
                    class="ml-2 text-sm text-gray-600 cursor-pointer"
                  >
                    {{ cat }}
                  </label>
                </div>
              </div>
              <!-- Filtro por Marca -->
              <div class="mb-6">
                <h4 class="text-lg font-semibold text-gray-700 mb-3">Marcas</h4>
                <div *ngFor="let m of marcas" class="flex items-center mb-2">
                  <input
                    type="checkbox"
                    [id]="m"
                    (change)="onFiltroMarca(m, $event)"
                    class="form-checkbox h-5 w-5 text-purple-600 rounded focus:ring-purple-500 border-gray-300"
                  />
                  <label
                    [for]="m"
                    class="ml-2 text-sm text-gray-600 cursor-pointer"
                  >
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
                <div
                  *ngFor="let producto of productosFiltrados"
                  class="bg-white rounded-4xl shadow-lg overflow-hidden transform transition-transform hover:scale-105 flex flex-col"
                >
                  <img
                    [src]="producto.imagen"
                    [alt]="producto.nombre"
                    class="w-full h-48 object-contain p-4"
                  />
                  <div class="p-4 flex flex-col flex-grow">
                    <h2 class="text-xl font-semibold text-gray-800 mb-2">
                      {{ producto.nombre }}
                    </h2>
                    <p class="text-gray-600 text-sm line-clamp-4">
                      {{ producto.descripcion }}
                    </p>

                    <ul class="p-4 text-gray-500 text-xs">
                      <li *ngFor="let c of producto.caracteristicas">
                        ✔ {{ c }}
                      </li>
                    </ul>

                    <div class="flex gap-4 my-2">
                      <span
                        class="bg-orange-100 text-orange-700 text-xs font-semibold px-2 py-1 rounded-lg"
                      >
                        <fa-icon [icon]="faCopririgth"></fa-icon>
                        {{ producto.marca }}</span
                      >
                      <span
                        class=" text-purple-700 text-xs font-semibold px-2 py-1 rounded-full"
                      >
                        <fa-icon [icon]="faLayerGroup"></fa-icon>
                        {{ producto.categoria }}
                      </span>
                    </div>
                    <div class="flex flex-wrap gap-2 mb-4">
                      <span
                        *ngFor="let tag of producto.etiquetas"
                        class="bg-purple-100 text-purple-700 text-xs font-semibold px-2 py-1 rounded-full"
                      >
                        <fa-icon [icon]="faTag"></fa-icon>
                        {{ tag }}
                      </span>
                    </div>
                    <div class="flex justify-between items-center mt-auto">
                      <span class="text-purple-700 hidden font-bold text-lg">
                        $ {{ producto.precio | number : '1.2-2' }}
                      </span>
                      <span>
                        <fa-icon
                          [icon]="faEye"
                          class=" text-slate-600 cursor-pointer hover:scale-110 hidden"
                        ></fa-icon>
                      </span>
                      <button
                        class="bg-gradient-to-r bg-purple-500 hover:bg-purple-800 text-white py-2 px-4 rounded-lg transition-transform transform hover:scale-105 hover:-rotate-5"
                        routerLink="/contacto"
                      >
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

      <!-- Featured Products Section -->
      <div class="max-w-6xl mx-auto px-4 py-12">
        <h2 class="text-4xl font-semibold text-purple-600 text-center mb-12">
          Featured Solutions
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Card: Business Kit -->
          <div
            class="bg-gray-50 shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300"
          >
            <h3 class="text-2xl font-bold text-purple-600">Business Kit</h3>
            <p class="mt-2 text-gray-600">
              Comprehensive packages that provide the latest hardware and
              software to drive your business forward.
            </p>
            <button
              class="mt-4 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
              routerLink="/contacto"
            >
              Discover More
            </button>
          </div>

          <!-- Card: Enterprise Solutions -->
          <div
            class="bg-gray-50 shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300"
          >
            <h3 class="text-2xl font-bold text-purple-600">
              Enterprise Solutions
            </h3>
            <p class="mt-2 text-gray-600">
              Customized IT strategies designed to keep your operations running
              smoothly and securely.
            </p>
            <button
              class="mt-4 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
              routerLink="/contacto"
            >
              Explore Now
            </button>
          </div>

          <!-- Card: Special Kits -->
          <div
            class="bg-gray-50 shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300"
          >
            <h3 class="text-2xl font-bold text-purple-600">Special Kits</h3>
            <p class="mt-2 text-gray-600">
              Tailored solutions that blend advanced technology with expert
              support for maximum efficiency.
            </p>
            <button
              class="mt-4 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
              routerLink="/contacto"
            >
              View Kits
            </button>
          </div>
        </div>
      </div>

      <!-- Client Testimonials Section -->
      <div class="py-16">
        <div class="max-w-4xl mx-auto px-4 text-center">
          <h2 class="text-4xl font-semibold text-purple-600 mb-8">
            What Our Clients Say
          </h2>
          <div class="space-y-8">
            <blockquote class="text-xl text-gray-700 italic">
              "The level of professionalism and expertise at Mission has
              transformed our IT operations. Their solutions are simply
              outstanding."
            </blockquote>
            <blockquote class="text-xl text-gray-700 italic">
              "A true partner in success. Their commitment to excellence has
              made a significant impact on our business performance."
            </blockquote>
          </div>
        </div>
      </div>

      <!-- Call to Action Section -->
      <!-- <div class="bg-purple-600 py-16">
        <div class="max-w-4xl mx-auto text-center px-4">
          <h2 class="text-4xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
          <p class="text-xl text-purple-100 mb-8">
            Join the ranks of leading companies that trust Mission to power their IT operations and drive business success.
          </p>
          <button class="bg-white text-purple-600 px-8 py-3 rounded font-semibold hover:bg-gray-200">
            Get in Touch
          </button>
        </div>
      </div>
    </section> -->

      <app-footer></app-footer>
    </section>
  `,
  styles: [
    `
      .line-clamp-4 {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    `,
  ],
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
  categorias: string[] = [
    'Electrónica',
    'Computadoras',
    'Accesorios',
    'Monitores',
  ];
  marcas: string[] = ['Dell'];

  // Lista de productos (ejemplo ampliado con propiedades adicionales)
  productos: Producto[] = [
    {
      id: 1,
      nombre: 'Latitude 5450 Portátil',
      descripcion:
        'Intel® Core™ i7-1370P, vPro® de 13.ª generación (14 núcleos, hasta 5,2 GHz de frecuencia Turbo) ',
      precio: 1499.99,
      imagen: '/products/notebook-latitude-14-5440-nt-gray-gallery-2.avif',
      marca: 'Dell',
      caracteristicas: [
        'Intel® Core™ Ultra 5 135U, vPro®',
        'Windows 11 Pro',
        'Intel® Graphics',
        '16 GB DDR5 | 512 GB SSD | 14.0-in. display Full HD (1920X1080)',
      ],
      categoria: 'Computadoras',
      etiquetas: ['Nuevo', 'Popular'],
    },
    {
      id: 2,
      nombre: 'Latitude 7450 Laptop or 2-in-1',
      descripcion:
        '14-inch premium AI laptop or 2-in-1 featuring 16:10 displays, enhanced audio, ultralight option and Intel® Core™ Ultra processor.',
      precio: 999.99,
      imagen: '/products/notebook-latitude-14-7450-t-gray-gallery-1.avif',
      marca: 'Dell',
      caracteristicas: [
        'Intel® Core™ Ultra 7 165U, vPro®',
        'Windows 11 Pro',
        'Intel® Graphics',
        '16 GB LPDDR5X | 256 GB SSD | 14" Non-Touch FHD+ (1920x1200)',
      ],
      categoria: 'Computadoras',
      etiquetas: ['Nuevo'],
    },
    {
      id: 3,
      nombre: 'Dell Pro Wired ANC Headset - WH5024',
      descripcion:
        'Elevate your workday communication with this headset that comes equipped with an AI-based microphone and Active Noise Cancellation, designed to reduce background noise, ensure comfort, and bring your productivity to the next level.',
      precio: 199.99,
      imagen: '/products/accessories-dell-wh5024-anc-bk-gallery-1.avif',
      marca: 'Dell',
      caracteristicas: [
        'Microsoft Teams (Open Office) Certified, Zoom Certified',
        '3 Year Limited Hardware with Advanced Exchange Service',
        'Win11/10 64 Bit, Mac OS',
      ],
      categoria: 'Accesorios',
      etiquetas: ['Recomendado', 'Sonido'],
    },
    {
      id: 4,
      nombre: 'Dell Pro 24 Plus Monitor - P2425H',
      descripcion: 'In-Plane Switching (IPS) technology | 1920 x 1080',
      precio: 399.99,
      imagen: '/products/monitor-p2425h-black-gallery-2.avif',
      marca: 'Dell',
      caracteristicas: [
        'In-Plane Switching (IPS) technology',
        'Resolution / Refresh Rate 1920 x 1080',
        'Adjustability Height, Tilt, Swivel, Pivot',
        'Diagonal Size 23.8',
      ],
      categoria: 'Monitores',
      etiquetas: ['Nuevo'],
    },
    {
      id: 5,
      nombre: 'Dell Pro Dock - WD25',
      descripcion:
        'Boost your productivity with the latest pro dock that offers up to 100W power delivery and a wide variety of connecting options.',
      precio: 129.99,
      imagen: '/products/dock-station-wd25-black-gallery-1.avif',
      marca: 'Dell',
      caracteristicas: [
        '100W (Dell systems) 96W (non-Dell systems)',
        'RJ45 Ethernet port, 2.5GbE',
        '3-Year Limited Hardware Warranty with Advanced Exchange Additional 4- & 5-year warranty optional',
      ],
      categoria: 'Accesorios',
      etiquetas: ['Popular'],
    },
    {
      id: 6,
      nombre: 'Dell Premier Multi-Device Wireless Keyboard and Mouse – KM7321W',
      descripcion:
        'Experience superior multitasking features with a stylish and comfortable premium keyboard and mouse combo. Complete your tasks powered by one of the industry’s leading battery lives at up to 36 months.',
      precio: 59.99,
      imagen: '/products/km7321w-xkb-01-gy.avif',
      marca: 'Dell',
      caracteristicas: [
        'USB wireless receiver',
        'Adjustable DPI. 1000, 1600(default), 2400, 4000',
        '12 programmable keys of F1-F12',
      ],
      categoria: 'Accesorios',
      etiquetas: ['Oferta', 'Popular'],
    },
  ];

  // Filtrado dinámico
  get productosFiltrados(): Producto[] {
    return this.productos.filter((producto) => {
      const matchesSearch = this.searchTerm
        ? producto.nombre
            .toLowerCase()
            .includes(this.searchTerm.toLowerCase()) ||
          producto.marca
            .toLowerCase()
            .includes(this.searchTerm.toLowerCase()) ||
          producto.categoria
            .toLowerCase()
            .includes(this.searchTerm.toLowerCase())
        : true;
      const matchesCategoria =
        this.filtrosCategorias.length > 0
          ? this.filtrosCategorias.includes(producto.categoria)
          : true;
      const matchesMarca =
        this.filtrosMarcas.length > 0
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
      this.filtrosCategorias = this.filtrosCategorias.filter(
        (c) => c !== categoria
      );
    }
  }

  // Manejo de filtros para marcas
  onFiltroMarca(marca: string, event: any) {
    if (event.target.checked) {
      this.filtrosMarcas.push(marca);
    } else {
      this.filtrosMarcas = this.filtrosMarcas.filter((m) => m !== marca);
    }
  }
}
