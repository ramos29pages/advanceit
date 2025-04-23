import { Component, OnInit } from '@angular/core';
import { HeroHeaderComponent } from '../../../components/hero-header/hero-header.component';
import { RetailBenefitsComponent } from '../../../components/industries/retail-benefits/retail-benefits.component';
import { FeatureSectionComponent } from "../../../shared/feature-section/feature-section.component";
import { TeamFormLiteComponent } from "../../../components/team-form-lite/team-form-lite.component";
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

    this.titleService.setTitle("Advance IT");

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
      title: 'industries.healthcare.benefit1.title',
      description: 'industries.healthcare.benefit1.description'
    },
    {
      icon: this.faGlobe,
      title: 'industries.healthcare.benefit2.title',
      description: 'industries.healthcare.benefit2.description'
    },
    {
      icon: this.faLightbulb,
      title: 'industries.healthcare.benefit3.title',
      description: 'industries.healthcare.benefit3.description'
    },
    {
      icon: this.faShieldAlt,
      title: 'industries.healthcare.benefit4.title',
      description: 'industries.healthcare.benefit4.description'
    },
    {
      icon: this.faComments,
      title: 'industries.healthcare.benefit5.title',
      description: 'industries.healthcare.benefit5.description'
    },
    {
      icon: this.faChartLine,
      title: 'industries.healthcare.benefit6.title',
      description: 'industries.healthcare.benefit6.description'
    }
  ];

}
