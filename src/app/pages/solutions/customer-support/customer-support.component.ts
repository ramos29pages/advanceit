import { Component } from '@angular/core';
import { HeroHeaderComponent } from "../../../components/hero-header/hero-header.component";
import { PatternSectionComponent } from "../../../shared/pattern-section/pattern-section.component";
import { GridIconsComponent } from "../../../components/nosotros/grid-icons/grid-icons.component";
import { SimpleTitleSectionComponent } from "../../../components/inicio/simple-title-section/simple-title-section.component";
import { FooterComponent } from "../../../components/footer/footer.component";
import { SimpleTextDescriptionComponent } from "../../../shared/simple-text-description/simple-text-description.component";

@Component({
  selector: 'app-customer-support',
  imports: [HeroHeaderComponent, PatternSectionComponent, GridIconsComponent, SimpleTitleSectionComponent, FooterComponent, SimpleTextDescriptionComponent],
  templateUrl: './customer-support.component.html',
  styleUrl: './customer-support.component.css'
})
export class CustomerSupportComponent {

}
