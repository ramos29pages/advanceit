// category-menu.component.ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  imports: [CommonModule],
  selector: 'app-category-menu',
  templateUrl: './category.component.html',
})
export class CategoryMenuComponent {
  categories = [
    {
      name: 'Tecnología',
      icon: 'fas fa-laptop-code',
      subcategories: [
        'Computadoras',
        'Smartphones',
        'Gadgets',
        'Accesorios',
        'Redes',
        'Domótica',
        'Drones',
        'Realidad Virtual',
      ],
    },
    {
      name: 'Cloud',
      icon: 'fas fa-cloud',
      subcategories: [
        'IaaS (Infraestructura como Servicio)',
        'PaaS (Plataforma como Servicio)',
        'SaaS (Software como Servicio)',
        'Almacenamiento en la Nube',
        'Bases de Datos en la Nube',
        'Computación sin Servidor (Serverless)',
        'Migración a la Nube',
        'Seguridad en la Nube',
      ],
    },
    {
      name: 'Ciberseguridad',
      icon: 'fas fa-shield-alt',
      subcategories: [
        'Seguridad de Redes',
        'Seguridad de Datos',
        'Análisis de Vulnerabilidades',
        'Gestión de Identidades y Accesos (IAM)',
        'Cifrado',
        'Respuesta a Incidentes',
        'Seguridad en la Nube',
        'Concienciación en Ciberseguridad',
      ],
    },
    {
      name: 'Gestión de Activos de TI',
      icon: 'fas fa-boxes',
      subcategories: [
        'Aprovisionamiento de Hardware',
        'Administración y Seguimiento de Activos',
        'Reportes y Analíticas de TI',
        'Resolución de Problemas y Mantenimiento de Hardware',
        'Soporte de Garantía Local',
        'Disposición y Reciclaje de Activos',
        'Adquisición y Logística en LATAM',
      ],
    },
    {
      name: 'Servicios de Software',
      icon: 'fas fa-cogs',
      subcategories: [
        'Software como Servicio (SaaS)',
        'Desarrollo de Software a Medida',
        'Adobe Sign y Creative Cloud',
        'Aplicaciones Empresariales en la Nube',
        'Optimización y Cumplimiento de Licencias',
      ],
    },
    {
      name: 'Servicios de Mesa de Ayuda y Soporte de TI',
      icon: 'fas fa-headset',
      subcategories: [
        'Soporte de Mesa de Ayuda 24/7',
        'Asistencia de TI Impulsada por IA',
        'Gestión del Flujo de Servicios',
      ],
    },
    {
      name: 'Proyectos de TI y Tecnología Empresarial',
      icon: 'fas fa-project-diagram',
      subcategories: [
        'Configuración de TI para Nuevas Oficinas',
        'Soluciones de Sala de Conferencias y AV',
        'Soluciones de Centro de Datos y Sala de Servidores',
        'Reubicación y Expansión de TI',
      ],
    },
  ];

  private currentCategory: any = null;

  // Retorna la categoría actualmente seleccionada (si hay una)
  selectedCategory() {
    return this.currentCategory;
  }

  // Maneja la selección de una categoría
  selectCategory(category: any) {
    this.currentCategory = category;
  }

  // Vuelve al listado principal de categorías
  goBack() {
    this.currentCategory = null;
  }
}
