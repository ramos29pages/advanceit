import { Component } from '@angular/core';
import { HeroHeaderComponent } from "../../../components/hero-header/hero-header.component";
import { TeamFormLiteComponent } from "../../../components/team-form-lite/team-form-lite.component";
import { ProductivityComponent } from "../../../components/solutions/logistics/productivity/productivity.component";
import { MulticolorImageComponent } from "../../../components/servicios/business/multicolor-image/multicolor-image.component";
import { FooterComponent } from "../../../components/footer/footer.component";

@Component({
  selector: 'app-bussines',
  imports: [HeroHeaderComponent,TeamFormLiteComponent, ProductivityComponent, MulticolorImageComponent, FooterComponent],
  templateUrl: './bussines.component.html',
  styleUrl: './bussines.component.css'
})
export class BussinesComponent {

}
