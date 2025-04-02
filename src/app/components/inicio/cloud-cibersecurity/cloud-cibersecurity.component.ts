import { Component } from '@angular/core';
import { FeatureSectionComponent } from "../../../shared/feature-section/feature-section.component";
import { TeamFormLiteComponent } from "../../team-form-lite/team-form-lite.component";
import { FooterComponent } from "../../footer/footer.component";

@Component({
  selector: 'app-cloud-cibersecurity',
  imports: [FeatureSectionComponent, TeamFormLiteComponent, FooterComponent],
  templateUrl: './cloud-cibersecurity.component.html',
  styleUrl: './cloud-cibersecurity.component.css'
})
export class CloudCibersecurityComponent {

  feactures = [

    'Cloud Infrastructure: Expertise in Azure, AWS, and Google Cloud for scalable cloud deployments.',
	'Cybersecurity Frameworks: End-to-end security solutions, including threat detection, endpoint protection, and vulnerability assessments.',
 'Cloud Backup & Disaster Recovery: Business continuity planning with secure backup strategies.',
'Identity & Access Management: Securing enterprise IT with single sign-on (SSO) and multi-factor authentication (MFA).',

  ]
}
