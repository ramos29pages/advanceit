import { Routes } from '@angular/router';
import { landingRoutes } from './routes/landing.routes';
import { dashboardRoutes } from './routes/dashboard.routes';

export const routes: Routes = [
  // Rutas de la parte pública (landing)
  ...landingRoutes,
  // Rutas del dashboard
  {
    path: 'dashboard',
    children: [
      ...dashboardRoutes
    ]
  },
  // Ruta comodín (404)
  { path: '**', redirectTo: '' }
];
