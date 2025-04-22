import { Component, Input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-simple-section',
  imports: [TranslatePipe],
  templateUrl: './simple-section.component.html',
  styleUrl: './simple-section.component.css'
})
export class SimpleSectionComponent {

  @Input() icon: boolean = false;
  @Input() title: string = 'Simple Section';
  @Input() description : string = 'Description'
}
