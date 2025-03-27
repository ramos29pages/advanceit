import { Component } from '@angular/core';
import { HeroHeaderComponent } from "../../../components/hero-header/hero-header.component";
import { GridIconsComponent } from "../../../components/nosotros/grid-icons/grid-icons.component";
import { SimpleSectionComponent } from "../../../components/simple-section/simple-section.component";
import { FeatureSectionComponent } from "../../../shared/feature-section/feature-section.component";
import { SimpleTitleSectionComponent } from "../../../components/inicio/simple-title-section/simple-title-section.component";
import { SimpleCtaComponent } from "../../../components/inicio/simple-cta/simple-cta.component";
import { FooterComponent } from "../../../components/footer/footer.component";

@Component({
  selector: 'app-professional-services',
  imports: [HeroHeaderComponent, GridIconsComponent, SimpleSectionComponent, FeatureSectionComponent, SimpleTitleSectionComponent, SimpleCtaComponent, FooterComponent],
  templateUrl: './professional-services.component.html',
  styleUrl: './professional-services.component.css'
})
export class ProfessionalServicesComponent {

  features: string[] = [
    'Global talent',
    'Around-the-clock support',
    'High-quality standards',
    'Streamlined onboarding and hiring processes',
    'Co-managed business model',
    'Fast results',
    'Low attrition rate']

}
