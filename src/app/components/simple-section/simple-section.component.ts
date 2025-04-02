import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-simple-section',
  imports: [],
  templateUrl: './simple-section.component.html',
  styleUrl: './simple-section.component.css'
})
export class SimpleSectionComponent {

  @Input() icon: boolean = false;
  @Input() title: string = 'Simple Section';
  @Input() description : string = 'Description'
}
