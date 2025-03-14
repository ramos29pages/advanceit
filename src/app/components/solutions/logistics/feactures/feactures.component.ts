import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div *ngFor="let feature of features" class="relative bg-[#0c0342] text-white rounded-lg p-8 text-center shadow-lg">
        <!-- Icono decorativo -->
        <div class="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-[#4321a3] p-4 rounded-full shadow-md">
          <img [src]="feature.icon" [alt]="feature.title" class="w-8 h-8">
        </div>

        <!-- Número -->
        <h3 class="text-5xl font-bold text-[#6a5acd] tracking-wide mb-2 mt-6">
          {{ feature.number }}
        </h3>

        <!-- Título -->
        <h4 class="text-lg font-semibold text-[#7c70f4] mb-2">
          {{ feature.title }}
        </h4>

        <!-- Descripción -->
        <p class="text-sm text-gray-300 leading-relaxed">
          {{ feature.description }}
        </p>
      </div>
    </section>
  `,
  styles: []
})
export class FeaturesComponent {
  features = [
    {
      number: '01',
      title: 'The Skill',
      description: 'Access global talent that is eager to take on new challenges.',
      icon: 'assets/icons/skill-icon.png'
    },
    {
      number: '02',
      title: 'Specialized Training',
      description: 'Through our industry expertise, we provide high-level, tailored training depending on your needs.',
      icon: 'assets/icons/training-icon.png'
    },
    {
      number: '03',
      title: 'Co-Managed Business Model',
      description: 'From the hiring process to branding your office space, we advise you to make the decisions.',
      icon: 'assets/icons/business-icon.png'
    },
    {
      number: '04',
      title: 'The Tools',
      description: 'We are constantly investing in technology to make our processes more efficient and provide you with better services.',
      icon: 'assets/icons/tools-icon.png'
    }
  ];
}
