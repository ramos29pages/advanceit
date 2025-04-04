import { Component } from '@angular/core';
import { SdgGoalsComponent } from "../../components/sdg-goals/sdg-goals.component";
import { HeroHeaderComponent } from "../../components/hero-header/hero-header.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-alianzas',
  imports: [SdgGoalsComponent, FooterComponent],
  templateUrl: './alianzas.component.html',
  styleUrl: './alianzas.component.css'
})
export class AlianzasComponent {

}
