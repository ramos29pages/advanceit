import { Component } from '@angular/core';
import { HowWeHelpRetailersComponent } from "../../../components/industries/how-we-help-retailers/how-we-help-retailers.component";
import { HeroHeaderComponent } from '../../../components/hero-header/hero-header.component';
import { RetailBenefitsComponent } from '../../../components/industries/retail-benefits/retail-benefits.component';
import { FeatureSectionComponent } from "../../../shared/feature-section/feature-section.component";
import { TeamFormLiteComponent } from "../../../components/team-form-lite/team-form-lite.component";
import { SliderIndustriesComponent } from "../../../components/industries/slider-industries/slider-industries.component";
import { StatsComponent } from "../../../components/stats/stats.component";
import { FooterComponent } from "../../../components/footer/footer.component";

@Component({
  selector: 'app-retail',
  imports: [HowWeHelpRetailersComponent, HeroHeaderComponent, RetailBenefitsComponent, FeatureSectionComponent, TeamFormLiteComponent, SliderIndustriesComponent, StatsComponent, FooterComponent],
  templateUrl: './retail.component.html',
  styleUrl: './retail.component.css'
})
export class RetailComponent {

}
