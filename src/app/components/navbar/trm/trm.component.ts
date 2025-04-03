import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-trm',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="bg-white rounded max-w-250 mx-auto relative">
      <!-- Contenedor relativo para solapar el widget y el skeleton -->
      <div class="relative">
        <!-- Contenedor donde se inyectará el widget (document.write) -->
        <div id="widgetContainer"></div>
        <!-- Overlay Skeleton: se muestra mientras isWidgetLoaded es false -->
        <div
          *ngIf="!isWidgetLoaded"
          class="absolute inset-0 flex animate-pulse items-center justify-center bg-white bg-opacity-75"
        >
          <div class="animate-pulse space-y-2 w-full">
            <div class="h-4 w-1/2 bg-gray-300 rounded mx-auto"></div>
          </div>
        </div>
      </div>
      <div id="dolar_wpc4" class="hidden">
        <a href="https://dolar.wilkinsonpc.com.co/" target="_new">
          Precio del Dólar Hoy
        </a>
      </div>
    </section>
  `,
  styles: [`
    /* Estilos propios del widget */
    #widget_usd_cop4 {
      font-size: .8rem;
      color: #000;
      font-weight: 500;
    }
  `]
})
export class TrmComponent implements AfterViewInit {

  isWidgetLoaded: boolean = false;

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit(): void {
    // Seleccionamos el contenedor que recibirá el contenido del widget
    const widgetContainer = this.elementRef.nativeElement.querySelector('#widgetContainer');
    // Guardamos la función original de document.write
    const originalDocWrite = document.write;
    // Sobrescribimos document.write para que inserte el contenido en nuestro contenedor "widgetContainer"
    document.write = (content: string) => {
      widgetContainer.innerHTML += content;
    };

    // Creamos el elemento script para cargar el widget dinámicamente
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://widgets.wilkinsonpc.com.co/curr/curr-usd-cop4.js';
    script.onload = () => {
      // Una vez cargado el script, restauramos document.write y actualizamos la variable
      document.write = originalDocWrite;
      this.isWidgetLoaded = true;
    };

    // Agregamos el script al componente para que se ejecute
    this.elementRef.nativeElement.appendChild(script);
  }
}
