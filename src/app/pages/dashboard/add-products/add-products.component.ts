import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ingramPartNumbersDell } from '../../../constants/ingramPartNumbersDell';
import {
  faSearch,
  faPlus,
  faChevronDown,
  faChevronUp,
  faCheckCircle,
  faTimesCircle,
  faTag,
  faBarcode,
  faDollarSign,
  faBoxOpen,
  faWarehouse,
  faTags
} from '@fortawesome/free-solid-svg-icons';
import { IngramService } from '../../../services/ingram.service';
import { ProductoIngram } from '../../../models/ingram';


@Component({
  selector: 'app-add-products',
  standalone: true,
  imports: [CommonModule, FormsModule, FontAwesomeModule],
  templateUrl: './add-products.component.html',
  styles: [`
    /* Puedes agregar estilos adicionales aquí */
    :host {
      display: block;
    }

    /* Animación de carga para imágenes */
    .product-image {
      transition: opacity 0.3s ease;
    }

    .product-image.loading {
      opacity: 0.5;
    }
  `]
})
export class AddProductsComponent implements OnInit {
  // Icons
  faSearch = faSearch;
  faPlus = faPlus;
  faChevronDown = faChevronDown;
  faChevronUp = faChevronUp;
  faCheckCircle = faCheckCircle;
  faTimesCircle = faTimesCircle;
  faTag = faTag;
  faBarcode = faBarcode;
  faDollarSign = faDollarSign;
  faBoxOpen = faBoxOpen;
  faWarehouse = faWarehouse;
  faTags = faTags;

  // State variables
  searchTerm: string = '';
  mostrarModal: boolean = false;
  productos: ProductoIngram[] = [];
  expandedProductId: string | null = null;
  isLoading: boolean = true;
  filtroDisponibilidad: boolean = false;
  filtroDescuentos: boolean = false;

  // Ingram part numbers
  ingramPartNumbers: string[] = [];

  constructor(private ingramService: IngramService) {}

  API_URL: string = 'https://advance-backend.onrender.com/ingram/products'
  API_URL_local: string = 'http://localhost:3001/ingram/products'

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.isLoading = true;
    // Suscripción que recibe cada lote de hasta 10 productos
    this.ingramService
      .getProductsInBatches(ingramPartNumbersDell)
      .subscribe({
        next: batch => {
          // Acumula progresivamente los productos :contentReference[oaicite:12]{index=12}
          this.productos.push(...batch);
          this.isLoading = false;
        },
        error: err => {
          console.error('Error cargando lote:', err);
          this.isLoading = false;
        }
      });
  }

  // Función para filtrar productos según el término de búsqueda y filtros activos
  filteredProducts(): ProductoIngram[] {
    return this.productos.filter(producto => {
      // Aplicar filtro de búsqueda
      const matchesSearch =
        producto.nombre.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        producto.marca.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        producto.categoria.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        producto.descripcion.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        producto.SKU.toLowerCase().includes(this.searchTerm.toLowerCase());

      // Aplicar filtro de disponibilidad
      const matchesDisponibilidad = this.filtroDisponibilidad ? producto.disponibilidad : true;

      // Aplicar filtro de descuentos
      const matchesDescuentos = this.filtroDescuentos ? producto.descuentos : true;

      return matchesSearch && matchesDisponibilidad && matchesDescuentos;
    });
  }

  // Función para expandir/colapsar detalles del producto
  toggleProductDetails(productId: string) {
    if (this.expandedProductId === productId) {
      this.expandedProductId = null;
    } else {
      this.expandedProductId = productId;
    }
  }

  // Agrega el producto recibido al array y cierra el modal
  // agregarProducto(nuevoProducto: ProductoIngram) {
  //   this.productos.push(nuevoProducto);
  //   this.mostrarModal = false;
  //   // Aquí podrías también enviar el nuevo producto al backend si es necesario
  // }
}
