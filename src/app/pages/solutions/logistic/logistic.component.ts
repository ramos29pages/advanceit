import { Component } from '@angular/core';
import { HeroHeaderComponent } from '../../../components/hero-header/hero-header.component';
import { StaffAugmentationComponent } from '../../../components/solutions/logistics/staff-augmentation/staff-augmentation.component';
import { ContactoComponent } from '../../contacto/contacto.component';
import { FeaturesComponent } from '../../../components/solutions/logistics/feactures/feactures.component';
import { SimpleSectionComponent } from '../../../components/simple-section/simple-section.component';
import { ProductivityComponent } from '../../../components/solutions/logistics/productivity/productivity.component';
import { LogisticInfoComponent } from '../../../components/solutions/logistics/logictic-info/logictic-info.component';
import { FooterComponent } from '../../../components/footer/footer.component';
import { TeamFormLiteComponent } from "../../../components/team-form-lite/team-form-lite.component";

@Component({
  selector: 'app-logistic',
  imports: [
    HeroHeaderComponent,
    StaffAugmentationComponent,
    ContactoComponent,
    FeaturesComponent,
    SimpleSectionComponent,
    ProductivityComponent,
    LogisticInfoComponent,
    FooterComponent,
    TeamFormLiteComponent
],
  templateUrl: './logistic.component.html',
  styleUrl: './logistic.component.css',
})
export class LogisticComponent {}
