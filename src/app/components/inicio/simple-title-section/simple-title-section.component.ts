import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ButtonSimpleCtaComponent } from "../../../utils/button-simple-cta/button-simple-cta.component";
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-simple-title-section',
  imports: [CommonModule, ButtonSimpleCtaComponent, TranslatePipe],
  templateUrl: './simple-title-section.component.html',
  styleUrl: './simple-title-section.component.css',
})
export class SimpleTitleSectionComponent {
  @Input() buttonText !: string;
  @Input() shadow: boolean = false;
  @Input() title: string = 'home.titleSection.title';
}
