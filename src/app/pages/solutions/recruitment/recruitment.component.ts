import { Component } from '@angular/core';
import { HeroHeaderComponent } from '../../../components/hero-header/hero-header.component';
import { SimpleTextDescriptionComponent } from '../../../shared/simple-text-description/simple-text-description.component';
import { FeatureSectionComponent } from '../../../shared/feature-section/feature-section.component';
import { SimpleTitleSectionComponent } from '../../../components/inicio/simple-title-section/simple-title-section.component';
import { FooterComponent } from '../../../components/footer/footer.component';

@Component({
  selector: 'app-recruitment',
  imports: [
    HeroHeaderComponent,
    SimpleTextDescriptionComponent,
    FeatureSectionComponent,
    SimpleTitleSectionComponent,
    FooterComponent,
  ],
  templateUrl: './recruitment.component.html',
  styleUrl: './recruitment.component.css',
})
export class RecruitmentComponent {
  feactures: string[] = [
    'Interact with potential candidates',
    'Create emails to share with candidates',
    'Identify suitable candidates',
    'Create and maintain an updated',
    'candidate database',
    'Execute vacancy profiling',
    'Contact internal and external referrals',
  ];
}
