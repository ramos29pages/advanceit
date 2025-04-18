import { Component, Input } from '@angular/core';
import { ButtonSimpleCtaComponent } from "../../../utils/button-simple-cta/button-simple-cta.component";
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-what-most',
  imports: [ButtonSimpleCtaComponent, TranslatePipe],
  templateUrl: './what-most.component.html'
})
export class WhatMostComponent {
  @Input() noteText !: string;
  @Input() title !: string;
  @Input() description !: string;
  @Input() footerText !: string;
  @Input() buttonText !: string
}
