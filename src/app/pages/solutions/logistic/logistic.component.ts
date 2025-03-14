import { Component } from '@angular/core';
import { HeroHeaderComponent } from "../../../components/hero-header/hero-header.component";
import { StaffAugmentationComponent } from "../../../components/solutions/logistics/staff-augmentation/staff-augmentation.component";
import { ContactoComponent } from "../../contacto/contacto.component";
import { FeaturesComponent } from "../../../components/solutions/logistics/feactures/feactures.component";
import { SimpleSectionComponent } from "../../../components/simple-section/simple-section.component";
import { ProductivityComponent } from "../../../components/solutions/logistics/productivity/productivity.component";
import { StaffContactComponent } from "../../../components/solutions/logistics/staff-contact/staff-contact.component";
import { LogisticInfoComponent } from "../../../components/solutions/logistics/logictic-info/logictic-info.component";
import { TeamFormComponent } from "../../../components/solutions/logistics/team-form/team-form.component";
import { FooterComponent } from "../../../components/footer/footer.component";

@Component({
  selector: 'app-logistic',
  imports: [HeroHeaderComponent, StaffAugmentationComponent, ContactoComponent, FeaturesComponent, SimpleSectionComponent, ProductivityComponent, StaffContactComponent, LogisticInfoComponent, TeamFormComponent, FooterComponent],
  templateUrl: './logistic.component.html',
  styleUrl: './logistic.component.css'
})
export class LogisticComponent {

}
