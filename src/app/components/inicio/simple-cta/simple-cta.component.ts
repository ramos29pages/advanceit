import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ButtonSimpleCtaComponent } from '../../../utils/button-simple-cta/button-simple-cta.component';

@Component({
  selector: 'app-simple-cta',
  imports: [NgIf, ButtonSimpleCtaComponent],
  templateUrl: './simple-cta.component.html',
})
export class SimpleCtaComponent {
  @Input() title =
    "We are the Tech Change-Makers!";

  @Input()
  description = "";
  @Input() buttonText = '';



  text = "At Advance Technology Projects, we’re passionate about making a real difference in the communities where we work. For over 14 years, our mission has been to improve people’s quality of life by bringing innovative, tech-driven solutions that not only transform the businesses of our clients but also make their day-to-day tasks easier and more efficient. With a strong track record and leadership in digital transformation across LATAM, we’re uniquely positioned to tackle the challenges of today’s market, simplifying complex demands and driving real, lasting change."
}
