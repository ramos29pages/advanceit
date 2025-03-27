import { Component } from '@angular/core';
import { HeroHeaderComponent } from "../../../components/hero-header/hero-header.component";
import { SliderIndustriesComponent } from "../../../components/industries/slider-industries/slider-industries.component";
import { HowWeHelpRetailersComponent } from "../../../components/industries/how-we-help-retailers/how-we-help-retailers.component";
import { FeatureSectionComponent } from "../../../shared/feature-section/feature-section.component";
import { RetailBenefitsComponent } from "../../../components/industries/retail-benefits/retail-benefits.component";
import { TeamFormLiteComponent } from "../../../components/team-form-lite/team-form-lite.component";
import { StatsComponent } from "../../../components/stats/stats.component";
import { FooterComponent } from "../../../components/footer/footer.component";

@Component({
  selector: 'app-manufacturing',
  imports: [HeroHeaderComponent, SliderIndustriesComponent, HowWeHelpRetailersComponent, FeatureSectionComponent, RetailBenefitsComponent, TeamFormLiteComponent, StatsComponent, FooterComponent],
  templateUrl: './manufacturing.component.html',
  styleUrl: './manufacturing.component.css'
})
export class ManufacturingComponent {

}
