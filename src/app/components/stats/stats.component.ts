import {
  Component,
  OnInit,
  OnDestroy,
  AfterViewInit,
  ViewChildren,
  ElementRef,
  QueryList
} from '@angular/core';
import { CommonModule } from '@angular/common';

/** Interfaz para cada estadística */
interface Stat {
  finalValue: number;   // Valor final al que se anima
  suffix?: string;      // Opcional: +, yrs., etc.
  label: string;        // Texto descriptivo
  currentValue: number; // Valor actual durante la animación
  observed: boolean;    // Indica si ya se observó y se inició la animación
}

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="relative py-16 px-4 text-center overflow-hidden">
      <!-- Fondo detrás de todos los rectángulos -->
      <div
        class="absolute inset-0 bg-center bg-no-repeat bg-contain opacity-20 z-0"
        style="background-image: url('https://cdn.prod.website-files.com/636a549426aa8438b3b45fa8/637649673a162c300e4c4887_about-lsg-bg-6.svg');"
      ></div>

      <div class="relative z-10 max-w-6xl mx-auto">
        <!-- Título -->
        <h2 class="text-2xl md:text-3xl lg:text-4xl font-extrabold uppercase text-purple-700 mb-12">
          What 10+ Years of Staffing Experience Looks Like
        </h2>

        <!-- Grid de 6 rectángulos -->
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
          <!-- Cada rectángulo -->
          <div
            #statCard
            *ngFor="let stat of stats; let i = index"
            class="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col items-center justify-center
                   w-72 h-48 relative"
          >
            <!-- Número animado -->
            <div class="text-4xl md:text-6xl font-extrabold text-purple-700">
              {{ stat.currentValue }}
              <span *ngIf="stat.suffix">{{ stat.suffix }}</span>
            </div>
            <!-- Etiqueta -->
            <p class="text-gray-600 font-bold text-sm mt-2">
              {{ stat.label }}
            </p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class StatsComponent implements OnInit, AfterViewInit, OnDestroy {
  // Arreglo de estadísticas
  stats: Stat[] = [
    { finalValue: 10000, suffix: '+', label: 'Employees', currentValue: 0, observed: false },
    { finalValue: 9,      label: 'Cities',               currentValue: 0, observed: false },
    { finalValue: 5,      label: 'Countries',            currentValue: 0, observed: false },
    { finalValue: 600, suffix: '+', label: 'Clients',    currentValue: 0, observed: false },
    { finalValue: 5,  suffix: ' yrs.', label: 'Inc. 5000 List in a Row.', currentValue: 0, observed: false },
    { finalValue: 5,      label: 'Solutions',            currentValue: 0, observed: false }
  ];

  @ViewChildren('statCard') statCards!: QueryList<ElementRef>;
  private observer!: IntersectionObserver;

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2
    };
    this.observer = new IntersectionObserver(this.handleIntersect.bind(this), options);

    // Observamos cada rectángulo
    this.statCards.forEach((card) => {
      this.observer.observe(card.nativeElement);
    });
  }

  /** Manejo de intersecciones */
  private handleIntersect(entries: IntersectionObserverEntry[]) {
    entries.forEach(entry => {
      const index = this.statCards.toArray().findIndex(
        el => el.nativeElement === entry.target
      );
      if (entry.isIntersecting && index !== -1) {
        if (!this.stats[index].observed) {
          this.stats[index].observed = true;
          this.startCounting(index);
        }
      }
    });
  }

  /** Lógica de conteo animado */
  private startCounting(index: number) {
    const stat = this.stats[index];
    const startValue = 0;
    const endValue = stat.finalValue;
    const duration = 2000; // 2s
    const frameRate = 16;  // ~60 fps
    const totalFrames = duration / frameRate;
    const increment = (endValue - startValue) / totalFrames;

    let currentFrame = 0;
    const intervalId = setInterval(() => {
      currentFrame++;
      stat.currentValue = Math.floor(startValue + increment * currentFrame);
      if (currentFrame >= totalFrames) {
        stat.currentValue = endValue;
        clearInterval(intervalId);
      }
    }, frameRate);
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
