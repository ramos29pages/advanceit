import { Routes } from '@angular/router';
import { DashboardLayoutComponent } from './layout/dashboard-layout/dashboard-layout.component';
import { LandingLayoutComponent } from './layout/landing-layout/landing-layout.component';



export const routes: Routes = [
  {
    path: '',
    component: LandingLayoutComponent,
    children: [
      { path: '', loadComponent: () => import('./pages/inicio/inicio.component').then(m => m.InicioComponent) },
      // services
      { path: 'servicios', loadComponent: () => import('./pages/servicios/servicios.component').then(m => m.ServiciosComponent) },
      { path: 'transporte-logistica', loadComponent: () => import('./pages/solutions/logistic/logistic.component').then(m => m.LogisticComponent) },
      { path: 'global-forwarding', loadComponent: () => import('./pages/solutions/forward/forward.component').then(m => m.ForwardComponent) },
      { path: 'warehousing-distribution', loadComponent: () => import('./pages/solutions/warehousing/warehousing.component').then(m => m.WarehousingComponent) },
      { path: 'back-office', loadComponent: () => import('./pages/solutions/back-office/back-office.component').then(m => m.BackOfficeComponent) },
      { path: 'software-development', loadComponent: () => import('./pages/solutions/software/software.component').then(m => m.SoftwareComponent) },
      { path: 'heldesk-service', loadComponent: () => import('./pages/solutions/helpdesk/helpdesk.component').then(m => m.HelpdeskComponent) },
      { path: 'business-intelligence', loadComponent: () => import('./pages/solutions/bussines/bussines.component').then(m => m.BussinesComponent) },
      { path: 'data-science', loadComponent: () => import('./pages/solutions/datascience/datascience.component').then(m => m.DatascienceComponent) },
      { path: 'customer-support', loadComponent: () => import('./pages/solutions/customer-support/customer-support.component').then(m => m.CustomerSupportComponent) },
      { path: 'professional-services', loadComponent: () => import('./pages/solutions/professional-services/professional-services.component').then(m => m.ProfessionalServicesComponent) },
      { path: 'recruitment', loadComponent: () => import('./pages/solutions/recruitment/recruitment.component').then(m => m.RecruitmentComponent) },
      { path: 'creative-professionals', loadComponent: () => import('./pages/solutions/creative-professional/creative-professional.component').then(m => m.CreativeProfessionalComponent) },
      { path: 'sales', loadComponent: () => import('./pages/solutions/sales/sales.component').then(m => m.SalesComponent) },
      { path: 'carrier-sales', loadComponent: () => import('./pages/solutions/carrier-sales/carrier-sales.component').then(m => m.CarrierSalesComponent) },

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
    ]
  },
  {
    path: 'dashboard',
    component: DashboardLayoutComponent,
    // canActivate: [AuthGuard],  // Protegemos todas las rutas del dashboard
    children: [
      { path: 'home', loadComponent: () => import('./pages/dashboard/home/home.component').then(m => m.HomeComponent) },
      { path: 'products', loadComponent: () => import('./pages/dashboard/products/products.component').then(m => m.ProductsComponent) },
      // Otras rutas protegidas...
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ]
  },
  { path: '**', redirectTo: '' }
];
