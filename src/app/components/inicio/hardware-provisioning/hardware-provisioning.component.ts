import { Component } from '@angular/core';
import { FeatureSectionComponent } from "../../../shared/feature-section/feature-section.component";
import { SimpleCtaComponent } from "../simple-cta/simple-cta.component";
import { TeamFormLiteComponent } from "../../team-form-lite/team-form-lite.component";
import { FooterComponent } from "../../footer/footer.component";
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-hardware-provisioning',
  imports: [FeatureSectionComponent, TeamFormLiteComponent, FooterComponent, TranslatePipe],
  templateUrl: './hardware-provisioning.component.html',
})
export class HardwareProvisioningComponent {

}
