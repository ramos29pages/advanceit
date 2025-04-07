import { Routes } from '@angular/router';
import { DashboardLayoutComponent } from './layout/dashboard-layout/dashboard-layout.component';
import { LandingLayoutComponent } from './layout/landing-layout/landing-layout.component';



export const routes: Routes = [
  {
    path: '',
    loadComponent: () => LandingLayoutComponent,
    // component: LandingLayoutComponent,
  },
  {
    path: 'dashboard',
    component: DashboardLayoutComponent,
    // canActivate: [AuthGuard],  // Protegemos todas las rutas del dashboard
    children: [
      { path: 'home', loadComponent: () => import('./pages/dashboard/home/home.component').then(m => m.HomeComponent) },
      { path: 'add-products', loadComponent: () => import('./pages/dashboard/add-products/add-products.component').then(m => m.AddProductsComponent) },
      { path: 'orders', loadComponent: () => import('./pages/dashboard/orders/orders.component').then(m => m.OrdersComponent) },
      // Otras rutas protegidas...
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ]
  },
  { path: '**', redirectTo: '' }
];
