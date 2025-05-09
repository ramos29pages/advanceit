// product-catalog.component.ts
import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faSearch,
  faShoppingCart,
  faTag,
  faStore,
  faHeart,
  faFilter,
} from '@fortawesome/free-solid-svg-icons';
import { trigger, transition, style, animate } from '@angular/animations';
import { ApiDetailsResponse, ProductAdvance } from '../../../models/ingram';
import { Subscription } from 'rxjs';
import { AdvanceProductsService } from '../../../services/product.service';

interface Product {
  _sku: string;
  product: {
    id: string;
    SKU: string;
    nombre: string;
    descripcion: string;
    precio: number;
    descuentos: boolean;
    estado: string;
    disponibilidad: boolean;
    imagen: string;
    marca: string;
    categoria: string;
    cantidad: number;
    warehouse: string;
    warehouseId: string;
    precioRetail: number;
    etiquetas: string[];
  };
  details?: {
    titulo?: string;
    categorias?: string[];
    descripcion?: string;
    imagenes?: string[];
    etiquetas?: string;
    especificaciones_tecnicas?: Record<string, any>;
    garantia_e_informacion_adicional?: Record<string, string>;
  };
}

interface ApiResponse {
  success: boolean;
  found: number;
  nulls: number;
  failed: number;
  data: Product[];
}

