import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-logistic-info',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-16 px-6 md:px-12 lg:px-24 text-center">
      <h2 class="text-3xl md:text-4xl font-bold text-[#2600ff] mb-12">
        LOGISTICS AND TRANSPORTATION POSITIONS WE FILL
      </h2>

      <!-- Grid de Tarjetas -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div *ngFor="let job of jobs" class="bg-white p-6 rounded-lg shadow-lg text-left">
          <div class="flex items-center space-x-4 mb-4">
            <div class="bg-[#4f1df1] p-3 rounded-lg">
              <img [src]="job.icon" alt="icon" class="w-6 h-6">
            </div>
            <h3 class="text-[#4f1df1] font-bold text-lg">{{ job.title }}</h3>
          </div>
          <p class="text-gray-600 text-sm">{{ job.description }}</p>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class LogisticInfoComponent {
  jobs = [
    {
      title: 'Data Entry',
      description: 'Maintains database by entering new and updated customer and account information.',
      icon: 'https://cdn-icons-png.flaticon.com/512/2620/2620775.png'
    },
    {
      title: 'POD Retrieval',
      description: 'Provide not only proof of delivery but also, data integrity, multi-point delivery, and single point of contact for data exchange.',
      icon: 'https://cdn-icons-png.flaticon.com/512/3209/3209265.png'
    },
    {
      title: 'Safety Analyst',
      description: 'Assisting the Safety Department in enforcing all the safety policies, programs, training, investigations, and emergency response.',
      icon: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'
    },
    {
      title: 'Assistant Dispatcher',
      description: 'Provides order tracking and other administrative duties. Develops and communicates movements based on customer needs.',
      icon: 'https://cdn-icons-png.flaticon.com/512/2989/2989982.png'
    },
    {
      title: 'Customer Care Assistant',
      description: 'Primary point of contact between your business and its customers. Helps with orders, claims, and support.',
      icon: 'https://cdn-icons-png.flaticon.com/512/3596/3596141.png'
    },
    {
      title: 'Documentation & Accounting Analyst',
      description: 'Independently perform accounting duties requiring knowledge and skill to exercise sound judgment within guidelines.',
      icon: 'https://cdn-icons-png.flaticon.com/512/3199/3199903.png'
    }
  ];
}

