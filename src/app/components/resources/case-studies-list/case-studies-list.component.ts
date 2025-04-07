import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRight, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { RouterLink } from '@angular/router';

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
  imports: [CommonModule, FormsModule, FontAwesomeModule, RouterLink],
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
  categories = ['Business Applications', 'Technology', 'Infrastructure'];

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
      category: 'Business Applications',
      title: 'Microsoft Power Platform Fundamentals',
      description:
        'Learn the business value and product capabilities of Microsoft Power Platform. Create simple Power Apps, connect data with Dataverse, build a Power BI Dashboard, and automate processes with Power Automate.',
      image:
        'https://1000marcas.net/wp-content/uploads/2019/12/Microsoft-Logo-768x432.png',
      link: 'https://learn.microsoft.com/en-us/training/courses/pl-900t00',
    },
    {
      id: 4,
      category: 'Business Applications',
      title: 'Learn the fundamentals of Dynamics 365 projects',
      description:
        'Every business uses technology in some capacity. There are apps to track the relationships, engagement, and delivery of products or services to an organization’s customers. These are loosely referred to as business applications or business management software. These apps are used by people touching the sales, marketing, customer service, finance, and supply chain within an organization.',
      image:
        'https://1000marcas.net/wp-content/uploads/2019/12/Microsoft-Logo-768x432.png',
      link: 'https://learn.microsoft.com/en-us/training/paths/learn-fundamentals-dynamics-365-projects/',
    },
    {
      id: 5,
      category: 'Business Applications',
      title: 'Microsoft Certified: Dynamics 365 Fundamentals (CRM)',
      description:
        'Learn how to use Dynamics 365 to connect with customers better and work more efficiently. Discover tools for understanding your customers, managing sales, providing support, and handling field service. See how AI (Microsoft 365 Copilot) can help in these areas. Great for beginners looking to get started with Dynamics 365!',
      image:
        'https://1000marcas.net/wp-content/uploads/2019/12/Microsoft-Logo-768x432.png',
      link: 'https://learn.microsoft.com/en-us/credentials/certifications/d365-fundamentals-customer-engagement-apps-crm/?practice-assessment-type=certification',
    },
    {
      id: 6,
      category: 'Business Applications',
      title: 'Explore fundamentals of data visualization',
      description:
        'Master the basics of analyzing data and creating visuals using Microsoft Power BI. Learn the steps to build reports, understand key data modeling ideas, and choose the right charts to tell your data story. You will even get hands-on experience creating your own interactive report in Power BI Desktop. Perfect for anyone wanting to turn data into insights!',
      image:
        'https://1000marcas.net/wp-content/uploads/2019/12/Microsoft-Logo-768x432.png',
      link: 'https://learn.microsoft.com/en-us/training/modules/explore-fundamentals-data-visualization/',
    },
    {
      id: 7,
      category: 'Business Applications',
      title: 'Get started with managing Microsoft Teams',
      description:
        'Learn the fundamentals of managing Microsoft Teams, including Teams capabilities, Teams admin roles and management tools, lifecycle management, features for governance, and available reports to monitor your Teams environment.',
      image:
        'https://1000marcas.net/wp-content/uploads/2019/12/Microsoft-Logo-768x432.png',
      link: 'https://learn.microsoft.com/en-us/training/paths/get-started-managing-microsoft-teams/',
    },
    {
      id: 8,
      category: 'Business Applications',
      title: 'Overview of Microsoft Viva Learning',
      description:
        'Viva Learning is a centralized learning hub in Microsoft Teams that lets you seamlessly integrate learning and building skills into your day. In Viva Learning, your team can discover, share, recommend, and learn from content libraries provided by both your organization and partners without leaving Microsoft Teams.',
      image:
        'https://1000marcas.net/wp-content/uploads/2019/12/Microsoft-Logo-768x432.png',
      link: 'https://learn.microsoft.com/en-us/viva/learning/overview-viva-learning',
    },
    {
      id: 9,
      category: 'Business Applications',
      title: 'Microsoft Dynamics 365 Finance',
      description:
        'This course covers the financial aspects of Dynamics 365: configure and use essential financial components, accounts payable, accounts receivable, collections, budgeting, fixed assets, and additional functionality.',
      image:
        'https://1000marcas.net/wp-content/uploads/2019/12/Microsoft-Logo-768x432.png',
      link: 'https://learn.microsoft.com/en-us/training/courses/mb-310t00',
    },
    {
      id: 10,
      category: 'Business Applications',
      title: 'Architect solutions for Dynamics 365 and Microsoft Power Platform',
      description:
        'Understand the role of a Solution Architect – the person who designs and ensures successful tech solutions that meet customer needs. Learn the initial steps of a project, including how to understand customer needs, propose solutions, work with requirements, and identify gaps. This path covers the pre-sales and analysis stages, providing the foundational knowledge for aspiring Solution Architects. Note: Hands-on training is recommended for the full learning experience.',
      image:
        'https://1000marcas.net/wp-content/uploads/2019/12/Microsoft-Logo-768x432.png',
      link: 'https://learn.microsoft.com/en-us/training/paths/become-solution-architect/',
    },
    // Infrastructure
    {
      id: 11,
      category: 'Infrastructure',
      title: 'Azure Fundamentals',
      description:
        'Aprende los conceptos básicos de Azure para comenzar a trabajar con la computación en la nube.',
      image:
        'https://1000marcas.net/wp-content/uploads/2019/12/Microsoft-Logo-768x432.png',
      link: 'https://learn.microsoft.com/en-us/training/paths/azure-fundamentals/',
    },
    {
      id: 12,
      category: 'Infrastructure',
      title: 'Azure Administration Fundamentals',
      description:
        'Introducción a la administración de Azure para gestionar recursos y servicios en la nube.',
      image:
        'https://1000marcas.net/wp-content/uploads/2019/12/Microsoft-Logo-768x432.png',
      link: 'https://learn.microsoft.com/en-us/training/paths/azure-administration-fundamentals/',
    },
    {
      id: 13,
      category: 'Infrastructure',
      title: 'Azure Security Fundamentals',
      description:
        'Aprende a proteger los recursos en la nube con los fundamentos de seguridad de Azure.',
      image:
        'https://1000marcas.net/wp-content/uploads/2019/12/Microsoft-Logo-768x432.png',
      link: 'https://learn.microsoft.com/en-us/training/paths/azure-security-fundamentals/',
    },
    {
      id: 14,
      category: 'Infrastructure',
      title: 'Azure Networking Fundamentals',
      description:
        'Conoce los conceptos básicos de redes en Azure para diseñar e implementar soluciones de conectividad.',
      image:
        'https://1000marcas.net/wp-content/uploads/2019/12/Microsoft-Logo-768x432.png',
      link: 'https://learn.microsoft.com/en-us/training/paths/azure-networking-fundamentals/',
    },
    {
      id: 15,
      category: 'Infrastructure',
      title: 'Azure DevOps Fundamentals',
      description:
        'Descubre cómo integrar prácticas DevOps en tus proyectos utilizando Azure DevOps.',
      image:
        'https://1000marcas.net/wp-content/uploads/2019/12/Microsoft-Logo-768x432.png',
      link: 'https://learn.microsoft.com/en-us/training/paths/azure-devops-fundamentals/',
    },
    {
      id: 16,
      category: 'Infrastructure',
      title: 'Security, Compliance, and Identity Fundamentals',
      description:
        'Aprende los fundamentos de seguridad, cumplimiento e identidad para proteger recursos en la nube.',
      image:
        'https://1000marcas.net/wp-content/uploads/2019/12/Microsoft-Logo-768x432.png',
      link: 'https://learn.microsoft.com/en-us/training/paths/security-compliance-identity-fundamentals/',
    },
    {
      id: 17,
      category: 'Infrastructure',
      title: 'Azure Data Fundamentals',
      description:
        'Introducción a los conceptos de datos en Azure, incluyendo almacenamiento y análisis de datos.',
      image:
        'https://1000marcas.net/wp-content/uploads/2019/12/Microsoft-Logo-768x432.png',
      link: 'https://learn.microsoft.com/en-us/training/paths/azure-data-fundamentals/',
    },
    {
      id: 18,
      category: 'Infrastructure',
      title: 'Azure AI Fundamentals',
      description:
        'Explora los fundamentos de la inteligencia artificial y sus aplicaciones en Azure.',
      image:
        'https://1000marcas.net/wp-content/uploads/2019/12/Microsoft-Logo-768x432.png',
      link: 'https://learn.microsoft.com/en-us/training/paths/azure-ai-fundamentals/',
    },
    {
      id: 19,
      category: 'Infrastructure',
      title: 'Azure IoT Fundamentals',
      description:
        'Aprende a conectar, monitorizar y gestionar dispositivos IoT en Azure.',
      image:
        'https://1000marcas.net/wp-content/uploads/2019/12/Microsoft-Logo-768x432.png',
      link: 'https://learn.microsoft.com/en-us/training/paths/azure-iot-fundamentals/',
    },
    {
      id: 20,
      category: 'Infrastructure',
      title: 'AKS Fundamentals',
      description:
        'Introducción a los conceptos de contenedores y orquestación utilizando Azure Kubernetes Service (AKS).',
      image:
        'https://1000marcas.net/wp-content/uploads/2019/12/Microsoft-Logo-768x432.png',
      link: 'https://learn.microsoft.com/en-us/training/paths/aks-fundamentals/',
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
