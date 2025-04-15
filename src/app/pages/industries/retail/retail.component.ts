import { Component, OnInit } from '@angular/core';
import { HowWeHelpRetailersComponent } from "../../../components/industries/how-we-help-retailers/how-we-help-retailers.component";
import { HeroHeaderComponent } from '../../../components/hero-header/hero-header.component';
import { RetailBenefitsComponent } from '../../../components/industries/retail-benefits/retail-benefits.component';
import { FeatureSectionComponent } from "../../../shared/feature-section/feature-section.component";
import { TeamFormLiteComponent } from "../../../components/team-form-lite/team-form-lite.component";
import { SliderIndustriesComponent } from "../../../components/industries/slider-industries/slider-industries.component";
import { StatsComponent } from "../../../components/stats/stats.component";
import { FooterComponent } from "../../../components/footer/footer.component";
import { faChartLine, faComments, faGlobe, faLightbulb, faMoneyBillWave, faShieldAlt } from '@fortawesome/free-solid-svg-icons';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-retail',
  imports: [ HeroHeaderComponent, RetailBenefitsComponent, FeatureSectionComponent, TeamFormLiteComponent, StatsComponent, FooterComponent],
  templateUrl: './retail.component.html',
})
export class RetailComponent implements OnInit {

  constructor(private meta: Meta, private titleService : Title) {}
  ngOnInit(): void {

    this.titleService.setTitle("Advance Healthcare IT Solutions");

    this.meta.updateTag({property: 'og:title', content: 'Advance Healthcare IT Solutions'});
    this.meta.updateTag({property: 'og:description', content: 'Advance Healthcare IT Solutions'});
    this.meta.updateTag({property: 'og:image', content: 'https://images.unsplash.com/photo-1664902276790-90624a60ff47?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'});
    this.meta.updateTag({name: 'twitter:title', content: 'Advance Healthcare IT Solutions'});
    this.meta.updateTag({name: 'twitter:card', content: 'Advance Healthcare IT Solutions'});
    this.meta.updateTag({name: 'twitter:description', content: 'Advance Healthcare IT Solutions'});
    this.meta.updateTag({property: 'twitter:image', content: 'https://images.unsplash.com/photo-1664902276790-90624a60ff47?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'});
  }

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
