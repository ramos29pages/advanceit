import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

interface BlogPost {
  id: number;
  category: string;
  author: string;
  authorAvatar: string;  // URL de la imagen del autor
  title: string;
  date: string;          // Manejar como string o Date según prefieras
  blogImage: string;     // Imagen alusiva del blog
}

@Component({
  standalone: true,
  selector: 'app-blog-list',
  imports: [CommonModule, FormsModule, FontAwesomeModule],
  templateUrl: './blog-list.component.html',
})
export class BlogListComponent {
  // Icono de FontAwesome
  faCalendarAlt = faCalendarAlt;

  // Texto del contador
  get totalResultsText(): string {
    return `Showing ${this.filteredBlogs.length} results of ${this.blogs.length} posts.`;
  }

  // Categorías disponibles
  categories = [
    'Success Stories',
    'Our Company',
    'Logistics',
    'Tech',
    'Workforce Optimization',
    'Back Office Solutions',
    'Other'
  ];

  // Lista principal de blogs
  blogs: BlogPost[] = [
    {
      id: 1,
      category: 'Our Company',
      author: 'Jane Doe',
      authorAvatar: 'https://i.pravatar.cc/48?u=jane',
      title: 'AI, Anxiety, And The Productivity Paradox: How Lean Solutions Bridges The Gap',
      date: 'March 5, 2025',
      blogImage: 'https://cdn.prod.website-files.com/638a2705bc615a1ffb3bf928/67e1f9dbc216d65394ad9690_67a64213757c5b348d888110_AutonomousRobotsinSupplyChains-ezgif.com-optiwebp-p-800.webp'
    },
    {
      id: 2,
      category: 'Logistics',
      author: 'John Smith',
      authorAvatar: 'https://i.pravatar.cc/48?u=john',
      title: '5 Driving Forces Behind The Evolution Of The 3PL & Logistics Industry',
      date: 'February 28, 2025',
      blogImage: 'https://via.placeholder.com/600x400/8B5CF6/FFFFFF?text=Blog+Image+2'
    },
    {
      id: 3,
      category: 'Our Company',
      author: 'Alice Johnson',
      authorAvatar: 'https://i.pravatar.cc/48?u=alice',
      title: 'How We Improved Customer Satisfaction By 30% In One Quarter',
      date: 'January 12, 2025',
      blogImage: 'https://via.placeholder.com/600x400/8B5CF6/FFFFFF?text=Blog+Image+3'
    },
    {
      id: 4,
      category: 'Logistics',
      author: 'Bob Williams',
      authorAvatar: 'https://i.pravatar.cc/48?u=bob',
      title: 'Optimizing Warehouse Layouts With AI And Robotics',
      date: 'April 10, 2025',
      blogImage: 'https://via.placeholder.com/600x400/8B5CF6/FFFFFF?text=Blog+Image+4'
    },
    // Agrega más blogs si deseas
  ];

  // Control de búsqueda
  searchTerm = '';

  // Control de categorías seleccionadas
  selectedCategories: string[] = [];

  // Filtrar blogs dinámicamente
  get filteredBlogs(): BlogPost[] {
    return this.blogs.filter((blog) => {
      // Filtro por término de búsqueda
      const matchesSearch = this.matchesSearchTerm(blog);
      // Filtro por categoría
      const matchesCategory = this.matchesSelectedCategories(blog);
      return matchesSearch && matchesCategory;
    });
  }

  // Verifica si el blog coincide con el término de búsqueda
  private matchesSearchTerm(blog: BlogPost): boolean {
    if (!this.searchTerm) return true;
    const term = this.searchTerm.toLowerCase();
    return (
      blog.title.toLowerCase().includes(term) ||
      blog.author.toLowerCase().includes(term) ||
      blog.date.toLowerCase().includes(term)
    );
  }

  // Verifica si el blog coincide con las categorías seleccionadas
  private matchesSelectedCategories(blog: BlogPost): boolean {
    if (this.selectedCategories.length === 0) return true;
    return this.selectedCategories.includes(blog.category);
  }

  // Maneja la selección/deselección de categorías
  onCategoryChange(category: string, event: any) {
    if (event.target.checked) {
      this.selectedCategories.push(category);
    } else {
      this.selectedCategories = this.selectedCategories.filter((c) => c !== category);
    }
  }
}
