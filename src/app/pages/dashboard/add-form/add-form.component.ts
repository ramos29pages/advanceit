import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

export interface Producto {
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
  selector: 'app-add-form',
  standalone: true,
  imports: [FormsModule, FontAwesomeModule],
  template: `
    <!-- Fondo negro semitransparente -->
    <div class="fixed inset-0 bg-black/50 flex justify-center items-center z-50" (click)="closeForm()">
      <!-- Modal centrado -->
      <div class="bg-white rounded-lg shadow-lg p-6 w-11/12 md:w-1/2 h-150 overflow-scroll relative" (click)="$event.stopPropagation()">
        <!-- Botón para cerrar el modal -->
        <button (click)="closeForm()"
                class="absolute top-2 right-2 text-gray-600 hover:text-gray-800">
          <fa-icon [icon]="faTimes"></fa-icon>
        </button>
        <h2 class="text-2xl font-bold mb-4 sticky top-2 bg-white">Añadir Nuevo Producto</h2>
        <form (ngSubmit)="submitForm()">
          <!-- Campo: Nombre -->
          <div class="mb-4">
            <label class="block text-gray-700 mb-2">Nombre</label>
            <input type="text"
                   [(ngModel)]="newProduct.nombre"
                   name="nombre"
                   required
                   class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-purple-500">
          </div>
          <!-- Campo: Descripción -->
          <div class="mb-4">
            <label class="block text-gray-700 mb-2">Descripción</label>
            <textarea [(ngModel)]="newProduct.descripcion"
                      name="descripcion"
                      required
                      class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-purple-500"></textarea>
          </div>
          <!-- Campo: Precio -->
          <div class="mb-4">
            <label class="block text-gray-700 mb-2">Precio</label>
            <input type="number"
                   [(ngModel)]="newProduct.precio"
                   name="precio"
                   required
                   class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-purple-500">
          </div>
          <!-- Campo: Imagen (ruta o URL) -->
          <div class="mb-4">
            <label class="block text-gray-700 mb-2">Imagen</label>
            <input type="text"
                   [(ngModel)]="newProduct.imagen"
                   name="imagen"
                   required
                   class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-purple-500">
          </div>
          <!-- Campo: Marca -->
          <div class="mb-4">
            <label class="block text-gray-700 mb-2">Marca</label>
            <input type="text"
                   [(ngModel)]="newProduct.marca"
                   name="marca"
                   required
                   class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-purple-500">
          </div>
          <!-- Campo: Categoría -->
          <div class="mb-4">
            <label class="block text-gray-700 mb-2">Categoría</label>
            <input type="text"
                   [(ngModel)]="newProduct.categoria"
                   name="categoria"
                   required
                   class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-purple-500">
          </div>
          <!-- Campo: Etiquetas -->
          <div class="mb-4">
            <label class="block text-gray-700 mb-2">Etiquetas (separadas por comas)</label>
            <input type="text"
                   [(ngModel)]="etiquetasInput"
                   name="etiquetas"
                   class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-purple-500">
          </div>
          <!-- Botón de envío -->
          <div class="flex justify-end">
            <button type="submit"
                    class="bg-purple-500 hover:bg-purple-700 text-white px-4 py-2 rounded-md transition-colors">
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  `,
  styles: []
})
export class AddFormComponent {
  @Output() onAddProduct = new EventEmitter<Producto>();
  @Output() onClose = new EventEmitter<void>();

  faTimes = faTimes;

  // Modelo para el nuevo producto
  newProduct: Producto = {
    id: Date.now(), // Se utiliza la marca de tiempo como ID provisional
    nombre: '',
    descripcion: '',
    precio: 0,
    imagen: '',
    marca: '',
    categoria: '',
    etiquetas: []
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
      id: Date.now(),
      nombre: '',
      descripcion: '',
      precio: 0,
      imagen: '',
      marca: '',
      categoria: '',
      etiquetas: []
    };
    this.etiquetasInput = '';
  }
}
