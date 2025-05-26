import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faHdd,
  faMobileAlt,
  faLaptop,
  faPrint,
  faUsers,
  faCashRegister,
  faNetworkWired,
  faShieldAlt,
  faCode,
  faTv,
  faPlug,
  faChevronRight,
  faArrowLeft,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-category-menu',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './category.component.html',
})
export class CategoryMenuComponent {
  faChevronRight = faChevronRight;
  faArrowLeft = faArrowLeft;

  categories = [
    {
      name: 'Almacenamiento & Componentes',
      icon: faHdd,
      subcategories: [
        'Discos Duros HDD/SSD',
        'Memorias RAM',
        'Tarjetas Madre',
        'Procesadores',
        'Tarjetas Gráficas',
        'Fuentes de Poder',
        'Gabinetes',
        'Refrigeración',
      ],
    },
    {
      name: 'Celulares',
      icon: faMobileAlt,
      subcategories: [
        'Smartphones Android',
        'iPhones',
        'Accesorios para Celulares',
        'Cargadores y Power Banks',
        'Wearables',
      ],
    },
    {
      name: 'Computadores & Tabletas',
      icon: faLaptop,
      subcategories: [
        'AIO (2 en 1) & Desktops',
        'Laptops',
        'Servidores',
        'Small Form Factor',
        'Tablets',
        'Chromebooks',
        'Estaciones de Trabajo',
      ],
    },
    {
      name: 'Impresoras & Escáneres',
      icon: faPrint,
      subcategories: [
        'Impresoras Láser',
        'Impresoras de Tinta',
        'Multifuncionales',
        'Escáneres de Documentos',
        'Tóner y Cartuchos',
      ],
    },
    {
      name: 'Office Collaboration',
      icon: faUsers,
      subcategories: [
        'Cámaras para Conferencias',
        'Sistemas de Videoconferencia',
        'Auriculares y Audio',
        'Software Colaborativo',
        'Pantallas Interactivas',
      ],
    },
    {
      name: 'POS',
      icon: faCashRegister,
      subcategories: [
        'Terminales Punto de Venta',
        'Impresoras de Tickets',
        'Lectores de Códigos de Barras',
        'Cajones de Dinero',
        'Monitores POS',
      ],
    },
    {
      name: 'Redes',
      icon: faNetworkWired,
      subcategories: [
        'Routers',
        'Switches',
        'Access Points',
        'Firewalls',
        'Cables y Conectores de Red',
      ],
    },
    {
      name: 'Seguridad',
      icon: faShieldAlt,
      subcategories: [
        'Videovigilancia',
        'Cámaras IP',
        'Alarmas y Sensores',
        'Control de Acceso',
        'Seguridad Electrónica',
      ],
    },
    {
      name: 'Software',
      icon: faCode,
      subcategories: [
        'Sistemas Operativos',
        'Antivirus',
        'Productividad (Office, etc.)',
        'Diseño y Creatividad',
        'Software de Gestión Empresarial',
      ],
    },
    {
      name: 'TV & Monitores',
      icon: faTv,
      subcategories: [
        'Monitores para PC',
        'Monitores Gamer',
        'TV Smart',
        'TV Profesional / Comercial',
        'Soportes y Montajes',
      ],
    },
    {
      name: 'UPS',
      icon: faPlug,
      subcategories: [
        'UPS Interactivas',
        'UPS Online',
        'Reguladores de Voltaje',
        'Baterías para UPS',
        'Monitoreo de Energía',
      ],
    },
  ];

  private currentCategory: any = null;

  selectedCategory() {
    return this.currentCategory;
  }

  selectCategory(category: any) {
    this.currentCategory = category;
  }

  goBack() {
    this.currentCategory = null;
  }
}
