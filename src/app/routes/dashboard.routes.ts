import { Routes } from '@angular/router';

export const dashboardRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('../layout/dashboard-layout/dashboard-layout.component').then(m => m.DashboardLayoutComponent),
    children: [
      {
        path: 'home',
        loadComponent: () => import('../pages/dashboard/home/home.component').then(m => m.HomeComponent)
      },
      {
        path: 'add-products',
        loadComponent: () => import('../pages/dashboard/add-products/add-products.component').then(m => m.AddProductsComponent)
      },
      {
        path: 'orders',
        loadComponent: () => import('../pages/dashboard/orders/orders.component').then(m => m.OrdersComponent)
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]
  }
];
