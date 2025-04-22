import { Component } from '@angular/core';
import { HeroHeaderComponent } from '../../../components/hero-header/hero-header.component';
import { SimpleSectionComponent } from '../../../components/simple-section/simple-section.component';
import { FooterComponent } from '../../../components/footer/footer.component';
import { FeatureSectionComponent } from '../../../shared/feature-section/feature-section.component';
import { SimpleCtaComponent } from "../../../components/inicio/simple-cta/simple-cta.component";
import { TeamFormLiteComponent } from "../../../components/team-form-lite/team-form-lite.component";
import { TranslateModule, TranslatePipe } from '@ngx-translate/core'; // Import the TranslateModule

@Component({
  selector: 'app-impacto-social',
  standalone: true, // Make sure it's a standalone component
  imports: [
    HeroHeaderComponent,
    SimpleSectionComponent,
    FooterComponent,
    FeatureSectionComponent,
    SimpleCtaComponent,
    TeamFormLiteComponent,
    TranslatePipe // Add TranslateModule to imports
  ],
  template: `
    <app-hero-header
      class="mt-20"
      [title]="'socialImpact.heroHeader.socialImpact' | translate"
      [backgroundImage]="imageURL"
    >
    </app-hero-header>
    <app-simple-section [icon]="true"></app-simple-section>
    <app-feature-section
      [title]="'socialImpact.featureSection1.title' | translate"
      imageSrc="https://images.pexels.com/photos/7173754/pexels-photo-7173754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      [simpleDescription]="'socialImpact.featureSection1.description' | translate"
    ></app-feature-section>

    <app-feature-section
      [title]="'socialImpact.featureSection2.title' | translate"
      imageSrc="https://images.pexels.com/photos/3850512/pexels-photo-3850512.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      [simpleDescription]="'socialImpact.featureSection2.description' | translate"
      [features]="feactures2"
      [reverse]="true"
    ></app-feature-section>


    <section class="py-18 px-4 text-center">
      <div class="max-w-6xl mx-auto">
        <h2
          class="text-2xl md:text-5xl font-extrabold uppercase text-orange-500 mb-2"
        >
          {{ 'socialImpact.sectionCallToAction.title' | translate }}
        </h2>
        <p class="text-slate-600 text-xl w-full text-center py-4">
          <span class="max-w-[350px] block mx-auto">
            {{ 'socialImpact.sectionCallToAction.description' | translate }}
          </span>
        </p>
      </div>
    </section>


    <app-simple-cta [title]="'socialImpact.simpleCta.title' | translate"></app-simple-cta>

    <app-team-form-lite [title]="'socialImpact.teamFormLite.title' | translate" imageURL="https://images.pexels.com/photos/7048061/pexels-photo-7048061.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></app-team-form-lite>
    <app-footer></app-footer>
  `,
})
export class ImpactoSocialComponent {
  imageURL =
    'https://images.unsplash.com/photo-1645520718652-9342896b0eec?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

  feactures2 = [
    'socialImpact.featureSection2.features.0',
    'socialImpact.featureSection2.features.1',
    'socialImpact.featureSection2.features.2',
    'socialImpact.featureSection2.features.3',
  ];
}
