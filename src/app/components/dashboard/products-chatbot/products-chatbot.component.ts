import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-products-chatbot',
  imports: [CommonModule],
  template: `
    <div
      #scrollContainer
      class="custom-scroll flex space-x-2 overflow-x-auto"
      (wheel)="scrollHorizontally($event)"
    >
      <div
        *ngFor="let prod of products"
        class="bg-white rounded-lg p-2 w-30 flex-shrink-0 shadow-sm"
      >
        <img
          [src]="prod.image"
          alt="prod"
          class="w-full h-20 object-cover rounded"
        />
        <p class="text-sm font-semibold mt-1">{{ prod.name }}</p>
        <p class="text-xs text-gray-500">{{ prod.price }}</p>
        <button class="flex justify-center w-full"><p class="bg-orange-500 rounded text-white text-xs p-1 px-2 m-1 cursor-pointer">Ver más</p></button>
      </div>
    </div>
  `,
  styles: [
    `
      /* Estilos personalizados para el scrollbar */
      .custom-scroll {
        scrollbar-width: thin; /* Firefox */
        scrollbar-color: purple transparent; /* Firefox */
      }
      .custom-scroll::-webkit-scrollbar {
        /* Chrome, Edge, Safari */
        height: 8px;
      }
      .custom-scroll::-webkit-scrollbar-track {
        background: transparent;
      }
      .custom-scroll::-webkit-scrollbar-thumb {
        background-color: purple;
        border-radius: 4px;
      }
      .custom-scroll::-webkit-scrollbar-thumb:hover {
        background-color: rgba(128, 0, 128, 0.7);
      }
    `,
  ],
})
export class ProductsChatbotComponent {

  @ViewChild('scrollContainer') scrollContainer!: ElementRef<HTMLDivElement>;

  @Input() products = [
    { image: 'ruta/imagen1.jpg', name: 'Producto 1', price: '$10' },
    { image: 'ruta/imagen2.jpg', name: 'Producto 2', price: '$20' },
    // Agrega más productos según necesites
  ];

  scrollHorizontally(event: WheelEvent): void {
    // Se intercepta el evento solo cuando se hace hover en el contenedor
    event.preventDefault();
    this.scrollContainer.nativeElement.scrollLeft += event.deltaY;
  }
}
