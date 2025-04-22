import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRight, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { HeroHeaderComponent } from "../../../components/hero-header/hero-header.component";
import { RouterLink } from '@angular/router';
import { FooterComponent } from "../../../components/footer/footer.component";
import { TranslatePipe } from '@ngx-translate/core';

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
  imports: [CommonModule, FormsModule, FontAwesomeModule, HeroHeaderComponent, RouterLink, FooterComponent, TranslatePipe],
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
      category: 'resources.whitePapers.wp1.category',
      title: 'resources.whitePapers.wp1.title',
      description:
        'resources.whitePapers.wp1.description',
      image:
        'https://techpoint.org/wp-content/uploads/2019/06/stanley-black-decker-logo-1024x483.png',
      link: 'contacto',
    },
    {
      id: 2,
      category: 'resources.whitePapers.wp2.category',
      title: 'resources.whitePapers.wp2.title',
      description:
        'resources.whitePapers.wp2.description',
      image:
        'https://mlt.org/wp-content/uploads/2020/11/Biogen-Logo.png',
      link: 'contacto',
    },
    {
      id: 3,
      category: 'resources.whitePapers.wp3.category',
      title: 'resources.whitePapers.wp3.title',
      description:
        'resources.whitePapers.wp3.description',
      image:
        'https://1000marcas.net/wp-content/uploads/2021/08/StoneX-Logo.png',
      link: 'contacto',
    },
    {
      id: 4,
      category: 'resources.whitePapers.wp4.category',
      title: 'resources.whitePapers.wp4.title',
      description:
        'resources.whitePapers.wp4.description',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Takeda_Pharmaceutical_Company_logo.svg/2560px-Takeda_Pharmaceutical_Company_logo.svg.png',
      link: 'contacto',
    },
    {
      id: 5,
      category: 'resources.whitePapers.wp5.category',
      title: 'resources.whitePapers.wp5.title',
      description:
        'resources.whitePapers.wp5.description',
      image:
        'https://jdrfixtures.com/wp-content/uploads/2020/01/client-logo-shire.png',
      link: 'contacto',
    },
    {
      id: 6,
      category: 'resources.whitePapers.wp6.category',
      title: 'resources.whitePapers.wp6.title',
      description:
        'resources.whitePapers.wp6.description',
      image:
        'https://d2c0db5b8fb27c1c9887-9b32efc83a6b298bb22e7a1df0837426.ssl.cf2.rackcdn.com/16327740-traffix-high-performance-logist-4000x1200.jpeg',
      link: 'contacto',
    },
    {
      id: 7,
      category: 'resources.whitePapers.wp7.category',
      title: 'resources.whitePapers.wp7.title',
      description:
        'resources.whitePapers.wp7.description',
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
