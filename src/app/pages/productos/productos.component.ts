import { Component, OnInit } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
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
import { NexsysApiService } from '../../services/nexys.service';
import { IngramService } from '../../services/ingram.service';
import { NexsysProduct, Producto } from '../../models/Productos'; // Asegúrate de que la ruta sea correcta
import { ProductAdvanceComponent } from '../../components/products/product-advance/product-advance.component';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule,
    FooterComponent,
    RouterLink,
    ProductAdvanceComponent,
    FontAwesomeModule
],
  templateUrl: './productos.component.html',
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
export class ProductosComponent implements OnInit {
  productsByMark: any[] = [];
  productBySKU: any;
  paginatedProducts: any[] = [];
  cartItemCount = 0;

  constructor(
    private nexsysService: NexsysApiService,
    private ingramService: IngramService,
    private cartService: CartService
  ) {
    // En el constructor de NavbarComponent
    cartService.getCart().subscribe((items) => {
      this.cartItemCount = items.length;
    });
  }

  ngOnInit(): void {
    this.loadProductsByMark();
  }
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
  categorias: string[] = ['Computadoras', 'Accesorios', 'Monitores'];
  marcas: string[] = ['Dell'];

  // Lista de productos (ejemplo ampliado con propiedades adicionales)
  productos: Producto[] = [
    {
      id: '1',
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
      id: '2',
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
      id: '3',
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
      id: '4',
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
      id: '5',
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
      id: '6',
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

  addToCart(product: Producto): void {
    this.cartService.addToCart(product);
    alert(`${product.nombre} añadido al carrito`);
  }

  mapearProducto(nexsysProducto: NexsysProduct): Producto {
    return {
      id: uuidv4(), // Generamos un UUID para el id
      nombre: nexsysProducto.name,
      descripcion:
        nexsysProducto.long_description ||
        nexsysProducto.short_description ||
        '',
      precio: nexsysProducto.price,
      imagen: nexsysProducto.image,
      marca: nexsysProducto.mark,
      categoria: nexsysProducto.category,
      etiquetas: [
        nexsysProducto.sku,
        nexsysProducto.mark,
        nexsysProducto.currency,
        nexsysProducto.parent,
      ],
    };
  }

  loadProductsByMark(): void {
    this.nexsysService.getProductsByMark('LENOVO').subscribe({
      next: (data) => {
        this.productsByMark = data.data.return;
        const $productos = this.productsByMark.map(
          (nexsysProducto: NexsysProduct) => this.mapearProducto(nexsysProducto)
        );
        this.productos = [...this.productos, ...$productos];
        console.log('Productos cargados por marca:', this.productos);
        console.log(
          'Productos cargados por marca desde nexsys:',
          this.productsByMark
        );
      },
      error: (err) => console.error('Error cargando productos por marca:', err),
    });
  }

  loadProductBySKU(): void {
    this.nexsysService.getProductBySKU('GP.BAG11.017').subscribe({
      next: (data) => (this.productBySKU = data),
      error: (err) => console.error('Error cargando producto por SKU:', err),
    });
  }

  loadPaginatedProducts(): void {
    this.nexsysService.getAllProducts(0, 10).subscribe({
      next: (data) => (this.paginatedProducts = data),
      error: (err) => console.error('Error cargando productos paginados:', err),
    });
  }

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
