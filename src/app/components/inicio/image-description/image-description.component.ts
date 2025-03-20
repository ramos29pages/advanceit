import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-image-description',
  imports: [FontAwesomeModule,],
  templateUrl: './image-description.component.html',
})
export class ImageDescriptionComponent {

  faCheck = faCheck;
}
