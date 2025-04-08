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
      link: 'wp-stanley',
    },
    {
      id: 2,
      category: 'Technology',
      title: 'White Paper: Power BI Dashboard Implementation for BIOGEN (September 2023) BIOGEN Colombia, Argentina, Chile, Peru, Mexico. Project Overview ',
      description:
        'Advance Technology Projects successfully developed and implemented a Power BI dashboard for BIOGEN Pharma, providing a comprehensive data visualization and analytics solution to enhance decision-making and operational efficiency. ',
      image:
        'https://mlt.org/wp-content/uploads/2020/11/Biogen-Logo.png',
      link: 'wp-biogen',
    },
    {
      id: 3,
      category: 'Technology',
      title: 'White Paper: Technology Deployment for Stonexs New Offices in Bogotá, Colombia Client: Stonex (U.S. Financial Institution) ',
      description:
        'Advance Technology Projects is proud to have played a key role in supporting Stonex, a leading U.S. financial institution, in the successful launch of its new corporate offices in Bogotá, Colombia.This project involved the procurement, configuration, and deployment of cutting-edge technology solutions, ensuring that Stonex’s employees could operate efficiently and securely in their new environment.',
      image:
        'https://1000marcas.net/wp-content/uploads/2021/08/StoneX-Logo.png',
      link: 'wp-stonex',
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
