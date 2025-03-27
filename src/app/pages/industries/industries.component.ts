import { Component } from '@angular/core';
import { HeroHeaderComponent } from "../../components/hero-header/hero-header.component";
import { RetailBenefitsComponent } from "../../components/industries/retail-benefits/retail-benefits.component";

@Component({
  selector: 'app-industries',
  imports: [HeroHeaderComponent, RetailBenefitsComponent],
  templateUrl: './industries.component.html',
  styleUrl: './industries.component.css'
})
export class IndustriesComponent {

}
