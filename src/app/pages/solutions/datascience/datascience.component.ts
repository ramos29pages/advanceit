import { Component } from '@angular/core';
import { HeroHeaderComponent } from "../../../components/hero-header/hero-header.component";
import { TitledesSectionComponent } from "../../../shared/titledes-section/titledes-section.component";
import { ProductivityComponent } from "../../../components/solutions/logistics/productivity/productivity.component";
import { MulticolorImageComponent } from "../../../components/servicios/business/multicolor-image/multicolor-image.component";
import { TeamFormLiteComponent } from "../../../components/team-form-lite/team-form-lite.component";
import { DatascienceSimpleSectionComponent } from "../../../components/servicios/datascience/datascience-simple-section/datascience-simple-section.component";
import { FooterComponent } from "../../../components/footer/footer.component";

@Component({
  selector: 'app-datascience',
  imports: [HeroHeaderComponent, ProductivityComponent, MulticolorImageComponent, TeamFormLiteComponent, DatascienceSimpleSectionComponent, FooterComponent],
  templateUrl: './datascience.component.html',
  styleUrl: './datascience.component.css'
})
export class DatascienceComponent {

}
