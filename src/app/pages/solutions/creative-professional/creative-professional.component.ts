import { Component } from '@angular/core';
import { HeroHeaderComponent } from "../../../components/hero-header/hero-header.component";
import { SimpleTitleSectionComponent } from "../../../components/inicio/simple-title-section/simple-title-section.component";
import { FeatureSectionComponent } from "../../../shared/feature-section/feature-section.component";
import { GridIconsComponent } from "../../../components/nosotros/grid-icons/grid-icons.component";
import { MulticolorImageComponent } from "../../../components/servicios/business/multicolor-image/multicolor-image.component";
import { TeamFormLiteComponent } from "../../../components/team-form-lite/team-form-lite.component";
import { FooterComponent } from "../../../components/footer/footer.component";

@Component({
  selector: 'app-creative-professional',
  imports: [HeroHeaderComponent, SimpleTitleSectionComponent, FeatureSectionComponent, GridIconsComponent, MulticolorImageComponent, TeamFormLiteComponent, FooterComponent],
  templateUrl: './creative-professional.component.html',
  styleUrl: './creative-professional.component.css'
})
export class CreativeProfessionalComponent {

}
