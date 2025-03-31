import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-simple-cta',
  imports: [NgIf],
  templateUrl: './simple-cta.component.html',
})
export class SimpleCtaComponent {
  title =
    "Transforming Digital, Empowering Communities – We're the Tech Change-Makers!";

  description = `At Advance Technology Projects, we’re passionate about making a real difference in the communities where we work. For over 14 years, our mission has been to improve people’s quality of life by bringing innovative, tech-driven solutions that not only transform the businesses of our clients but also make their day-to-day tasks easier and more efficient.



With a strong track record and leadership in digital transformation across LATAM, we’re uniquely positioned to tackle the challenges of today’s market, simplifying complex demands and driving real, lasting change.`;
  buttonText = 'Learn More..';
}
