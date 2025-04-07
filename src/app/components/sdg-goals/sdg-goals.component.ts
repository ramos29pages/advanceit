import { Component, ViewChild, ViewContainerRef, Type } from '@angular/core';
import { CommonModule } from '@angular/common';

/** Interfaz para cada tab */
interface TabItem {
  title: string;
  loadComponent: () => Promise<Type<any>>; // Función que retorna una promesa para cargar el componente
}

@Component({
  selector: 'app-sdg-goals',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-8 px-4">
      <div class="max-w-6xl mx-auto">
        <!-- Título principal -->
        <h2
          class="text-xl md:text-2xl font-extrabold uppercase text-center mb-8 bg-gradient-to-r from-purple-500/50 via-pink-500/50 to-orange-500/50 text-white py-20"
        >
          Terms And Conditions
        </h2>

        <!-- Contenedor de 2 columnas: lista izquierda, contenido derecho -->
        <div class="grid grid-cols-1 md:grid-cols-[250px_auto] gap-8 sticky top-20">
          <!-- Columna Izquierda: Lista de tabs -->
          <div>
            <ul class="space-y-2">
              <li
                *ngFor="let tab of tabItems; let i = index"
                (click)="selectTab(i)"
                class="truncate"
                [class]="
                  'cursor-pointer p-2 border-l-4 ' +
                  (selectedIndex === i
                    ? 'border-purple-600 bg-purple-50 font-semibold'
                    : 'border-transparent hover:bg-gray-100')
                "
              >
                {{ tab.title }}
                <span *ngIf="loadingIndex === i" class="ml-2 inline-block">
                  <div class="w-4 h-4 border-2 border-t-2 border-purple-500 rounded-full animate-spin"></div>
                </span>
              </li>
            </ul>
          </div>

          <!-- Columna Derecha: Contenedor para el componente cargado dinámicamente -->
          <div class="bg-white rounded-lg shadow p-6 min-h-64">
            <!-- Pantalla de carga mientras se carga el componente -->
            <div *ngIf="isLoading" class="flex justify-center items-center h-full py-12">
              <div class="text-center">
                <div class="w-12 h-12 border-4 border-t-4 border-purple-500 rounded-full animate-spin mx-auto mb-4"></div>
                <p class="text-gray-500">Cargando contenido...</p>
              </div>
            </div>

            <!-- Contenedor donde se renderizará el componente -->
            <div #componentContainer></div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [],
})
export class SdgGoalsComponent {
  // ViewChild para acceder al contenedor donde renderizaremos los componentes
  @ViewChild('componentContainer', { read: ViewContainerRef, static: true })
  componentContainer!: ViewContainerRef;

  // Control de estado de carga
  isLoading: boolean = true;
  loadingIndex: number | null = null;

  // Array de tabs con título y función para cargar componente
  tabItems: TabItem[] = [
    {
      title: 'POLÍTICA DE COOKIES',
      loadComponent: () => import('../terms/cookies-policy/cookies-policy.component')
        .then(m => m.CookiesPolicyComponent)
    },
    {
      title: 'AVISO DE PRIVACIDAD ',
      loadComponent: () => import('../terms/data-responsible/data-responsible.component')
        .then(m => m.DataResponsibleComponent)
    },
    {
      title: 'TÉRMINOS Y CONDICIONES DE USO',
      loadComponent: () => import('../terms/terms-conditions/terms-conditions.component')
        .then(m => m.TermsConditionsComponent)
    },
    {
      title: 'POLÍTICA DE HABEAS DATA',
      loadComponent: () => import('../terms/privacy-policy/privacy-policy.component')
        .then(m => m.PrivacyPolicyComponent)
    }
  ];

  selectedIndex: number = 0;

  // Se ejecuta después de la inicialización del componente
  ngAfterViewInit() {
    // Cargamos el primer componente por defecto
    this.loadComponent(this.selectedIndex);
  }

  // Método para seleccionar una tab y cargar su componente
  selectTab(index: number) {
    if (this.selectedIndex === index) return; // Evita recargar el mismo componente

    this.selectedIndex = index;
    this.loadComponent(index);
  }

  // Método para cargar un componente dinámicamente con lazy loading
  async loadComponent(index: number) {
    this.isLoading = true;
    this.loadingIndex = index;
    this.componentContainer.clear();

    try {
      // Cargamos el componente dinámicamente
      const componentType = await this.tabItems[index].loadComponent();

      // Una vez cargado, lo creamos en el contenedor
      const componentRef = this.componentContainer.createComponent(componentType);

      // Si necesitas pasar inputs al componente:
      // componentRef.instance.someInput = someValue;

    } catch (error) {
      console.error('Error loading component:', error);
    } finally {
      this.isLoading = false;
      this.loadingIndex = null;
    }
  }
}
