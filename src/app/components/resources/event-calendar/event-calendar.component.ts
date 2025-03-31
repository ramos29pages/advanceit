import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

interface EventItem {
  id: number;
  day: string;   // Ej: "2"
  month: string; // Ej: "MAR"
  title: string;
  description: string;
  image: string;
  link: string;  // URL para "Learn more"
}

@Component({
  standalone: true,
  selector: 'app-event-calendar',
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './event-calendar.component.html',
  styleUrls: ['./event-calendar.component.css'],
})
export class EventCalendarComponent {
  faArrowRight = faArrowRight;

  pageTitle = 'EVENT CALENDAR';
  pageSubtitle = `Is there anything more exciting than participating in events and trade shows about the industry you know and love? Scroll down to experience top industry events with us!`;

  // Ejemplo de array de eventos
  events: EventItem[] = [
    {
      id: 1,
      day: '2',
      month: 'MAR',
      title: 'TPM25',
      description: 'Join us at TPM25, the premier conference focusing on global container shipping and logistics. Network with top industry professionals and gain insights into the latest trends.',
      image: 'https://via.placeholder.com/600x350/8B5CF6/FFFFFF?text=Event+1',
      link: '#'
    },
    {
      id: 2,
      day: '9',
      month: 'APR',
      title: 'TIA Capital Ideas Conference 2025',
      description: 'Explore the future of freight brokerage, gain actionable insights, and discover new opportunities in transportation and logistics at the TIA Capital Ideas Conference.',
      image: 'https://via.placeholder.com/600x350/8B5CF6/FFFFFF?text=Event+2',
      link: '#'
    },
    {
      id: 3,
      day: '15',
      month: 'JUN',
      title: 'Global Supply Chain Summit',
      description: 'A must-attend event for supply chain leaders seeking to optimize their operations and embrace innovative technologies in a rapidly evolving global market.',
      image: 'https://via.placeholder.com/600x350/8B5CF6/FFFFFF?text=Event+3',
      link: '#'
    },
    {
      id: 4,
      day: '22',
      month: 'AUG',
      title: 'LogTech Expo',
      description: 'Showcasing cutting-edge logistics technologies, from automation to AI-driven solutions, LogTech Expo is the hub for discovering the next wave of industry transformation.',
      image: 'https://via.placeholder.com/600x350/8B5CF6/FFFFFF?text=Event+4',
      link: '#'
    }
  ];
}
