import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-titledes-section',
  imports: [CommonModule],
  templateUrl: './titledes-section.component.html',
  styleUrl: './titledes-section.component.css'
})
export class TitledesSectionComponent {

  @Input() buttonText : string = '';
  @Input() footer : boolean = false;
  @Input() gray : boolean = false;
  @Input() shadow : boolean = false;
  @Input() head : boolean = false;
  @Input() title : string = 'Default Title';
  @Input() p : string[] = [];
}
