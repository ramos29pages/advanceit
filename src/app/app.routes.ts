import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { AlianzasComponent } from './pages/alianzas/alianzas.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { LoginComponent } from './pages/login/login.component';


export const routes: Routes = [
  { path: 'inicio', loadComponent: () => import('./pages/inicio/inicio.component').then(m => m.InicioComponent) },
  { path: 'servicios', loadComponent: () => import('./pages/servicios/servicios.component').then(m => m.ServiciosComponent) },
  { path: 'nosotros', loadComponent: () => import('./pages/nosotros/nosotros.component').then(m => m.NosotrosComponent) },
  { path: 'alianzas', loadComponent: () => import('./pages/alianzas/alianzas.component').then(m => m.AlianzasComponent) },
  { path: 'blog', loadComponent: () => import('./pages/blog/blog.component').then(m => m.BlogComponent) },
  { path: 'productos', loadComponent: () => import('./pages/productos/productos.component').then(m => m.ProductosComponent) },
  { path: 'contacto', loadComponent: () => import('./pages/contacto/contacto.component').then(m => m.ContactoComponent) },
  { path: 'login', loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent) },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' }
];
