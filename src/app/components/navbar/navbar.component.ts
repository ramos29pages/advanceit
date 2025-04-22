import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faPeopleArrows,
  faScrewdriverWrench,
  faRecycle,
  faTruckFast,
  faLayerGroup,
  faHeadphones,
  faFileSignature,
  faKey,
  faCloud,
  faCloudSun,
  faFingerprint,
  faUserShield,
  faChalkboardUser,
  faChartDiagram,
  faHouseLaptop,
  faVideo,
  faHome,
  faBuildingCircleArrowRight,
  faUser,
  faChevronDown,
  faTruck, // Icono para 'Operations'
  faLaptopCode, // Icono para 'Tech'
  faHeadset, // Icono para 'BPO'
  faChartLine, // Icono para 'Marketing'
  faHandshake, // Icono para 'Sales'
  faWarehouse, // Subitem 'Warehousing'
  faClipboard, // Subitem 'Back Office'
  faCode, // Subitem 'Software Development'
  faPhoneVolume, // Subitem 'Helpdesk'
  faChartPie, // Subitem 'Business Intelligence'
  faDatabase, // Subitem 'Data Science'
  faHandsHelping, // Subitem 'Customer Support'
  faUserTie, // Subitem 'Professional Services'
  faUsers, // Subitem 'Recruitment'
  faPalette, // Subitem 'Creative Professionals'
  faUserFriends, // Subitem 'Sales Dev Reps'
  faDollarSign, // Subitem 'Nuestro Equipo de Ventas'
  faClockRotateLeft,
  faNewspaper,
  faHeart,
  faShieldHalved,
  faStore,
  faIndustry,
  faFileLines,
  faCircleQuestion,
  faCalendarDays,
  faUserGear,
  faPlaneUp,
  faShoppingCart,
  faGlobe,
  faLanguage,
  faServer,
  faIndianRupeeSign,
} from '@fortawesome/free-solid-svg-icons';
import { MobileMenuComponent } from './mobile-menu/mobile-menu.component';
import { TitleMegaMenuComponent } from '../../utils/title-mega-menu/title-mega-menu.component';
import { TrmComponent } from './trm/trm.component';
import { NavbarSectionsComponent } from './navbar-sections/navbar-sections.component';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
    FontAwesomeModule,
    NgClass,
    MobileMenuComponent,
    NgIf,
    TrmComponent,
    NavbarSectionsComponent,
    TranslatePipe
  ],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  faGlobe = faLanguage;
  // faUser = faUser;
  // faHome = faHome;
  faShoppingCart = faShoppingCart;
  textIdiom = 'es';
  idiom = 'English'

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['es', 'en']);
    this.translate.setDefaultLang('es');
    this.translate.use('es');
  }

  cambiarIdioma() {
    this.textIdiom == 'es' ? (this.textIdiom = 'en') : (this.textIdiom = 'es');
    this.textIdiom == 'es' ? (this.idiom = 'English') : (this.idiom = 'Español');
    this.translate.use(this.textIdiom);
  }

  isMobileMenuOpen = false;

  isMegaMenuOpen: boolean = false;

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    document.body.classList.toggle('overflow-hidden', this.isMobileMenuOpen);
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
    console.log('CERRAR MENU');
    document.body.classList.remove('overflow-hidden');
  }
}
