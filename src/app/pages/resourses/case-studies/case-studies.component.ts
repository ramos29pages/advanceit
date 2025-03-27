import { Component } from '@angular/core';
import { HeroHeaderComponent } from "../../../components/hero-header/hero-header.component";
import { CaseStudiesListComponent } from "../../../components/resources/case-studies-list/case-studies-list.component";
import { FooterComponent } from "../../../components/footer/footer.component";

@Component({
  selector: 'app-case-studies',
  imports: [HeroHeaderComponent, CaseStudiesListComponent, FooterComponent],
  templateUrl: './case-studies.component.html',
  styleUrl: './case-studies.component.css'
})
export class CaseStudiesComponent {

}
