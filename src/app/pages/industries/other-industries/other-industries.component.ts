import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faArrowRight,
  faPhoneVolume,
  faCheck,
} from '@fortawesome/free-solid-svg-icons';
import { HeroHeaderComponent } from '../../../components/hero-header/hero-header.component';
import { FooterComponent } from '../../../components/footer/footer.component';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

interface CaseStudy {
  id: number;
  category: string;
  titleKey: string;
  itemsKeys: string[];
  image: string;
  link: string;
  ctaKey: string;
}

@Component({
  selector: 'app-other-industries',
  imports: [
    FontAwesomeModule,
    CommonModule,
    FormsModule,
    FooterComponent,
    HeroHeaderComponent,
    TranslatePipe,
  ],
  templateUrl: './other-industries.component.html',
})
export class OtherIndustriesComponent {
  // Íconos de FontAwesome
  faArrowRight = faArrowRight;
  faPhoneVolume = faPhoneVolume;
  faCheck = faCheck;

  // Clave para el texto del contador
  totalResultsTextKey = 'industries.otherIndustries.common.totalResultsText';

  // Claves para las categorías
  categoriesKeys = [
    'industries.otherIndustries.categories.sales',
    'industries.otherIndustries.categories.operations',
    'industries.otherIndustries.categories.technology',
    'industries.otherIndustries.categories.ai',
    'industries.otherIndustries.categories.marketing',
  ];

  // Datos principales (4 tarjetas de ejemplo)
  caseStudies: CaseStudy[] = [
    {
      id: 1,
      category: 'Technology',
      titleKey: 'industries.otherIndustries.caseStudies.manufacturing.title',
      itemsKeys: [
        'industries.otherIndustries.caseStudies.manufacturing.items.1',
        'industries.otherIndustries.caseStudies.manufacturing.items.2',
        'industries.otherIndustries.caseStudies.manufacturing.items.3',
        'industries.otherIndustries.caseStudies.manufacturing.items.4',
        'industries.otherIndustries.caseStudies.manufacturing.items.5',
        'industries.otherIndustries.caseStudies.manufacturing.items.6',
      ],
      image:
        'https://images.unsplash.com/photo-1741176505800-caaa3a52631a?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3',
      link: '',
      ctaKey: 'industries.otherIndustries.common.cta.more',
    },
    {
      id: 2,
      category: 'Technology',
      titleKey: 'industries.otherIndustries.caseStudies.retail.title',
      itemsKeys: [
        'industries.otherIndustries.caseStudies.retail.items.1',
        'industries.otherIndustries.caseStudies.retail.items.2',
        'industries.otherIndustries.caseStudies.retail.items.3',
        'industries.otherIndustries.caseStudies.retail.items.4',
        'industries.otherIndustries.caseStudies.retail.items.5',
        'industries.otherIndustries.caseStudies.retail.items.6',
      ],
      image:
        'https://images.unsplash.com/photo-1657812159103-1b2a52a7f5e8?q=80&w=1767&auto=format&fit=crop&ixlib=rb-4.0.3',
      link: '',
      ctaKey: 'industries.otherIndustries.common.cta.more',
    },
    {
      id: 3,
      category: 'Technology',
      titleKey: 'industries.otherIndustries.caseStudies.education.title',
      itemsKeys: [
        'industries.otherIndustries.caseStudies.education.items.1',
        'industries.otherIndustries.caseStudies.education.items.2',
        'industries.otherIndustries.caseStudies.education.items.3',
        'industries.otherIndustries.caseStudies.education.items.4',
        'industries.otherIndustries.caseStudies.education.items.5',
        'industries.otherIndustries.caseStudies.education.items.6',
      ],
      image:
        'https://images.unsplash.com/photo-1610484826625-ac2be7f1c8c1?q=80&w=1836&auto=format&fit=crop&ixlib=rb-4.0.3',
      link: '',
      ctaKey: 'industries.otherIndustries.common.cta.more',
    },
    {
      id: 4,
      category: 'Technology',
      titleKey: 'industries.otherIndustries.caseStudies.energy.title',
      itemsKeys: [
        'industries.otherIndustries.caseStudies.energy.items.1',
        'industries.otherIndustries.caseStudies.energy.items.2',
        'industries.otherIndustries.caseStudies.energy.items.3',
        'industries.otherIndustries.caseStudies.energy.items.4',
        'industries.otherIndustries.caseStudies.energy.items.5',
        'industries.otherIndustries.caseStudies.energy.items.6',
      ],
      image:
        'https://images.unsplash.com/photo-1710911811573-971aef3c9066?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3',
      link: '',
      ctaKey: 'industries.otherIndustries.common.cta.more',
    },
    {
      id: 5,
      category: 'Technology',
      titleKey:
        'industries.otherIndustries.caseStudies.telecommunications.title',
      itemsKeys: [
        'industries.otherIndustries.caseStudies.telecommunications.items.1',
        'industries.otherIndustries.caseStudies.telecommunications.items.2',
        'industries.otherIndustries.caseStudies.telecommunications.items.3',
        'industries.otherIndustries.caseStudies.telecommunications.items.4',
        'industries.otherIndustries.caseStudies.telecommunications.items.5',
        'industries.otherIndustries.caseStudies.telecommunications.items.6',
      ],
      image:
        'https://images.unsplash.com/photo-1702485665912-0c79685081e1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3',
      link: '',
      ctaKey: 'industries.otherIndustries.common.cta.more',
    },
    {
      id: 6,
      category: 'Technology',
      titleKey: 'industries.otherIndustries.caseStudies.government.title',
      itemsKeys: [
        'industries.otherIndustries.caseStudies.government.items.1',
        'industries.otherIndustries.caseStudies.government.items.2',
        'industries.otherIndustries.caseStudies.government.items.3',
        'industries.otherIndustries.caseStudies.government.items.4',
        'industries.otherIndustries.caseStudies.government.items.5',
        'industries.otherIndustries.caseStudies.government.items.6',
      ],
      image:
        'https://images.unsplash.com/photo-1614610741181-2bce5e06976d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3',
      link: '',
      ctaKey: 'industries.otherIndustries.common.cta.more',
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
      item.category.toLowerCase().includes(term)
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
