import { Component } from '@angular/core';
import { HeroHeaderComponent } from "../../../components/hero-header/hero-header.component";
import { FeatureSectionComponent } from "../../../shared/feature-section/feature-section.component";
import { HeldeskpInsightsComponent } from "../../../components/servicios/heldeskp-insights/heldeskp-insights.component";
import { HelpdeskContactformComponent } from '../../../components/servicios/heldeskp-contactform/heldeskp-contactform.component';
import { FooterComponent } from "../../../components/footer/footer.component";

@Component({
  selector: 'app-helpdesk',
  imports: [HeroHeaderComponent, FeatureSectionComponent, HeldeskpInsightsComponent, HelpdeskContactformComponent, FooterComponent],
  templateUrl: './helpdesk.component.html',
})
export class HelpdeskComponent {

}
