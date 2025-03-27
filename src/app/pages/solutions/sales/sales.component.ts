import { Component } from '@angular/core';
import { HeroHeaderComponent } from "../../../components/hero-header/hero-header.component";
import { SimpleTitleSectionComponent } from "../../../components/inicio/simple-title-section/simple-title-section.component";
import { GrowthEffortsComponent } from "../../../components/solutions/sales/growth-efforts/growth-efforts.component";
import { FeatureSectionComponent } from "../../../shared/feature-section/feature-section.component";
import { FooterComponent } from "../../../components/footer/footer.component";
import { SdrDifferencesComponent } from "../../../components/solutions/sales/sdr-differences/sdr-differences.component";

@Component({
  selector: 'app-sales',
  imports: [HeroHeaderComponent, SimpleTitleSectionComponent, GrowthEffortsComponent, FeatureSectionComponent, FooterComponent, SdrDifferencesComponent],
  templateUrl: './sales.component.html',
  styleUrl: './sales.component.css'
})
export class SalesComponent {

}
