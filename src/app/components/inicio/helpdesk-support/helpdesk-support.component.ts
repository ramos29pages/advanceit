import { Component } from '@angular/core';
import { FeatureSectionComponent } from '../../../shared/feature-section/feature-section.component';
import { TeamFormLiteComponent } from '../../team-form-lite/team-form-lite.component';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-helpdesk-support',
  imports: [FeatureSectionComponent, TeamFormLiteComponent, FooterComponent],
  templateUrl: './helpdesk-support.component.html',
  styleUrl: './helpdesk-support.component.css',
})
export class HelpdeskSupportComponent {
  feactures: string[] = [
    '24/7 Help Desk Support: Remote and on-site support for troubleshooting and issue resolution.',
    'AI-Powered IT Assistance: Leveraging AI-driven chatbots for instant support and ticket automation.',
    'Service Flow Management: Incident tracking, ticket resolution, and continuous service improvement.',
    'Tiered Support Structure:',
  ];

  levels = [
    ' Level 1: Basic troubleshooting and quick resolutions.',
    'Level 2: Advanced diagnostics and software support.',
    'Level 3: Escalation to specialized engineers and vendor coordination.',
  ];
}
