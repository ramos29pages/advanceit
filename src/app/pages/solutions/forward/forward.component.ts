import { Component } from '@angular/core';
import { HeroHeaderComponent } from "../../../components/hero-header/hero-header.component";
import { FeatureSectionComponent } from "../../../shared/feature-section/feature-section.component";

@Component({
  selector: 'app-forward',
  imports: [HeroHeaderComponent, FeatureSectionComponent],
  templateUrl: './forward.component.html',
  styleUrl: './forward.component.css'
})
export class ForwardComponent {

}
