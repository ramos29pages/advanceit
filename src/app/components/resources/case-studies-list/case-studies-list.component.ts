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
  categories = ['Business Applications', 'Technology', 'Infrastructure', 'IA'];

  // Datos principales (4 tarjetas de ejemplo)
  caseStudies: CaseStudy[] = [
    {
      id: 1,
      category: 'IA',
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
        'Microsoft Azure fundamentals is a three-part series that teaches you basic cloud concepts, provides a streamlined overview of many Azure services, and guides you with hands-on exercises to deploy your very first services for free. Complete all of the learning paths in the series if you are preparing for Exam AZ-900: Microsoft Azure Fundamentals. This is the first learning path in the series, Microsoft Azure Fundamentals: Describe cloud concepts. ',
      image:
        'https://1000marcas.net/wp-content/uploads/2019/12/Microsoft-Logo-768x432.png',
      link: 'https://learn.microsoft.com/en-us/training/paths/azure-fundamentals/',
    },
    {
      id: 12,
      category: 'Infrastructure',
      title: 'Fundamentals of Azure AI services',
      description:
        'Unlock the power of generative AI. Learn how language models create original content and how to apply them effectively and responsibly in your projects.',
      image:
        'https://1000marcas.net/wp-content/uploads/2019/12/Microsoft-Logo-768x432.png',
      link: 'https://learn.microsoft.com/en-us/training/modules/fundamentals-azure-ai-services/',
    },
    {
      id: 13,
      category: 'Infrastructure',
      title: 'Introduction to Bash',
      description:
        'Become proficient in Bash, the powerful command-line shell. This course teaches you the fundamentals of Bash syntax and essential commands for managing IT infrastructure, including system updates, process control, and even filtering Azure CLI output.',
      image:
        'https://1000marcas.net/wp-content/uploads/2019/12/Microsoft-Logo-768x432.png',
      link: 'https://learn.microsoft.com/en-us/training/modules/bash-introduction/',
    },
    {
      id: 14,
      category: 'Infrastructure',
      title: 'Create serverless logic with Azure Functions',
      description:
        'Unlock the power of serverless with Azure Functions. This course teaches you how to create, execute, monitor, and test functions in Azure, enabling you to run business logic without the hassle of infrastructure management',
      image:
        'https://1000marcas.net/wp-content/uploads/2019/12/Microsoft-Logo-768x432.png',
      link: 'https://learn.microsoft.com/en-us/training/modules/create-serverless-logic-with-azure-functions/',
    },
    {
      id: 15,
      category: 'Infrastructure',
      title: 'Describe cloud service types',
      description:
        'This module covers the different cloud service types and shares some of the use cases and benefits aligned with each service type.',
      image:
        'https://1000marcas.net/wp-content/uploads/2019/12/Microsoft-Logo-768x432.png',
      link: 'https://learn.microsoft.com/en-us/training/modules/describe-cloud-service-types/',
    },
    {
      id: 16,
      category: 'Infrastructure',
      title: 'Accelerate cloud adoption with the Microsoft Cloud Adoption Framework for Azure',
      description:
        'Do you need a clear path forward for your cloud journey? This learning path includes best practice guidance to help you create a cloud strategy, define a cloud adoption plan, prepare your cloud environment with proper governance, and implement cloud operations in alignment with your organizational needs. ',
      image: 'https://1000marcas.net/wp-content/uploads/2019/12/Microsoft-Logo-768x432.png',
      link: 'https://learn.microsoft.com/en-us/training/paths/cloud-adoption-framework/',
    },
    {
      id: 17,
      category: 'Infrastructure',
      title: 'Describe cloud computing',
      description:
        'This module introduces you to cloud computing. It covers things such as cloud concepts, deployment models, and understanding shared responsibility in the cloud.',
      image:
        'https://1000marcas.net/wp-content/uploads/2019/12/Microsoft-Logo-768x432.png',
      link: 'https://learn.microsoft.com/en-us/training/paths/azure-data-fundamentals/',
    },
    {
      id: 18,
      category: 'IA',
      title: 'Introduction to GitHub Copilot',
      description:
        'GitHub Copilot uses OpenAI Codex to suggest code and entire functions in real time, right from your editor.',
      image:
        'https://1000marcas.net/wp-content/uploads/2019/12/Microsoft-Logo-768x432.png',
      link: 'https://learn.microsoft.com/en-us/training/modules/introduction-to-github-copilot/',
    },
    {
      id: 19,
      category: 'Infrastructure',
      title: 'Get started with Microsoft data analytics',
      description:
        'Businesses need data analysis more than ever. In this learning path, you will learn about the life and journey of a data analyst, the skills, tasks, and processes they go through in order to tell a story with data so trusted business decisions can be made. You will learn how the suite of Power BI tools and services are used by a data analyst to tell a compelling story through reports and dashboards, and the need for true BI in the enterprise.',
      image:
        'https://learn.microsoft.com/en-us/training/achievements/overview-data-analysis-power-bi.svg',
      link: 'https://learn.microsoft.com/en-us/training/paths/data-analytics-microsoft/',
    },
    {
      id: 20,
      category: 'Infrastructure',
      title: 'Get data in Power BI',
      description:
        'You ll learn how to retrieve data from a variety of data sources, including Microsoft Excel, relational databases, and NoSQL data stores. You will also learn how to improve performance while retrieving data. ',
      image:
        'https://1000marcas.net/wp-content/uploads/2019/12/Microsoft-Logo-768x432.png',
      link: 'https://learn.microsoft.com/en-us/training/modules/get-data/',
    }
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
