import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-simple-title-section',
  imports: [CommonModule],
  templateUrl: './simple-title-section.component.html',
  styleUrl: './simple-title-section.component.css'
})
export class SimpleTitleSectionComponent {

  @Input() buttonText !: string;
  @Input() shadow : boolean = false;
  @Input() title : string = 'Are you ready to start negotiating competitive freight rates and building strong carrier relationships? Hire a Carrier Sales Representative!'

}
