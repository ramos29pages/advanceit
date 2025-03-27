import { Component } from '@angular/core';
import { HeroHeaderComponent } from "../../../components/hero-header/hero-header.component";
import { SimpleTitleSectionComponent } from "../../../components/inicio/simple-title-section/simple-title-section.component";
import { FeatureSectionComponent } from "../../../shared/feature-section/feature-section.component";
import { GridIconsComponent } from "../../../components/nosotros/grid-icons/grid-icons.component";
import { FooterComponent } from "../../../components/footer/footer.component";

@Component({
  selector: 'app-carrier-sales',
  imports: [HeroHeaderComponent, SimpleTitleSectionComponent, FeatureSectionComponent, GridIconsComponent, FooterComponent],
  templateUrl: './carrier-sales.component.html',
  styleUrl: './carrier-sales.component.css'
})
export class CarrierSalesComponent {


  feactures = [
'Securing capacity in a volatile market',
'Choosing suitable carriers for your business needs',
'Vetting carriers',
'Negotiate competitive freight rates',
'Build strong carrier relationships',
'Managing the lifecycle of your shipments',
  ]
}
