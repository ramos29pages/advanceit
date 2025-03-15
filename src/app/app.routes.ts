import { Routes } from '@angular/router';


export const routes: Routes = [
  { path: 'inicio', loadComponent: () => import('./pages/inicio/inicio.component').then(m => m.InicioComponent) },
  { path: 'servicios', loadComponent: () => import('./pages/servicios/servicios.component').then(m => m.ServiciosComponent) },
  { path: 'transporte-logistica', loadComponent: () => import('./pages/solutions/logistic/logistic.component').then(m => m.LogisticComponent) },
  { path: 'global-forwarding', loadComponent: () => import('./pages/solutions/forward/forward.component').then(m => m.ForwardComponent) },
  { path: 'warehousing-distribution', loadComponent: () => import('./pages/solutions/warehousing/warehousing.component').then(m => m.WarehousingComponent) },
  { path: 'back-office', loadComponent: () => import('./pages/solutions/back-office/back-office.component').then(m => m.BackOfficeComponent) },
  { path: 'nosotros', loadComponent: () => import('./pages/nosotros/nosotros.component').then(m => m.NosotrosComponent) },
  { path: 'nuestra-historia', loadComponent: () => import('./pages/nosotros/ourhistory/ourhistory.component').then(m => m.OurhistoryComponent) },
  { path: 'nuestro-equipo-directivo', loadComponent: () => import('./pages/nosotros/equipo-directivo/equipo-directivo.component').then(m => m.EquipoDirectivoComponent) },
  { path: 'nuestro-equipo-ventas', loadComponent: () => import('./pages/nosotros/equipo-ventas/equipo-ventas.component').then(m => m.EquipoVentasComponent) },
  { path: 'impacto-social', loadComponent: () => import('./pages/nosotros/impacto-social/impacto-social.component').then(m => m.ImpactoSocialComponent) },
  { path: 'noticias', loadComponent: () => import('./pages/nosotros/noticias-empresa/noticias-empresa.component').then(m => m.NoticiasEmpresaComponent) },
  { path: 'alianzas', loadComponent: () => import('./pages/alianzas/alianzas.component').then(m => m.AlianzasComponent) },
  { path: 'blog', loadComponent: () => import('./pages/blog/blog.component').then(m => m.BlogComponent) },
  { path: 'productos', loadComponent: () => import('./pages/productos/productos.component').then(m => m.ProductosComponent) },
  { path: 'contacto', loadComponent: () => import('./pages/contacto/contacto.component').then(m => m.ContactoComponent) },
  { path: 'login', loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent) },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' }
];