@Component({
  selector: 'app-advance-product',
  standalone: true,
  imports: [CommonModule, FormsModule, FontAwesomeModule],
  templateUrl: './advance-products.component.html',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class AdvanceProductsComponent implements OnInit, OnDestroy {
  // Iconos de FontAwesome
  faSearch = faSearch;
  faShoppingCart = faShoppingCart;
  faTag = faTag;
  faStore = faStore;
  faHeart = faHeart;
  faFilter = faFilter;

  // Datos
  allProducts: Product[] = [];
  filteredProducts = signal<Product[]>([]);

  apiDetailsResponse: ApiDetailsResponse<ProductAdvance>[] = [];
  private productsSubscription?: Subscription;

  constructor(private advanceProductService: AdvanceProductsService) {}

  // Estados UI
  searchTerm = '';
  selectedCategories: string[] = [];
  selectedBrands: string[] = [];
  showCategoryFilter = signal(false);
  showBrandFilter = signal(false);
  activeImageIndexes: Record<string, number> = {};

  // Mensajes de bienvenida
  welcomeMessages = [
    '¡Descubre lo último en tecnología!',
    '¡Ofertas especiales solo por hoy!',
    'Envío gratis en compras superiores a $100',
    '¡Encuentra el producto perfecto para ti!',
    '¡Bienvenido a la mejor tienda de tecnología!',
    'Tecnología de vanguardia a precios increíbles',
    '¡Compra ahora y recibe tu producto mañana!',
    'La calidad que buscas, al precio que deseas',
  ];
  welcomeMessage = signal('');

  ngOnInit() {
    // Simulamos la carga de datos desde la API
    this.loadProducts();
    this.setRandomWelcomeMessage();

    // Cambiamos el mensaje de bienvenida cada 8 segundos
    setInterval(() => {
      this.setRandomWelcomeMessage();
    }, 5000);
  }

  ngOnDestroy(): void {
    if (this.productsSubscription) {
      this.productsSubscription.unsubscribe();
    }
  }

  setRandomWelcomeMessage() {
    const randomIndex = Math.floor(Math.random() * this.welcomeMessages.length);
    this.welcomeMessage.set(this.welcomeMessages[randomIndex]);
  }

  loadProducts(): void {
    this.productsSubscription = this.advanceProductService
      .getAllProducts()
      .subscribe({
        next: (batchOfProducts: any) => {
          // 'batchOfProducts' contendrá cada lote de productos emitido por el servicio
          this.allProducts = batchOfProducts; // Actualiza la lista completa cada vez que llega un lote
          this.filteredProducts.set([...this.allProducts]);
          console.log('Lote de productos recibido:', batchOfProducts);
          //   // Inicializar los índices de imágenes activas
            this.allProducts.forEach(product => {
              this.activeImageIndexes[product._sku] = 0;
            });
          // Aquí puedes realizar acciones adicionales con cada lote,
          // como actualizar la interfaz de usuario progresivamente.
        },
        error: (error) => {
          console.error('Error al cargar los productos:', error);
          // Maneja el error de manera apropiada (mostrar mensaje al usuario, etc.)
        },
        complete: () => {
          console.log('Todos los productos cargados.');
          // Realiza acciones cuando se hayan cargado todos los productos (si es necesario)
        },
      });
  }

  // fetchProducts() {
  //   // Simular la llamada a la API - En un caso real usarías un servicio HTTP
  //   const mockApiResponse: ApiResponse = {
  //     "success": true,
  //     "found": 2,
  //     "nulls": 0,
  //     "failed": 0,
  //     "data": [
  //       {
  //         "_sku": "SKU123",
  //         "product": {
  //           "id": "product-abc-123",
  //           "SKU": "SKU123",
  //           "nombre": "Laptop Profesional",
  //           "descripcion": "Potente laptop para productividad y desarrollo.",
  //           "precio": 1299.99,
  //           "descuentos": true,
  //           "estado": "activo",
  //           "disponibilidad": true,
  //           "imagen": "https://example.com/images/laptop1.jpg",
  //           "marca": "Acme",
  //           "categoria": "Electrónica",
  //           "cantidad": 10,
  //           "warehouse": "Bodega Central",
  //           "warehouseId": "WH001",
  //           "precioRetail": 1499.99,
  //           "etiquetas": ["portátil", "profesional", "rendimiento"]
  //         },
  //         "details": {
  //           "titulo": "Laptop Acme Pro X",
  //           "categorias": ["Electrónica", "Computadoras", "Portátiles"],
  //           "descripcion": "La Acme Pro X ofrece un rendimiento excepcional con su procesador de última generación y pantalla de alta resolución.",
  //           "imagenes": [
  //             "https://example.com/images/laptop1-front.jpg",
  //             "https://example.com/images/laptop1-side.jpg"
  //           ],
  //           "etiquetas": "laptop, profesional, intel, ssd, 16gb ram",
  //           "especificaciones_tecnicas": {
  //             "Procesador": {
  //               "Modelo": "Intel Core i7-12700H",
  //               "Velocidad": "2.3 GHz"
  //             },
  //             "Memoria RAM": {
  //               "Capacidad": "16 GB DDR5",
  //               "Velocidad": "4800 MHz"
  //             },
  //             "Almacenamiento": {
  //               "Tipo": "SSD NVMe",
  //               "Capacidad": "1 TB"
  //             },
  //             "Pantalla": {
  //               "Tamaño": "14 pulgadas",
  //               "Resolución": "2560 x 1440"
  //             }
  //           },
  //           "garantia_e_informacion_adicional": {
  //             "Garantía": "1 año limitada",
  //             "Soporte Técnico": "Disponible 24/7"
  //           }
  //         }
  //       },
  //       {
  //         "_sku": "SKU456",
  //         "product": {
  //           "id": "product-def-456",
  //           "SKU": "SKU456",
  //           "nombre": "Monitor 27 Pulgadas",
  //           "descripcion": "Monitor IPS de 27 pulgadas con alta resolución.",
  //           "precio": 299.00,
  //           "descuentos": false,
  //           "estado": "activo",
  //           "disponibilidad": true,
  //           "imagen": "https://example.com/images/monitor1.jpg",
  //           "marca": "VisionTech",
  //           "categoria": "Electrónica",
  //           "cantidad": 50,
  //           "warehouse": "Almacén B",
  //           "warehouseId": "WH002",
  //           "precioRetail": 299.00,
  //           "etiquetas": ["monitor", "27 pulgadas", "ips"]
  //         },
  //         "details": {
  //           "titulo": "Monitor VisionTech 27\" IPS",
  //           "categorias": ["Electrónica", "Monitores"],
  //           "descripcion": "Disfruta de imágenes nítidas y colores vibrantes con este monitor IPS de 27 pulgadas.",
  //           "imagenes": [
  //             "https://example.com/images/monitor1-front.jpg",
  //             "https://example.com/images/monitor1-back.jpg"
  //           ],
  //           "etiquetas": "monitor, 27inch, ips panel, full hd",
  //           "especificaciones_tecnicas": {
  //             "Tamaño de Pantalla": "27 pulgadas",
  //             "Resolución": "1920 x 1080 (Full HD)",
  //             "Tipo de Panel": "IPS",
  //             "Tasa de Refresco": "75 Hz",
  //             "Tiempo de Respuesta": "5 ms"
  //           },
  //           "garantia_e_informacion_adicional": {
  //             "Garantía": "2 años",
  //             "Puertos": "HDMI, DisplayPort"
  //           }
  //         }
  //       }
  //     ]
  //   };

  //   this.advanceProductService

  //   const advance_products

  //   this.allProducts = mockApiResponse.data;
  //   this.filteredProducts.set([...this.allProducts]);

  //   // Inicializar los índices de imágenes activas
  //   this.allProducts.forEach(product => {
  //     this.activeImageIndexes[product._sku] = 0;
  //   });
  // }

  // Métodos para manejar filtros
  filterProducts() {
    let results = [...this.allProducts];

    // Filtrar por término de búsqueda
    if (this.searchTerm.trim()) {
      const term = this.searchTerm.toLowerCase().trim();
      results = results.filter((item) => {
        const title = this.getProductTitle(item).toLowerCase();
        const description = this.getProductDescription(item).toLowerCase();
        const brand = item.product.marca.toLowerCase();
        const sku = item.product.SKU.toLowerCase();

        return (
          title.includes(term) ||
          description.includes(term) ||
          brand.includes(term) ||
          sku.includes(term)
        );
      });
    }

    // Filtrar por categorías seleccionadas
    if (this.selectedCategories.length > 0) {
      results = results.filter((item) => {
        const categories = this.getProductCategories(item);
        return this.selectedCategories.some((cat) => categories.includes(cat));
      });
    }

    // Filtrar por marcas seleccionadas
    if (this.selectedBrands.length > 0) {
      results = results.filter((item) =>
        this.selectedBrands.includes(item.product.marca)
      );
    }

    this.filteredProducts.set(results);
  }

  resetFilters() {
    this.searchTerm = '';
    this.selectedCategories = [];
    this.selectedBrands = [];
    this.filteredProducts.set([...this.allProducts]);
    this.showCategoryFilter.set(false);
    this.showBrandFilter.set(false);
  }

  // Métodos para manejar filtros de categorías
  toggleCategoryFilter() {
    this.showCategoryFilter.set(!this.showCategoryFilter());
    if (this.showCategoryFilter()) {
      this.showBrandFilter.set(false);
    }
  }

  uniqueCategories(): string[] {
    const categoriesSet = new Set<string>();

    this.allProducts.forEach((item) => {
      const categories = this.getProductCategories(item);
      categories.forEach((cat) => categoriesSet.add(cat));
    });

    return Array.from(categoriesSet);
  }

  toggleCategory(category: string) {
    const index = this.selectedCategories.indexOf(category);
    if (index > -1) {
      this.selectedCategories.splice(index, 1);
    } else {
      this.selectedCategories.push(category);
    }
    this.filterProducts();
  }

  clearCategoryFilters() {
    this.selectedCategories = [];
    this.filterProducts();
  }

  // Métodos para manejar filtros de marcas
  toggleBrandFilter() {
    this.showBrandFilter.set(!this.showBrandFilter());
    if (this.showBrandFilter()) {
      this.showCategoryFilter.set(false);
    }
  }

  uniqueBrands(): string[] {
    const brandsSet = new Set<string>();

    this.allProducts.forEach((item) => {
      brandsSet.add(item.product.marca);
    });

    return Array.from(brandsSet);
  }

  toggleBrand(brand: string) {
    const index = this.selectedBrands.indexOf(brand);
    if (index > -1) {
      this.selectedBrands.splice(index, 1);
    } else {
      this.selectedBrands.push(brand);
    }
    this.filterProducts();
  }

  clearBrandFilters() {
    this.selectedBrands = [];
    this.filterProducts();
  }

  // Métodos para manejar las imágenes
  getProductImages(product: Product): string[] {
    // Si hay imágenes en details, usar esas, sino usar la imagen del product
    if (product.details?.imagenes && product.details.imagenes.length > 0) {
      return product.details.imagenes;
    }
    return [product.product.imagen];
  }

  hasMultipleImages(product: Product): boolean {
    return this.getProductImages(product).length > 1;
  }

  getImagesArray(product: Product): number[] {
    const imagesLength = this.getProductImages(product).length;
    return Array(imagesLength)
      .fill(0)
      .map((_, i) => i);
  }

  setActiveImage(sku: string, index: number) {
    this.activeImageIndexes[sku] = index;
  }

  getCurrentImageIndex(sku: string): number {
    return this.activeImageIndexes[sku] || 0;
  }

  getActiveImage(product: Product): string {
    const images = this.getProductImages(product);
    const index = this.getCurrentImageIndex(product._sku);
    return images[index];
  }

  // Métodos para obtener información del producto (con fallbacks)
  getProductTitle(product: Product): string {
    return product.details?.titulo || product.product.nombre;
  }

  getProductDescription(product: Product): string {
    return product.details?.descripcion || product.product.descripcion;
  }

  getProductCategories(product: Product): string[] {
    if (product.details?.categorias && product.details.categorias.length > 0) {
      return product.details.categorias;
    }
    return [product.product.categoria];
  }

  getProductTags(product: Product): string[] {
    if (product.details?.etiquetas) {
      // Si es un string, convertirlo a array
      if (typeof product.details.etiquetas === 'string') {
        return product.details.etiquetas.split(',').map((tag) => tag.trim());
      }
    }
    return product.product.etiquetas || [];
  }
}
