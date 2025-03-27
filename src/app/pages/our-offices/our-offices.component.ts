import { Component } from '@angular/core';
import { HeroHeaderComponent } from "../../components/hero-header/hero-header.component";
import { SimpleSectionComponent } from "../../components/simple-section/simple-section.component";
import { FeatureSectionComponent } from "../../shared/feature-section/feature-section.component";
import { SimpleTitleSectionComponent } from "../../components/inicio/simple-title-section/simple-title-section.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-our-offices',
  imports: [HeroHeaderComponent, SimpleSectionComponent, FeatureSectionComponent, SimpleTitleSectionComponent, FooterComponent],
  templateUrl: './our-offices.component.html',
  styleUrl: './our-offices.component.css'
})
export class OurOfficesComponent {

}
