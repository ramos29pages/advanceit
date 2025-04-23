import { Component, ElementRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-trm',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="bg-white rounded max-w-250 mx-auto relative">
      <!-- Contenedor relativo para solapar el widget y el skeleton -->
      <div class="relative">
        <!-- Contenedor donde se inyectará el widget -->
        <div id="widgetContainer" class="text-xs bg-rose-500 text-center flex items-center justify-center"></div>
        <!-- Overlay Skeleton: se muestra mientras isWidgetLoaded es false -->
        <div
          *ngIf="!isWidgetLoaded"
          class="absolute inset-0 flex animate-pulse items-center justify-center"
        >
          <div class="animate-pulse space-y-2 w-150">
            <div class="h-4 w-1/2 bg-rose-300 rounded mx-auto"></div>
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
})
export class TrmComponent implements OnInit {

  isWidgetLoaded: boolean = false;

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    const widgetContainer = this.elementRef.nativeElement.querySelector('#widgetContainer');
    // Se almacena la función original de document.write
    const originalDocWrite = document.write.bind(document);
    // Se utiliza casting a "any" para evitar la advertencia de deprecación en TypeScript
    (document as any).write = (content: string) => {
      widgetContainer.innerHTML += content;
    };

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://widgets.wilkinsonpc.com.co/curr/curr-usd-cop4.js';
    script.onload = () => {
      // Restauramos document.write a su funcionalidad original
      (document as any).write = originalDocWrite;
      this.isWidgetLoaded = true;
    };

    this.elementRef.nativeElement.appendChild(script);
  }
}


