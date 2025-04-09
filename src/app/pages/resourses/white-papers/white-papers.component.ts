import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRight, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { HeroHeaderComponent } from "../../../components/hero-header/hero-header.component";
import { RouterLink } from '@angular/router';
import { FooterComponent } from "../../../components/footer/footer.component";

interface CaseStudy {
  id: number;
  category: string;
  title: string;
  description: string;
  image: string;
  link?: string;
}

@Component({
  standalone: true,
  selector: 'app-white-papers',
  imports: [CommonModule, FormsModule, FontAwesomeModule, HeroHeaderComponent, RouterLink, FooterComponent],
  templateUrl: './white-papers.component.html',
})
export class WhitepaperComponent {
  // Íconos de FontAwesome
  faArrowRight = faArrowRight;
  faPhoneVolume = faPhoneVolume;

  // Texto del contador
  get totalResultsText(): string {
    return `Showing ${this.filteredCaseStudies.length} results of ${this.caseStudies.length} posts.`;
  }

  // Categorías disponibles
  categories = ['Technology',];

  // Datos principales (4 tarjetas de ejemplo)
  caseStudies: CaseStudy[] = [
    {
      id: 1,
      category: 'Technology',
      title: 'White Paper: Cutting-Edge Technology Solutions for the Corporate Office Opening of Stanley Black & Decker in Medellín, Colombia (November 2018) ',
      description:
        `Advance Technology Projects is proud to have played a key role in the successful opening of Stanley Black & Decker's new
corporate offices in Medellín, Colombia. This project was executed in collaboration with leading technology brands, including
BARCO, LGSign, CISCO, Lenovo, Logitech, and Jabra. Over the course of 15 days, we provided, configured, and deployed state
of-the-art technologies to ensure seamless and efficient business operations from day one.`,
      image:
        'https://techpoint.org/wp-content/uploads/2019/06/stanley-black-decker-logo-1024x483.png',
      link: 'contacto',
    },
    {
      id: 2,
      category: 'Technology',
      title: 'White Paper: Power BI Dashboard Implementation for BIOGEN (September 2023) BIOGEN Colombia, Argentina, Chile, Peru, Mexico. Project Overview ',
      description:
        'Advance Technology Projects successfully developed and implemented a Power BI dashboard for BIOGEN Pharma, providing a comprehensive data visualization and analytics solution to enhance decision-making and operational efficiency. ',
      image:
        'https://mlt.org/wp-content/uploads/2020/11/Biogen-Logo.png',
      link: 'contacto',
    },
    {
      id: 3,
      category: 'Technology',
      title: 'White Paper: Technology Deployment for Stonexs New Offices in Bogotá, Colombia Client: Stonex (U.S. Financial Institution) January 2023 - April 2025',
      description:
        'Advance Technology Projects is proud to have played a key role in supporting Stonex, a leading U.S. financial institution, in the successful launch of its new corporate offices in Bogotá, Colombia.This project involved the procurement, configuration, and deployment of cutting-edge technology solutions, ensuring that Stonex’s employees could operate efficiently and securely in their new environment.',
      image:
        'https://1000marcas.net/wp-content/uploads/2021/08/StoneX-Logo.png',
      link: 'contacto',
    },
    {
      id: 4,
      category: 'Technology',
      title: 'White Paper: Advanced Technology Solutions for Shire (Now Takeda) in Bogotá, Colombia Project Overview September 2018 - September 2022 ',
      description:
        'Advance Technology Projects is proud to have played a pivotal role in the establishment of Shire Pharmaceutical offices in Bogotá, Colombia, in September 2018. With Shire’s acquisition by Takeda, we continued our partnership by providing technology solutions and hardware standardization in 2022, ensuring a seamless transition and enhanced operational efficiency for Takeda’s growing presence in Colombia.',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Takeda_Pharmaceutical_Company_logo.svg/2560px-Takeda_Pharmaceutical_Company_logo.svg.png',
      link: 'contacto',
    },
    {
      id: 5,
      category: 'Technology',
      title: 'White Paper: Advanced IT Solutions Cutting-Edge IT Infrastructure for Shire Pharmaceutical Corporate Offices in Bogotá, Colombia (Date: September 2018) ',
      description:
        "Advance Technology Projects is proud to have contributed to the successful opening of Shire Pharmaceutical's new corporate offices in Bogotá, Colombia. This project was completed in collaboration with leading IT brands, including Dell, Poly, Cisco, HP, Condeco, LG, and Microsoft, ensuring that Shire Pharmaceutical had the best-in-class technology to support its operations. The deployment was carried out in close coordination with architects, construction firms, and Shire's internal team to ensure a seamless integration of IT infrastructure into the new office space.",
      image:
        'https://jdrfixtures.com/wp-content/uploads/2020/01/client-logo-shire.png',
      link: 'contacto',
    },
    {
      id: 6,
      category: 'Technology',
      title: 'White Paper: Advanced Technology Solutions for TRAFFIXs IT Infrastructure Deployment ',
      description:
        "Cutting-Edge IT Hardware Provisioning & Remote Support Services for TRAFFIX in Colombia Advance Technology Projects is proud to have collaborated with TRAFFIX, a leading Canadian logistics company, to support their IT infrastructure expansion across multiple cities in Colombia. Our team successfully provisioned high-performance IT hardware and continues to deliver comprehensive hardware administration and help desk services for remote users in key locations, including Cartagena, Bogotá, Medellín, Cali, Barranquilla, Villavicencio, amongst other cities in Colombia.",
      image:
        'https://d2c0db5b8fb27c1c9887-9b32efc83a6b298bb22e7a1df0837426.ssl.cf2.rackcdn.com/16327740-traffix-high-performance-logist-4000x1200.jpeg',
      link: 'contacto',
    },
    {
      id: 7,
      category: 'Technology',
      title: 'IT Solutions for Masiv – Omnichannel Software Company Project: IT Infrastructure and Digital Solutions for Masiv’s Offices in Bogotá, Colombia Duration: November 2018 – August 2023 ',
      description:
        "Advance Technology Projects is proud to have partnered with Masiv, a leading omnichannel software company, to enhance its IT infrastructure and digital capabilities. Over the course of five years, we have supplied and managed a range of hardware and software solutions tailored to meet the evolving needs of Masiv’s operations in Bogotá, Colombia. Our collaboration included provisioning cutting-edge IT equipment, ensuring seamless integration, and providing continuous support to maintain operational efficiency and security.",
      image:
        'https://masiv.com/wp-content/uploads/2025/03/Logo-Horizontal-Masiv.png',
      link: 'contacto',
    },

  ];

