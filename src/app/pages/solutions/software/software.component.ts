import { Component } from '@angular/core';
import { HeroHeaderComponent } from "../../../components/hero-header/hero-header.component";
import { TitledesSectionComponent } from "../../../shared/titledes-section/titledes-section.component";
import { FeatureSectionComponent } from "../../../shared/feature-section/feature-section.component";
import { NearshoreBenefitsComponent } from "../../../components/nearshore-benefits/nearshore-benefits.component";
import { FooterComponent } from "../../../components/footer/footer.component";

@Component({
  selector: 'app-software',
  imports: [HeroHeaderComponent, TitledesSectionComponent, FeatureSectionComponent, NearshoreBenefitsComponent, FooterComponent],
  templateUrl: './software.component.html',
})
export class SoftwareComponent {

  titulo : string = 'Nearshore Staff Augmentation';
  tituloSecundario : string = 'Ready to start building your nearshore teams with highly efficient developers?';
  textos: string[] = [
    'At Lean Tech, we understand the technology market well, allowing us to guide our customers toward building state-of-the-art software products with an incredible nearshore workforce that will take your projects to a whole new level.',
    'Let us be your trusted technology partner and become an extension of your software development team with the best nearshore and offshore talent LATAM has to offer. We are professionals at facilitating seamless nearshore software development outsourcing to Latin America.'
  ]

  descripciones = [
    "Nearshore software development provides a significant benefit in terms of scalability, which is crucial for firms looking to adapt and thrive in today's fast-paced digital market.",
    "Companies collaborating with a nearshore team can scale their development efforts up or down based on current needs and future estimates, eliminating the overhead of hiring and the delays involved with training new employees.",
    "This agility ensures that firms can quickly and efficiently respond to market demands, technological improvements, and strategic changes. "
  ];
}
