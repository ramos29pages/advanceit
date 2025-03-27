import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-simple-text-description',
  imports: [CommonModule],
  templateUrl: './simple-text-description.component.html',
  styleUrl: './simple-text-description.component.css'
})
export class SimpleTextDescriptionComponent {

  @Input() shadow : boolean = false;
}