  // Control de búsqueda
  searchTerm = '';

  // Control de categorías seleccionadas
  selectedCategories: string[] = [];

  // Filtrar dinámicamente
  get filteredCaseStudies(): CaseStudy[] {
    return this.caseStudies.filter((item) => {
      // Filtro por término de búsqueda
      const matchesSearch = this.matchesSearchTerm(item);
      // Filtro por categoría
      const matchesCategory = this.matchesSelectedCategories(item);
      return matchesSearch && matchesCategory;
    });
  }

  // Verifica si coincide con el término de búsqueda
  private matchesSearchTerm(item: CaseStudy): boolean {
    if (!this.searchTerm) return true;
    const term = this.searchTerm.toLowerCase();
    return (
      item.title.toLowerCase().includes(term) ||
      item.category.toLowerCase().includes(term) ||
      item.description.toLowerCase().includes(term)
    );
  }

  // Verifica si coincide con las categorías seleccionadas
  private matchesSelectedCategories(item: CaseStudy): boolean {
    if (this.selectedCategories.length === 0) return true;
    return this.selectedCategories.includes(item.category);
  }

  // Maneja la selección/deselección de categorías
  onCategoryChange(category: string, event: any) {
    if (event.target.checked) {
      this.selectedCategories.push(category);
    } else {
      this.selectedCategories = this.selectedCategories.filter(
        (c) => c !== category
      );
    }
  }
}
