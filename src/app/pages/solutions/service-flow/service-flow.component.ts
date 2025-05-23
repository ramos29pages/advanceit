import { Component } from '@angular/core';
import { FeatureSectionComponent } from "../../../shared/feature-section/feature-section.component";
import { HeroHeaderComponent } from "../../../components/hero-header/hero-header.component";
import { TopPositionsComponent } from "../../../components/top-positions/top-positions.component";
import { FooterComponent } from "../../../components/footer/footer.component";

@Component({
  selector: 'app-service-flow',
  imports: [FeatureSectionComponent, HeroHeaderComponent, TopPositionsComponent, FooterComponent],
  templateUrl: './service-flow.component.html',
})
export class ServiceFlowComponent {

}
