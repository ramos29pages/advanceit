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
import { TranslatePipe } from '@ngx-translate/core';

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
    this.meta.updateTag({name: 'twitter:image', content: 'https://images.unsplash.com/photo-1664902276790-90624a60ff47?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'});
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
