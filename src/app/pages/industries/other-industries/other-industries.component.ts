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

interface CaseStudy {
  id: number;
  category: string;
  title: string;
  items: string[];
  image: string;
  link?: string;
}

@Component({
  selector: 'app-other-industries',
  imports: [FontAwesomeModule, CommonModule, FormsModule, FooterComponent, HeroHeaderComponent],
  templateUrl: './other-industries.component.html',
  styleUrl: './other-industries.component.css',
})
export class OtherIndustriesComponent {
  // Íconos de FontAwesome
  faArrowRight = faArrowRight;
  faPhoneVolume = faPhoneVolume;
  faCheck = faCheck;

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
      title: 'Manufacturing & Industrial Production 🏭',
      items: [
        'Smart factory automation and IoT integration',
        'Secure remote access for factory management',
        'IT provisioning for production line monitoring',
        'Supply chain and inventory optimization',
        'Cybersecurity for industrial control systems',
        'Cloud-based predictive maintenance solutions',
      ],
      image:
        'https://images.unsplash.com/photo-1741176505800-caaa3a52631a?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      link: '',
    },
    {
      id: 2,
      category: 'Technology',
      title: 'Retail & E-Commerce',
      items: [
        'Cloud-based point-of-sale (POS) systems',
        'IT infrastructure for omnichannel retail',
        'Secure online payment and fraud prevention',
        'Data analytics for customer insights',
        'IT provisioning for remote customer support',
        'Inventory and supply chain management',
      ],
      image: 'https://images.unsplash.com/photo-1657812159103-1b2a52a7f5e8?q=80&w=1767&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      link: '',
    },
    {
      id: 3,
      category: 'Technology',
      title: 'Education & E-Learning',
      items: [
        'Cloud-based learning management systems (LMS)',
        'IT provisioning for virtual classrooms',
        'Cybersecurity for student data protection',
        'Remote IT support for teachers and staff',
        'High-performance IT infrastructure for research',
        'AI-powered analytics for student performance tracking',
      ],
      image: 'https://images.unsplash.com/photo-1610484826625-ac2be7f1c8c1?q=80&w=1836&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      link: '',
    },
    {
      id: 4,
      category: 'Technology',
      title: 'Energy & Utilities',
      items: [
        'Smart grid and IoT-based monitoring solutions',
        'IT support for renewable energy projects',
        'Cybersecurity for critical infrastructure protection',
        'Cloud-based asset and maintenance tracking',
        'Data analytics for energy efficiency optimization',
        'Remote IT provisioning for field technicians',
      ],
      image: 'https://images.unsplash.com/photo-1710911811573-971aef3c9066?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      link: '',
    },
    {
      id: 5,
      category: 'Technology',
      title: 'Telecommunications',
      items: [
        'IT solutions for network infrastructure management',
        'Cloud-based data storage and analytics',
        'Cybersecurity solutions for telecom networks',
        'AI-driven customer service automation',
        'IT provisioning for call centers and remote teams',
        '24/7 monitoring and support for network reliability',
      ],
      image: 'https://images.unsplash.com/photo-1702485665912-0c79685081e1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      link: '',
    },
    {
      id: 6,
      category: 'Technology',
      title: 'Government & Public Sector',
      items: [
        'Secure cloud solutions for public services',
        'IT infrastructure for e-government platforms',
        'Cybersecurity for citizen data protection',
        'Remote workforce support for government agencies',
        'AI-powered analytics for policy decision-making',
        'IT provisioning for emergency response teams',
      ],
      image: 'https://images.unsplash.com/photo-1614610741181-2bce5e06976d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      link: '',
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
