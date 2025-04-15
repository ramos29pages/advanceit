import { Component, Input } from '@angular/core';
import { TitleMegaMenuComponent } from '../../../utils/title-mega-menu/title-mega-menu.component';
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
  faServer,
  faIndianRupeeSign
} from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar-sections',
  imports: [TitleMegaMenuComponent, FontAwesomeModule, CommonModule, RouterLinkActive, RouterLink, TranslatePipe],
  templateUrl: './navbar-sections.component.html',
})
export class NavbarSectionsComponent {

@Input() isMobileMenuOpen = false;
@Input() isMegaMenuOpen = false;

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
  faIndianRupeeSign = faIndianRupeeSign;



  //new icons

  faPeopleArrows = faPeopleArrows;
  faScrewdriverWrench = faScrewdriverWrench;
  faRecycle = faRecycle;
  faTruckFast = faTruckFast;
  faLayerGroup = faLayerGroup;
  faHeadphones = faHeadphones;
  faFileSignature = faFileSignature;
  faKey = faKey;
  faCloud= faCloud;
  faCloudSun = faCloudSun;
  faFingerprint = faFingerprint;
  faUserShield = faUserShield;
  faChalkboardUser = faChalkboardUser;
  faChartDiagram = faChartDiagram;
  faHouseLaptop = faHouseLaptop;
  faVideo= faVideo;
  faServer = faServer;
  faBuildingCircleArrowRight = faBuildingCircleArrowRight;

}
