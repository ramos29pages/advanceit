import { Component } from '@angular/core';
import { HeroHeaderComponent } from "../../../components/hero-header/hero-header.component";
import { FeatureSectionComponent } from "../../../shared/feature-section/feature-section.component";
import { MulticolorSectionComponent } from "../../../components/multicolor-section/multicolor-section.component";
import { TeamFormLiteComponent } from "../../../components/team-form-lite/team-form-lite.component";
import { IconBigboxComponent } from "../../../components/icon-bigbox/icon-bigbox.component";
import { BackOfficeFunctionsComponent } from "../../../components/back-office-functions/back-office-functions.component";
import { FooterComponent } from "../../../components/footer/footer.component";

@Component({
  selector: 'app-back-office',
  imports: [HeroHeaderComponent, FeatureSectionComponent, MulticolorSectionComponent, TeamFormLiteComponent, IconBigboxComponent, BackOfficeFunctionsComponent, FooterComponent],
  templateUrl: './back-office.component.html',
  styleUrl: './back-office.component.css'
})
export class BackOfficeComponent {

}
