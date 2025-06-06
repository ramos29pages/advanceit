/*==================================*/
/*   LAYOUT COMPONENT (dashboard-layout.component.ts)   */
/*==================================*/
import {
  Component,
  ViewChild
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../../components/dashboard/sidebar/sidebar.component';
import { TopbarComponent } from '../../components/dashboard/topbar/topbar.component';

@Component({
  selector: 'app-dashboard-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SidebarComponent, TopbarComponent],
  template: `
    <div class="min-h-screen md:flex bg-gray-100">
      <!-- SIDEBAR -->
      <aside
        class="sticky top-0 z-20 md:z-auto left-0 h-full bg-white shadow-lg transform md:translate-x-0 transition-all"
        [ngClass]="{
          '-translate-x-full': !sidebarOpen,
          'md:w-24': isToggleSidebarDesktop,
          'md:w-60': !isToggleSidebarDesktop
        }"
      >
        <app-sidebar
          #sidebar
          (changeWithSideBar)="toggleSidebarDesktop()"
          [isToggleSidebarDesktop]="isToggleSidebarDesktop"
        ></app-sidebar>
      </aside>

      <!-- OVERLAY PARA MOBILE -->
      <div
        class="fixed inset-0 bg-black/50 md:hidden z-10"
        *ngIf="sidebarOpen"
        (click)="closeSidebarMobile()"
      ></div>

      <!-- CONTENIDO PRINCIPAL -->
      <div class="flex-1 flex flex-col z-0">
        <!-- TOPBAR -->
        <header class="sticky top-0 z-999">
          <app-topbar
            (toggleSidebarMobile)="toggleSidebarMobile()"
            (toggleSidebarDesktop)="toggleSidebarDesktop()"
          ></app-topbar>
        </header>

        <!-- ROUTER OUTLET -->
        <main class="flex-1">
          <router-outlet></router-outlet>
        </main>
      </div>
    </div>
  `,
  styles: []
})
export class DashboardLayoutComponent {
  @ViewChild('sidebar') sidebarRef!: SidebarComponent;

  sidebarOpen: boolean = false;
  isToggleSidebarDesktop: boolean = false;

  toggleSidebarMobile() {
    this.sidebarOpen = !this.sidebarOpen;
    if (!this.sidebarOpen) {
      this.closeAllSubmenus();
    }
  }

  closeSidebarMobile() {
    this.sidebarOpen = false;
    this.closeAllSubmenus();
  }

  toggleSidebarDesktop() {
    this.isToggleSidebarDesktop = !this.isToggleSidebarDesktop;
    if (this.isToggleSidebarDesktop) {
      this.closeAllSubmenus();
    }
  }

  private closeAllSubmenus() {
    if (this.sidebarRef) {
      this.sidebarRef.closeAllSubmenus();
    }
  }
}
