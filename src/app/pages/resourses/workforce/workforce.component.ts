import { Component } from '@angular/core';
import { HeroHeaderComponent } from "../../../components/hero-header/hero-header.component";
import { CardsComponent } from "../../../components/resources/cards/cards.component";
import { VideoEmbedComponent } from "../../../shared/video-embed/video-embed.component";
import { OutlineTitleComponent } from "../../../shared/outline-title/outline-title.component";
import { SimpleTextDescriptionComponent } from "../../../shared/simple-text-description/simple-text-description.component";
import { FeatureSectionComponent } from "../../../shared/feature-section/feature-section.component";
import { MulticolorSectionComponent } from "../../../components/multicolor-section/multicolor-section.component";
import { TeamFormLiteComponent } from "../../../components/team-form-lite/team-form-lite.component";
import { SimpleSectionComponent } from "../../../components/simple-section/simple-section.component";
import { FooterComponent } from "../../../components/footer/footer.component";

@Component({
  selector: 'app-workforce',
  imports: [HeroHeaderComponent, CardsComponent, VideoEmbedComponent, OutlineTitleComponent, SimpleTextDescriptionComponent, FeatureSectionComponent, MulticolorSectionComponent, TeamFormLiteComponent, SimpleSectionComponent, FooterComponent],
  templateUrl: './workforce.component.html',
  styleUrl: './workforce.component.css'
})
export class WorkforceComponent {

}
