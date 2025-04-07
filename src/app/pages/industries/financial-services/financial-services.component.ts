import { Component } from '@angular/core';
import { HeroHeaderComponent } from "../../../components/hero-header/hero-header.component";
import { SliderIndustriesComponent } from "../../../components/industries/slider-industries/slider-industries.component";
import { FeatureSectionComponent } from "../../../shared/feature-section/feature-section.component";
import { RetailBenefitsComponent } from "../../../components/industries/retail-benefits/retail-benefits.component";
import { TeamFormLiteComponent } from "../../../components/team-form-lite/team-form-lite.component";
import { StatsComponent } from "../../../components/stats/stats.component";
import { HowWeHelpRetailersComponent } from "../../../components/industries/how-we-help-retailers/how-we-help-retailers.component";
import { faChartLine, faComments, faGlobe, faLightbulb, faMoneyBillWave, faShieldAlt } from '@fortawesome/free-solid-svg-icons';


import {
  faHeadset,
  faCogs,
  faArrowsAltH,
} from '@fortawesome/free-solid-svg-icons';
import { FooterComponent } from "../../../components/footer/footer.component";

@Component({
  selector: 'app-financial-services',
  imports: [HeroHeaderComponent, FeatureSectionComponent, RetailBenefitsComponent, TeamFormLiteComponent, StatsComponent,
    // HowWeHelpRetailersComponent,
    FooterComponent],
  templateUrl: './financial-services.component.html',
  styleUrl: './financial-services.component.css'
})
export class FinancialServicesComponent {

      // Íconos de FontAwesome
      faMoneyBillWave = faMoneyBillWave;
      faGlobe = faGlobe;
      faLightbulb = faLightbulb;
      faShieldAlt = faShieldAlt;
      faComments = faComments;
      faChartLine = faChartLine;


   faHeadset = faHeadset; // Ejemplo: "Enhancing Customer Service Excellence"
      faCogs = faCogs; // Ejemplo: "Optimizing Operational Efficiency"
      faArrowsAltH = faArrowsAltH; // Ejemplo: "Scalable Solutions"

    helpItems = [
      {
        icon: this.faHeadset,
        title: 'Enhancing Customer Service Excellence',
        description:
          'Access to a diverse pool of multilingual talent ensures superior customer support across various languages and time zones.',
      },
      {
        icon: this.faCogs,
        title: 'Optimizing Operational Efficiency',
        description:
          'Streamlined processes and specialized expertise enable efficient service delivery and cost reduction.',
      }]



      benefits = [
        {
          icon: this.faMoneyBillWave,
          title: 'Bank-Grade Security & Compliance',
          description: 'Meets financial industry regulations such as PCI-DSS and GDPR.'
        },
        {
          icon: this.faGlobe,
          title: 'Remote Workforce Solutions',
          description: 'Enables secure and efficient access to financial systems from anywhere.'
        },
        {
          icon: this.faLightbulb,
          title: 'High-Performance IT Infrastructure',
          description: 'Ensures reliability for trading, banking, and financial transactions.'
        },
        {
          icon: this.faShieldAlt,
          title: 'Advanced Data Analytics & Business Intelligence',
          description: 'Provides insights for risk management and financial forecasting.'
        },
        {
          icon: this.faComments,
          title: 'Cybersecurity & Fraud Prevention',
          description: 'Protects against phishing, data breaches, and cyber fraud.'
        },
        {
          icon: this.faChartLine,
          title: 'Cloud Solutions for Scalability & Disaster Recovery',
          description: 'Ensures financial services remain operational in any scenario.'
        }
    ];
}
