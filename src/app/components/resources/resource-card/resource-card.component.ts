import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface DoubtCard {
  title: string;
  image: string;
}

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-resource-card',
  templateUrl: './resource-card.component.html',
})
export class ResourceCardComponent {
  mainTitle = 'DO YOU HAVE ANY DOUBTS?';
  subtitle = `Sit through our FAQ Section or check out our concierge content to understand how everything works best! Also!`;

  cards: DoubtCard[] = [
    {
      title: 'BLOG',
      image: 'https://cdn.prod.website-files.com/636a549426aa8438b3b45fa8/639a2b6cf17bfc03e72aaa60_LSG_WebAsset_Partners.webp',
    },
    {
      title: 'CASE STUDIES',
      image: 'https://cdn.prod.website-files.com/636a549426aa8438b3b45fa8/639a2b6cf17bfc03e72aaa60_LSG_WebAsset_Partners.webp',
    },
    {
      title: 'PARTNERS',
      image: 'assets/images/partners.jpg',
    },
    {
      title: 'FAQ',
      image: 'assets/images/faq.jpg',
    },
    {
      title: 'EVENTS',
      image: 'assets/images/events.jpg',
    },
  ];
}
