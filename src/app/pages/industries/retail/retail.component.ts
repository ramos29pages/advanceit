import { Component } from '@angular/core';
import { HowWeHelpRetailersComponent } from "../../../components/industries/how-we-help-retailers/how-we-help-retailers.component";
import { HeroHeaderComponent } from '../../../components/hero-header/hero-header.component';
import { RetailBenefitsComponent } from '../../../components/industries/retail-benefits/retail-benefits.component';
import { FeatureSectionComponent } from "../../../shared/feature-section/feature-section.component";
import { TeamFormLiteComponent } from "../../../components/team-form-lite/team-form-lite.component";
import { SliderIndustriesComponent } from "../../../components/industries/slider-industries/slider-industries.component";
import { StatsComponent } from "../../../components/stats/stats.component";
import { FooterComponent } from "../../../components/footer/footer.component";
import { faChartLine, faComments, faGlobe, faLightbulb, faMoneyBillWave, faShieldAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-retail',
  imports: [ HeroHeaderComponent, RetailBenefitsComponent, FeatureSectionComponent, TeamFormLiteComponent, StatsComponent, FooterComponent],
  templateUrl: './retail.component.html',
  styleUrl: './retail.component.css'
})
export class RetailComponent {

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
      title: 'Enhanced Data Security & Compliance',
      description: 'Protects patient records and ensures HIPAA compliance.'
    },
    {
      icon: this.faGlobe,
      title: 'Improved Telehealth & Remote Work Capabilities',
      description: 'Supports virtual consultations and remote administrative teams.'
    },
    {
      icon: this.faLightbulb,
      title: 'IT Infrastructure Optimization',
      description: 'Ensures seamless operation of medical software, databases, and devices.'
    },
    {
      icon: this.faShieldAlt,
      title: 'Reliable IT Provisioning & Asset Management',
      description: 'Provides secure workstations, laptops, and cloud access for medical staff.'
    },
    {
      icon: this.faComments,
      title: '24/7 IT Support & System Monitoring',
      description: 'Reduces downtime and ensures uninterrupted healthcare services.'
    },
    {
      icon: this.faChartLine,
      title: 'Cybersecurity & Ransomware Protection',
      description: 'Safeguards against cyber threats targeting healthcare systems.'
    }
];

}
