import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-button-simple-cta',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './button-simple-cta.component.html',
})
export class ButtonSimpleCtaComponent {

  @Input() buttonText !: string ;
  @Input() link !: string ;
}
