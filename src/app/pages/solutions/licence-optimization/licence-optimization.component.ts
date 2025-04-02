import { Component } from '@angular/core';
import { HeroHeaderComponent } from '../../../components/hero-header/hero-header.component';
import { FeatureSectionComponent } from '../../../shared/feature-section/feature-section.component';
import { TopPositionsComponent } from '../../../components/top-positions/top-positions.component';
import { FooterComponent } from '../../../components/footer/footer.component';

@Component({
  selector: 'app-licence-optimization',
  imports: [
    HeroHeaderComponent,
    FeatureSectionComponent,
    TopPositionsComponent,
    FooterComponent,
  ],
  templateUrl: './licence-optimization.component.html',
  styleUrl: './licence-optimization.component.css',
})
export class LicenceOptimizationComponent {
  topPositions: any;
}
