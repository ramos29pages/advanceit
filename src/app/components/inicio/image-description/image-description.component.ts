import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { ButtonSimpleCtaComponent } from "../../../utils/button-simple-cta/button-simple-cta.component";
@Component({
  selector: 'app-image-description',
  imports: [FontAwesomeModule, ButtonSimpleCtaComponent],
  templateUrl: './image-description.component.html',
})
export class ImageDescriptionComponent {

  faCheck = faCheck;
  imageURL= 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
}
