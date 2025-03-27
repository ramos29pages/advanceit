import { Component } from '@angular/core';
import { HeroHeaderComponent } from "../../components/hero-header/hero-header.component";
import { ResourceCardComponent } from "../../components/resources/resource-card/resource-card.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-resourses',
  imports: [HeroHeaderComponent, ResourceCardComponent, FooterComponent],
  templateUrl: './resourses.component.html',
  styleUrl: './resourses.component.css'
})
export class ResoursesComponent {

}
