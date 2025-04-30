import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { v4 as uuidv4 } from 'uuid'; // Importa la función para generar UUID

interface ProductoIngram {
  id: string; // Ahora el ID es string (UUID)
  SKU: string;
  nombre: string;
  descripcion: string;
  precio: number | null;
  descuentos: boolean;
  estado: string;
  disponibilidad: boolean;
  imagen: string;
  marca: string;
  categoria: string;
  cantidad?: number; // Propiedad opcional
  warehouse?: string; // Propiedad opcional
  warehouseId?: string; // Propiedad opcional
  precioRetail: number | string;
  etiquetas: string[];
}

@Component({
  selector: 'app-add-form',
  standalone: true,
  imports: [FormsModule, FontAwesomeModule],
  template: `
    <div class="fixed inset-0 bg-black/50 flex justify-center items-center z-50" (click)="closeForm()">
      <div class="bg-purple-100 rounded-lg shadow-lg p-8 w-11/12 md:w-2/3 lg:w-1/2 overflow-y-auto max-h-[80vh] relative" (click)="$event.stopPropagation()">
        <button (click)="closeForm()"
                class="absolute top-3 right-3 text-purple-600 hover:text-purple-800 focus:outline-none">
          <fa-icon [icon]="faTimes" size="lg"></fa-icon>
        </button>
        <h2 class="text-2xl font-bold text-purple-700 mb-6">Añadir Nuevo Producto Ingram</h2>
        <form (ngSubmit)="submitForm()" class="space-y-4">
          <div>
            <label for="SKU" class="block text-purple-600 text-sm font-bold mb-2">SKU</label>
            <input type="text" id="SKU" [(ngModel)]="newProduct.SKU" name="SKU" required
                   class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-purple-500">
          </div>
          <div>
            <label for="nombre" class="block text-purple-600 text-sm font-bold mb-2">Nombre</label>
            <input type="text" id="nombre" [(ngModel)]="newProduct.nombre" name="nombre" required
                   class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-purple-500">
          </div>
          <div>
            <label for="descripcion" class="block text-purple-600 text-sm font-bold mb-2">Descripción</label>
            <textarea id="descripcion" [(ngModel)]="newProduct.descripcion" name="descripcion" required
                      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-purple-500"></textarea>
          </div>
          <div>
            <label for="precio" class="block text-purple-600 text-sm font-bold mb-2">Precio</label>
            <input type="number" id="precio" [(ngModel)]="newProduct.precio" name="precio"
                   class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-purple-500">
          </div>
          <div>
            <label for="precioRetail" class="block text-purple-600 text-sm font-bold mb-2">Precio Retail</label>
            <input type="text" id="precioRetail" [(ngModel)]="newProduct.precioRetail" name="precioRetail" required
                   class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-purple-500">
          </div>
          <div>
            <label for="imagen" class="block text-purple-600 text-sm font-bold mb-2">Imagen (URL)</label>
            <input type="text" id="imagen" [(ngModel)]="newProduct.imagen" name="imagen"
                   class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-purple-500">
          </div>
          <div>
            <label for="marca" class="block text-purple-600 text-sm font-bold mb-2">Marca</label>
            <input type="text" id="marca" [(ngModel)]="newProduct.marca" name="marca"
                   class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-purple-500">
          </div>
          <div>
            <label for="categoria" class="block text-purple-600 text-sm font-bold mb-2">Categoría</label>
            <input type="text" id="categoria" [(ngModel)]="newProduct.categoria" name="categoria"
                   class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-purple-500">
          </div>
          <div>
            <label for="etiquetas" class="block text-purple-600 text-sm font-bold mb-2">Etiquetas (separadas por comas)</label>
            <input type="text" id="etiquetas" [(ngModel)]="etiquetasInput" name="etiquetas"
                   class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-purple-500">
          </div>
          <div class="flex justify-end">
            <button type="submit"
                    class="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors">
              Guardar Producto
            </button>
          </div>
        </form>
      </div>
    </div>
  `,
  styles: []
})
export class AddFormComponent {
  @Output() onAddProduct = new EventEmitter<ProductoIngram>();
  @Output() onClose = new EventEmitter<void>();

  faTimes = faTimes;

  // Modelo para el nuevo producto
  newProduct: ProductoIngram = {
    id: uuidv4(), // Genera un UUID al inicializar el producto
    SKU: '',
    nombre: '',
    descripcion: '',
    precio: null, // Permitir valores nulos para precio
    descuentos: false, // Valor por defecto
    estado: '', // Deberías considerar un valor por defecto o hacerlo obligatorio
    disponibilidad: true, // Valor por defecto
    imagen: '',
    marca: '',
    categoria: '',
    etiquetas: [],
    precioRetail: ''
  };

  // Entrada para las etiquetas en formato string
  etiquetasInput: string = '';

  // Se ejecuta al enviar el formulario
  submitForm() {
    // Separa las etiquetas por comas, elimina espacios y filtra valores vacíos
    this.newProduct.etiquetas = this.etiquetasInput
      .split(',')
      .map(tag => tag.trim())
      .filter(tag => tag.length > 0);

    // Emite el nuevo producto al componente padre
    this.onAddProduct.emit({ ...this.newProduct });

    // Reinicia el formulario
    this.resetForm();
  }

  // Emite el evento para cerrar el modal
  closeForm() {
    this.onClose.emit();
  }

  // Reinicia el modelo del formulario
  resetForm() {
    this.newProduct = {
      id: uuidv4(), // Genera un nuevo UUID al resetear
      SKU: '',
      nombre: '',
      descripcion: '',
      precio: null,
      descuentos: false,
      estado: '',
      disponibilidad: true,
      imagen: '',
      marca: '',
      categoria: '',
      etiquetas: [],
      precioRetail: ''
    };
    this.etiquetasInput = '';
  }
}
