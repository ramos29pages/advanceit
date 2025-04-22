import { Component } from '@angular/core';
import { HeroHeaderComponent } from '../../../components/hero-header/hero-header.component';
import { SliderIndustriesComponent } from '../../../components/industries/slider-industries/slider-industries.component';
import { HowWeHelpRetailersComponent } from '../../../components/industries/how-we-help-retailers/how-we-help-retailers.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faChartLine,
  faComments,
  faGlobe,
  faLightbulb,
  faMoneyBillWave,
  faShieldAlt,
} from '@fortawesome/free-solid-svg-icons';
import {
  faHeadset,
  faCogs,
  faArrowsAltH,
} from '@fortawesome/free-solid-svg-icons';
import { FeatureSectionComponent } from '../../../shared/feature-section/feature-section.component';
import { RetailBenefitsComponent } from '../../../components/industries/retail-benefits/retail-benefits.component';
import { TeamFormLiteComponent } from '../../../components/team-form-lite/team-form-lite.component';
import { StatsComponent } from '../../../components/stats/stats.component';
import { FooterComponent } from '../../../components/footer/footer.component';

@Component({
  selector: 'app-insurance',
  imports: [
    HeroHeaderComponent,
    // SliderIndustriesComponent,
    // HowWeHelpRetailersComponent,
    FeatureSectionComponent,
    RetailBenefitsComponent,
    TeamFormLiteComponent,
    StatsComponent,
    FooterComponent,
  ],
  templateUrl: './insurance.component.html',
})
export class InsuranceComponent {
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
    },
  ];

  // Íconos de FontAwesome
  faMoneyBillWave = faMoneyBillWave;
  faGlobe = faGlobe;
  faLightbulb = faLightbulb;
  faShieldAlt = faShieldAlt;
  faComments = faComments;
  faChartLine = faChartLine;

  benefits = [
    {
      icon: this.faMoneyBillWave,
      title: 'Secure Policy & Claims Management Systems',
      description:
        'Protects sensitive insurance data and speeds up claims processing.',
    },
    {
      icon: this.faGlobe,
      title: 'Remote IT Support for Sales & Customer Service Teams',
      description: 'Improves accessibility and service quality.',
    },
    {
      icon: this.faLightbulb,
      title: 'Automated Compliance & Regulatory Reporting',
      description:
        'Ensures adherence to industry regulations like NAIC & GDPR.',
    },
    {
      icon: this.faShieldAlt,
      title: 'Data Analytics for Risk Assessment',
      description: 'Helps insurers make smarter underwriting decisions.',
    },
    {
      icon: this.faComments,
      title: 'Cybersecurity for Customer Data Protection',
      description: 'Prevents identity theft and fraud.',
    },
    {
      icon: this.faChartLine,
      title: 'Cloud Infrastructure for Scalability & Business Continuity',
      description: 'Supports business expansion with flexible IT solutions.',
    },
  ];
}
