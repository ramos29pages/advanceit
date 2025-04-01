import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-button-simple-cta',
  imports: [RouterLink],
  templateUrl: './button-simple-cta.component.html',
})
export class ButtonSimpleCtaComponent {

  @Input() buttonText !: string ;
  @Input() link !: string ;
}
