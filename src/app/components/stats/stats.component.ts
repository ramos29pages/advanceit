import {
  Component,
  OnInit,
  OnDestroy,
  AfterViewInit,
  ViewChildren,
  ElementRef,
  QueryList,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';

/** Interfaz para cada estadística */
interface Stat {
  finalValue: number; // Valor final al que se anima
  suffix?: string; // Opcional: +, yrs., etc.
  labelKey: string; // Clave de traducción para la etiqueta
  currentValue: number; // Valor actual durante la animación
  observed: boolean; // Indica si ya se observó y se inició la animación
}

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  template: `
    <section class="relative py-16 px-4 text-center overflow-hidden">
      <div
        class="absolute inset-0 bg-center bg-no-repeat bg-contain opacity-20 z-0"
        style="background-image: url('https://cdn.prod.website-files.com/636a549426aa8438b3b45fa8/637649673a162c300e4c4887_ut-lsg-bg-6.svg');"
      ></div>

      <div class="relative z-10 max-w-6xl mx-auto">
        <h2
          class="text-2xl md:text-3xl lg:text-4xl font-extrabold uppercase text-purple-700 mb-12"
        >
          {{ 'statsSection.title' | translate }}
        </h2>

        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center"
        >
          <div
            #statCard
            *ngFor="let stat of stats; let i = index"
            class="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col items-center justify-center
                    w-72 h-48 relative"
          >
            <div class="text-4xl md:text-6xl font-extrabold text-purple-700">
              {{ stat.currentValue }}
              <span *ngIf="stat.suffix">{{ stat.suffix }}</span>
            </div>
            <p class="text-gray-600 font-bold text-sm mt-2">
              {{ stat.labelKey | translate }}
            </p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [],
})
export class StatsComponent implements OnInit, AfterViewInit, OnDestroy {

  // Arreglo de estadísticas
  stats: Stat[] = [
    {
      finalValue: 2495,
      suffix: '+',
      labelKey: 'statsSection.stats.0.label',
      currentValue: 0,
      observed: false,
    },
    { finalValue: 17, labelKey: 'statsSection.stats.1.label', currentValue: 0, observed: false },
    { finalValue: 3, labelKey: 'statsSection.stats.2.label', currentValue: 0, observed: false },
    {
      finalValue: 195,
      suffix: '+',
      labelKey: 'statsSection.stats.3.label',
      currentValue: 0,
      observed: false,
    },
    {
      finalValue: 15,
      suffix: ' yrs.',
      labelKey: 'statsSection.stats.4.label',
      currentValue: 0,
      observed: false,
    },
    {
      finalValue: 5000,
      suffix: '+',
      labelKey: 'statsSection.stats.5.label',
      currentValue: 0,
      observed: false,
    },
  ];

  @ViewChildren('statCard') statCards!: QueryList<ElementRef>;
  private observer!: IntersectionObserver;

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2,
    };
    this.observer = new IntersectionObserver(
      this.handleIntersect.bind(this),
      options
    );

    // Observamos cada rectángulo
    this.statCards.forEach((card) => {
      this.observer.observe(card.nativeElement);
    });
  }

  /** Manejo de intersecciones */
  private handleIntersect(entries: IntersectionObserverEntry[]) {
    entries.forEach((entry) => {
      const index = this.statCards
        .toArray()
        .findIndex((el) => el.nativeElement === entry.target);
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
    const frameRate = 16; // ~60 fps
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
