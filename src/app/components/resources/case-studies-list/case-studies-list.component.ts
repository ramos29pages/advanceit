import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRight, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

interface CaseStudy {
  id: number;
  category: string;
  titleKey: string;
  descriptionKey: string;
  image: string;
  link: string;
}

@Component({
  standalone: true,
  selector: 'app-case-studies-list',
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule,
    RouterLink,
    TranslatePipe,
  ],
  templateUrl: './case-studies-list.component.html',
})
export class CaseStudiesListComponent {
  // Íconos de FontAwesome
  faArrowRight = faArrowRight;
  faPhoneVolume = faPhoneVolume;

  // Clave para el texto del contador
  totalResultsTextKey = 'resources.academy.totalResultsText';

  // Claves para las categorías
  categoriesKeys = [
    'resources.academy.categories.businessApplications',
    'resources.academy.categories.technology',
    'resources.academy.categories.infrastructure',
    'resources.academy.categories.ia',
  ];

  // Datos principales (4 tarjetas de ejemplo)
  caseStudies: CaseStudy[] = [
    {
      id: 1,
      category: 'resources.academy.courses.c1.category',
      titleKey: 'resources.academy.courses.c1.title',
      descriptionKey: 'resources.academy.courses.c1.description',
      image:
        'https://1000marcas.net/wp-content/uploads/2019/12/Microsoft-Logo-768x432.png',
      link: 'https://learn.microsoft.com/en-us/training/modules/fundamentals-generative-ai/',
    },
    {
      id: 2,
      category: 'resources.academy.courses.c2.category',
      titleKey: 'resources.academy.courses.c2.title',
      descriptionKey: 'resources.academy.courses.c2.description',
      image:
        'https://1000marcas.net/wp-content/uploads/2019/12/Microsoft-Logo-768x432.png',
      link: 'https://learn.microsoft.com/en-us/training/modules/describe-benefits-use-cloud-services/',
    },
    {
      id: 3,
      category: 'resources.academy.courses.c3.category',
      titleKey: 'resources.academy.courses.c3.title',
      descriptionKey: 'resources.academy.courses.c3.description',
      image:
        'https://1000marcas.net/wp-content/uploads/2019/12/Microsoft-Logo-768x432.png',
      link: 'https://learn.microsoft.com/en-us/training/courses/pl-900t00',
    },
    {
      id: 4,
      category: 'resources.academy.courses.c4.category',
      titleKey: 'resources.academy.courses.c4.title',
      descriptionKey: 'resources.academy.courses.c4.description',
      image:
        'https://1000marcas.net/wp-content/uploads/2019/12/Microsoft-Logo-768x432.png',
      link: 'https://learn.microsoft.com/en-us/training/paths/learn-fundamentals-dynamics-365-projects/',
    },
    {
      id: 5,
      category: 'resources.academy.courses.c5.category',
      titleKey: 'resources.academy.courses.c5.title',
      descriptionKey: 'resources.academy.courses.c5.description',
      image:
        'https://1000marcas.net/wp-content/uploads/2019/12/Microsoft-Logo-768x432.png',
      link: 'https://learn.microsoft.com/en-us/credentials/certifications/d365-fundamentals-customer-engagement-apps-crm/?practice-assessment-type=certification',
    },
    {
      id: 6,
      category: 'resources.academy.courses.c6.category',
      titleKey: 'resources.academy.courses.c6.title',
      descriptionKey: 'resources.academy.courses.c6.description',
      image:
        'https://1000marcas.net/wp-content/uploads/2019/12/Microsoft-Logo-768x432.png',
      link: 'https://learn.microsoft.com/en-us/training/modules/explore-fundamentals-data-visualization/',
    },
    {
      id: 7,
      category: 'resources.academy.courses.c7.category',
      titleKey: 'resources.academy.courses.c7.title',
      descriptionKey: 'resources.academy.courses.c7.description',
      image:
        'https://1000marcas.net/wp-content/uploads/2019/12/Microsoft-Logo-768x432.png',
      link: 'https://learn.microsoft.com/en-us/training/paths/get-started-managing-microsoft-teams/',
    },
    {
      id: 8,
      category: 'resources.academy.courses.c8.category',
      titleKey: 'resources.academy.courses.c8.title',
      descriptionKey: 'resources.academy.courses.c8.description',
      image:
        'https://1000marcas.net/wp-content/uploads/2019/12/Microsoft-Logo-768x432.png',
      link: 'https://learn.microsoft.com/en-us/viva/learning/overview-viva-learning',
    },
    {
      id: 9,
      category: 'resources.academy.courses.c9.category',
      titleKey: 'resources.academy.courses.c9.title',
      descriptionKey: 'resources.academy.courses.c9.description',
      image:
        'https://1000marcas.net/wp-content/uploads/2019/12/Microsoft-Logo-768x432.png',
      link: 'https://learn.microsoft.com/en-us/training/courses/mb-310t00',
    },
    {
      id: 10,
      category: 'resources.academy.courses.c10.category',
      titleKey: 'resources.academy.courses.c10.title',
      descriptionKey: 'resources.academy.courses.c10.description',
      image:
        'https://1000marcas.net/wp-content/uploads/2019/12/Microsoft-Logo-768x432.png',
      link: 'https://learn.microsoft.com/en-us/training/paths/become-solution-architect/',
    },
    {
      id: 11,
      category: 'resources.academy.courses.c11.category',
      titleKey: 'resources.academy.courses.c11.title',
      descriptionKey: 'resources.academy.courses.c11.description',
      image:
        'https://1000marcas.net/wp-content/uploads/2019/12/Microsoft-Logo-768x432.png',
      link: 'https://learn.microsoft.com/en-us/training/paths/azure-fundamentals/',
    },
    {
      id: 12,
      category: 'resources.academy.courses.c12.category',
      titleKey: 'resources.academy.courses.c12.title',
      descriptionKey: 'resources.academy.courses.c12.description',
      image:
        'https://1000marcas.net/wp-content/uploads/2019/12/Microsoft-Logo-768x432.png',
      link: 'https://learn.microsoft.com/en-us/training/modules/fundamentals-azure-ai-services/',
    },
    {
      id: 13,
      category: 'resources.academy.courses.c13.category',
      titleKey: 'resources.academy.courses.c13.title',
      descriptionKey: 'resources.academy.courses.c13.description',
      image:
        'https://1000marcas.net/wp-content/uploads/2019/12/Microsoft-Logo-768x432.png',
      link: 'https://learn.microsoft.com/en-us/training/modules/bash-introduction/',
    },
    {
      id: 14,
      category: 'resources.academy.courses.c14.category',
      titleKey: 'resources.academy.courses.c14.title',
      descriptionKey: 'resources.academy.courses.c14.description',
      image:
        'https://1000marcas.net/wp-content/uploads/2019/12/Microsoft-Logo-768x432.png',
      link: 'https://learn.microsoft.com/en-us/training/modules/create-serverless-logic-with-azure-functions/',
    },
    {
      id: 15,
      category: 'resources.academy.courses.c15.category',
      titleKey: 'resources.academy.courses.c15.title',
      descriptionKey: 'resources.academy.courses.c15.description',
      image:
        'https://1000marcas.net/wp-content/uploads/2019/12/Microsoft-Logo-768x432.png',
      link: 'https://learn.microsoft.com/en-us/training/modules/describe-cloud-service-types/',
    },
    {
      id: 16,
      category: 'resources.academy.courses.c16.category',
      titleKey: 'resources.academy.courses.c16.title',
      descriptionKey: 'resources.academy.courses.c16.description',
      image:
        'https://1000marcas.net/wp-content/uploads/2019/12/Microsoft-Logo-768x432.png',
      link: 'https://learn.microsoft.com/en-us/training/paths/cloud-adoption-framework/',
    },
    {
      id: 17,
      category: 'resources.academy.courses.c17.category',
      titleKey: 'resources.academy.courses.c17.title',
      descriptionKey: 'resources.academy.courses.c17.description',
      image:
        'https://1000marcas.net/wp-content/uploads/2019/12/Microsoft-Logo-768x432.png',
      link: 'https://learn.microsoft.com/en-us/training/paths/azure-data-fundamentals/',
    },
    {
      id: 18,
      category: 'resources.academy.courses.c18.category',
      titleKey: 'resources.academy.courses.c18.title',
      descriptionKey: 'resources.academy.courses.c18.description',
      image:
        'https://1000marcas.net/wp-content/uploads/2019/12/Microsoft-Logo-768x432.png',
      link: 'https://learn.microsoft.com/en-us/training/modules/introduction-to-github-copilot/',
    },
    {
      id: 19,
      category: 'resources.academy.courses.c19.category',
      titleKey: 'resources.academy.courses.c19.title',
      descriptionKey: 'resources.academy.courses.c19.description',
      image:
        'https://learn.microsoft.com/en-us/training/achievements/overview-data-analysis-power-bi.svg',
      link: 'https://learn.microsoft.com/en-us/training/paths/data-analytics-microsoft/',
    },
    {
      id: 20,
      category: 'resources.academy.courses.c20.category',
      titleKey: 'resources.academy.courses.c20.title',
      descriptionKey: 'resources.academy.courses.c20.description',
      image:
        'https://1000marcas.net/wp-content/uploads/2019/12/Microsoft-Logo-768x432.png',
      link: 'https://learn.microsoft.com/en-us/training/modules/get-data/',
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
      item.titleKey.toLowerCase().includes(term) ||
      item.category.toLowerCase().includes(term) ||
      item.descriptionKey.toLowerCase().includes(term)
    );
  }

  // Método que se puede invocar con ngModelChange en el input de búsqueda
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
