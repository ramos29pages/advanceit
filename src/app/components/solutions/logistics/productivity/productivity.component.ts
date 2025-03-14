import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-productivity',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="relative bg-cover bg-center py-20 px-6 md:px-12 lg:px-24"
      style="background-image: url('https://cdn.prod.website-files.com/636a549426aa8438b3b45fa8/6372587c9ba56f0e66ea0544_section-bg1.svg');">

      <div class="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Texto -->
        <div class="bg-white p-8 rounded-lg shadow-lg">
          <h2 class="text-3xl md:text-4xl font-bold text-[#2600ff] leading-snug mb-4">
            ARE YOU DOUBTING THE <br> PRODUCTIVITY LEVELS OF YOUR <br> OUTSOURCED TEAM?
          </h2>
          <p class="text-gray-600 text-lg leading-relaxed">
            Our solutions are designed to help you reach your peak capacity! That’s why, through our Quality Assurance Team, we make sure your satellite office meets your productivity levels through established KPIs. These can be reported and tracked by accessing our web portal.
          </p>
        </div>

        <!-- Imagen decorativa -->
        <div class="relative flex justify-center">
          <img src="https://cdn.prod.website-files.com/636a549426aa8438b3b45fa8/63a500d2ee2304b4724d2711_LSG%20Team.png"
            alt="Team" class="max-w-full">
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class ProductivityComponent {}
