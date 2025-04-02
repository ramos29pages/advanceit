import { Component } from '@angular/core';
import { TeamFormLiteComponent } from "../../../components/team-form-lite/team-form-lite.component";
import { MulticolorImageComponent } from "../../../components/servicios/business/multicolor-image/multicolor-image.component";
import { FooterComponent } from "../../../components/footer/footer.component";
import { ProductivityComponent } from "../../../components/solutions/logistics/productivity/productivity.component";
import { HeroHeaderComponent } from "../../../components/hero-header/hero-header.component";

@Component({
  selector: 'app-asset-disposal',
  imports: [TeamFormLiteComponent, MulticolorImageComponent, FooterComponent, ProductivityComponent, HeroHeaderComponent],
  templateUrl: './asset-disposal.component.html',
  styleUrl: './asset-disposal.component.css'
})
export class AssetDisposalComponent {

}
