import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBoxOpen, faTags, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { AdvanceProductsService } from '../../../services/product.service';
import { ProductoIngramDetails, ProductAdvance } from '../../../models/ingram';

@Component({
  selector: 'app-all-products-list',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  template: `
    <div class="bg-gray-50 min-h-screen p-6">
      <h1 class="text-3xl font-bold text-purple-700 mb-6">Lista de Productos</h1>{{allProducts.length}}
      <div *ngIf="allProducts.length; else loading"
           class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div *ngFor="let item of allProducts"
             class="bg-white border border-gray-200 rounded-2xl shadow-md p-4 flex flex-col">

          <div class="flex items-center mb-4">
            <fa-icon [icon]="faBoxOpen" class="text-purple-600 mr-2"></fa-icon>
            <h2 class="text-xl font-semibold text-gray-800">{{ item.product.nombre }}</h2>
          </div>

          <img [src]="item.product.imagen" [alt]="item.product.nombre"
               class="w-full h-48 object-cover rounded-lg mb-4"/>

          <p class="text-gray-700 flex-1">{{ item.product.descripcion }}</p>

          <div class="mt-4 space-y-2">
            <div *ngFor="let key of specKeys(item.details)"
                 class="flex items-center text-gray-600">
              <fa-icon [icon]="faTags" class="mr-2"></fa-icon>
              <span class="font-medium">{{ key }}:</span>
              <!-- <span class="ml-1">{{ item.details?.especificaciones_tecnicas[key] }}</span> -->
            </div>
          </div>

          <div class="mt-6 flex items-center justify-between">
            <span class="text-lg font-bold text-purple-700">
              {{ item.product.precioRetail | currency:'COP':'symbol' }}
            </span>
            <button class="bg-purple-600 hover:bg-purple-500 text-white px-4 py-2 rounded-full flex items-center">
              <fa-icon [icon]="faInfoCircle" class="mr-2"></fa-icon>
              Detalles
            </button>
          </div>
        </div>
      </div>
      <ng-template #loading>
        <p class="text-gray-500">Cargando productos...</p>
      </ng-template>
    </div>
  `,
  styles: []
})
export class AdvanceProductsComponent implements OnInit, OnDestroy {
  allProducts: ProductAdvance[] = [];
  faBoxOpen = faBoxOpen;
  faTags = faTags;
  faInfoCircle = faInfoCircle;
  private sub?: Subscription;

  constructor(private productsService: AdvanceProductsService) {}

  ngOnInit(): void {
    this.sub = this.productsService.getAllProducts().subscribe(
      products => this.allProducts = products,
      error => console.error('Error al cargar productos:', error)
    );
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  specKeys(details: ProductoIngramDetails | null): string[] {
    return details ? Object.keys(details.especificaciones_tecnicas) : [];
  }
}
