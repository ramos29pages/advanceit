import { Component } from '@angular/core';
import { FeatureSectionComponent } from '../../../shared/feature-section/feature-section.component';
import { TeamFormLiteComponent } from '../../team-form-lite/team-form-lite.component';
import { FooterComponent } from '../../footer/footer.component';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-enterprise-tech',
  imports: [FeatureSectionComponent, TeamFormLiteComponent, FooterComponent, TranslatePipe],
  templateUrl: './enterprise-tech.component.html',
})
export class EnterpriseTechComponent {
  feactures = [
    'New Office IT Setup: Comprehensive IT infrastructure deployment, including networking and structured cabling.',
    'Data Center & Server Room Solutions: Custom-built server racks, cooling systems, and redundant power solutions.',
    'IT Relocation & Expansion: Seamless migration of IT assets during office relocations or global expansions.',
    'Conference Room & AV Solutions:',
  ];

  levels = [
    'Video conferencing solutions (Zoom Rooms, Microsoft Teams, Cisco Webex)',
    'Meeting room reservation systems',
    'Video walls, display monitors, and interactive whiteboards',
    '	Audio and sound system integration',
    'Smart automation and IoT integrations',
  ];
}
