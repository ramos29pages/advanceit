import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faHome,
  faGlobe,
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
} from '@fortawesome/free-solid-svg-icons';
import { MobileMenuComponent } from './mobile-menu/mobile-menu.component';
import { TitleMegaMenuComponent } from '../../utils/title-mega-menu/title-mega-menu.component';
// import { MobileMenuComponent } from './mobile-menu/mobile-menu.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
  RouterLink,
    RouterLinkActive,
    FontAwesomeModule,
    NgClass,
    MobileMenuComponent,
    TitleMegaMenuComponent,
    NgIf,
  ],
  templateUrl: './navbar.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class NavbarComponent {
  faGlobe = faGlobe;
  faUser = faUser;
  faHome = faHome;
  faShoppingCart = faShoppingCart;

  // Íconos para mega menú
  faTruck = faTruck;
  faLaptopCode = faLaptopCode;
  faHeadset = faHeadset;
  faChartLine = faChartLine;
  faHandshake = faHandshake;
  faWarehouse = faWarehouse;
  faClipboard = faClipboard;
  faCode = faCode;
  faPhoneVolume = faPhoneVolume;
  faChartPie = faChartPie;
  faDatabase = faDatabase;
  faHandsHelping = faHandsHelping;
  faUserTie = faUserTie;
  faUsers = faUsers;
  faUserFriends = faUserFriends;
  faDollarSign = faDollarSign;
  faClockRotateLeft = faClockRotateLeft;
  faNewspaper = faNewspaper;
  faHeart = faHeart;
  faPalette = faPalette;
  faStore = faStore;
  faIndustry = faIndustry;
  faShieldHalved = faShieldHalved;
  faFileLines = faFileLines;
  faCircleQuestion = faCircleQuestion;
  faCalendarDays = faCalendarDays;
  faUserGear = faUserGear;
  faPlaneUp = faPlaneUp;
  faChevronDown = faChevronDown;

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
