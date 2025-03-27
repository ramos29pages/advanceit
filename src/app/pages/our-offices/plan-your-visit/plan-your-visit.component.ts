import { Component } from '@angular/core';
import { HeroHeaderComponent } from "../../../components/hero-header/hero-header.component";
import { SimpleCtaComponent } from "../../../components/inicio/simple-cta/simple-cta.component";
import { GridIconsComponent } from "../../../components/nosotros/grid-icons/grid-icons.component";
import { FooterComponent } from "../../../components/footer/footer.component";
import { RouterLink } from '@angular/router';
import { VideoEmbedComponent } from "../../../shared/video-embed/video-embed.component";

@Component({
  selector: 'app-plan-your-visit',
  imports: [HeroHeaderComponent, SimpleCtaComponent, GridIconsComponent, FooterComponent, RouterLink, VideoEmbedComponent],
  templateUrl: './plan-your-visit.component.html',
  styleUrl: './plan-your-visit.component.css'
})
export class PlanYourVisitComponent {

}
