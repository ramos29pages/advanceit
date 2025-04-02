import { Component } from '@angular/core';
import { FeatureSectionComponent } from "../../../shared/feature-section/feature-section.component";
import { TopPositionsComponent } from "../../../components/top-positions/top-positions.component";
import { FooterComponent } from "../../../components/footer/footer.component";
import { HeroHeaderComponent } from "../../../components/hero-header/hero-header.component";

@Component({
  selector: 'app-relocation-expansion',
  imports: [FeatureSectionComponent, TopPositionsComponent, FooterComponent, HeroHeaderComponent],
  templateUrl: './relocation-expansion.component.html',
})
export class RelocationExpansionComponent {

}
