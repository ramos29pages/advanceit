import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-outline-title',
  imports: [],
  templateUrl: './outline-title.component.html',
})
export class OutlineTitleComponent {
  @Input() title = "ADVANCE TECHNOLOGIES"
}
