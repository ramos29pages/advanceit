import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRight, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';

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
  selector: 'app-case-studies-list',
  imports: [CommonModule, FormsModule, FontAwesomeModule],
  templateUrl: './case-studies-list.component.html',
})
export class CaseStudiesListComponent {
  // Íconos de FontAwesome
  faArrowRight = faArrowRight;
  faPhoneVolume = faPhoneVolume;

  // Texto del contador
  get totalResultsText(): string {
    return `Showing ${this.filteredCaseStudies.length} results of ${this.caseStudies.length} posts.`;
  }

  // Categorías disponibles
  categories = ['Sales', 'Operations', 'Technology', 'IA', 'Marketing'];

  // Datos principales (4 tarjetas de ejemplo)
  caseStudies: CaseStudy[] = [
    {
      id: 1,
      category: 'Technology',
      title: 'Introduction to generative AI',
      description:
        'This course offers a practical and theoretical introduction to the generation of content using language models. It aims to provide students with the essential skills to effectively and responsibly utilize and comprehend these powerful tools.',
      image:
        'https://1000marcas.net/wp-content/uploads/2019/12/Microsoft-Logo-768x432.png',
      link: 'https://learn.microsoft.com/en-us/training/modules/fundamentals-generative-ai/',
    },
    {
      id: 2,
      category: 'Technology',
      title: 'Describe the benefits of using cloud services',
      description:
        'This module offers a practical and theoretical introduction to the benefits cloud computing can provide for individuals and organizations. It aims to provide students with the essential understanding to effectively and responsibly comprehend the advantages of cloud services.',
      image:
        'https://1000marcas.net/wp-content/uploads/2019/12/Microsoft-Logo-768x432.png',
      link: 'https://learn.microsoft.com/en-us/training/modules/describe-benefits-use-cloud-services/',
    },
    {
      id: 3,
      category: 'BPO',
      title: 'TRANSFORMING BACK-OFFICE OPERATIONS THROUGH AUTOMATION',
      description:
        'Discover how we leveraged RPA (Robotic Process Automation) and AI-based solutions to optimize repetitive tasks, reduce errors, and enhance operational efficiency for our partners.',
      image:
        'https://cdn.prod.website-files.com/638a2705bc615a1ffb3bf928/64bea0e672f464eae9799c4b_BG%20Image.png',
    },
    {
      id: 4,
      category: 'Sales',
      title: 'SCALING TEAMS FOR GLOBAL EXPANSION',
      description:
        'Our proven recruitment processes and nearshore model allowed multiple global clients to rapidly expand their IT teams, cutting operational costs and reducing time-to-market.',
      image:
        'https://cdn.prod.website-files.com/638a2705bc615a1ffb3bf928/64bea0e672f464eae9799c4b_BG%20Image.png',
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
