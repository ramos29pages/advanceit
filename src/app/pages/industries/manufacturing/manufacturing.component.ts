import { Component } from '@angular/core';
import { HeroHeaderComponent } from '../../../components/hero-header/hero-header.component';
import { SliderIndustriesComponent } from '../../../components/industries/slider-industries/slider-industries.component';
import { HowWeHelpRetailersComponent } from '../../../components/industries/how-we-help-retailers/how-we-help-retailers.component';
import { FeatureSectionComponent } from '../../../shared/feature-section/feature-section.component';
import { RetailBenefitsComponent } from '../../../components/industries/retail-benefits/retail-benefits.component';
import { TeamFormLiteComponent } from '../../../components/team-form-lite/team-form-lite.component';
import { StatsComponent } from '../../../components/stats/stats.component';
import { FooterComponent } from '../../../components/footer/footer.component';
import {
  faChartLine,
  faComments,
  faGlobe,
  faLightbulb,
  faMoneyBillWave,
  faShieldAlt,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-manufacturing',
  imports: [
    HeroHeaderComponent,
    FeatureSectionComponent,
    RetailBenefitsComponent,
    TeamFormLiteComponent,
    StatsComponent,
    FooterComponent,
  ],
  templateUrl: './manufacturing.component.html',
})
export class ManufacturingComponent {
  // Íconos de FontAwesome
  faMoneyBillWave = faMoneyBillWave;
  faGlobe = faGlobe;
  faLightbulb = faLightbulb;
  faShieldAlt = faShieldAlt;
  faComments = faComments;
  faChartLine = faChartLine;

  benefits  = [
    {
      icon: this.faMoneyBillWave,
      title: 'Cloud-Based Shipment Tracking & Monitoring',
      description: 'Provides real-time visibility of goods and inventory.',
    },
    {
      icon: this.faGlobe,
      title: 'Remote IT Support for Logistics Teams',
      description: 'Ensures seamless communication and troubleshooting.',
    },
    {
      icon: this.faLightbulb,
      title: 'AI & Automation for Route Optimization',
      description: 'Enhances delivery efficiency and reduces costs.',
    },
    {
      icon: this.faShieldAlt,
      title: 'Cybersecurity for Supply Chain Data',
      description: 'Protects logistics networks from cyber threats.',
    },
    {
      icon: this.faComments,
      title: 'IT Provisioning for Warehouses & Drivers',
      description:
        'Supplies pre-configured devices for warehouse and field operations.',
    },
    {
      icon: this.faChartLine,
      title: 'Custom IT Solutions for Fleet & Inventory Management',
      description: 'Streamlines operations with data-driven technology.',
    },
  ];
}
