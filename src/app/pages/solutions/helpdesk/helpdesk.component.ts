import { Component } from '@angular/core';
import { HeroHeaderComponent } from "../../../components/hero-header/hero-header.component";
import { FeatureSectionComponent } from "../../../shared/feature-section/feature-section.component";

@Component({
  selector: 'app-helpdesk',
  imports: [HeroHeaderComponent, FeatureSectionComponent],
  templateUrl: './helpdesk.component.html',
  styleUrl: './helpdesk.component.css'
})
export class HelpdeskComponent {

}
