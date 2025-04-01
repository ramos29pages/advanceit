import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ButtonSimpleCtaComponent } from "../../../utils/button-simple-cta/button-simple-cta.component";

@Component({
  selector: 'app-simple-title-section',
  imports: [CommonModule, ButtonSimpleCtaComponent],
  templateUrl: './simple-title-section.component.html',
  styleUrl: './simple-title-section.component.css',
})
export class SimpleTitleSectionComponent {
  @Input() buttonText!: string;
  @Input() shadow: boolean = false;
  @Input() title: string =
    ' "From hardware and software solutions to secure network setups and ongoing IT support, we make sure your nearshore team is fully equipped to operate efficiently and securely. Let’s turn your satellite office into a powerhouse of productivity! "';
}
