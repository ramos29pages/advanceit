import { Component } from '@angular/core';
import { FeatureSectionComponent } from "../../../shared/feature-section/feature-section.component";
import { TeamFormLiteComponent } from "../../team-form-lite/team-form-lite.component";
import { FooterComponent } from "../../footer/footer.component";

@Component({
  selector: 'app-software-service',
  imports: [FeatureSectionComponent, TeamFormLiteComponent, FooterComponent],
  templateUrl: './software-service.component.html',
  styleUrl: './software-service.component.css'
})
export class SoftwareServiceComponent {

  feactures = [

    "Microsoft Office 365 & Power BI: Streamlined collaboration, business intelligence, and productivity tools",

    'Adobe Sign & Creative Cloud: Digital signature solutions and creative software for enterprises.',

    'Cloud-Based Business Applications: Deployment and integration of SaaS platforms tailored to business needs.',

    'License Optimization & Compliance: Ensuring cost-effective software usage and regulatory compliance.',

  ]
}
