import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonSimpleCtaComponent } from "../../../utils/button-simple-cta/button-simple-cta.component";

@Component({
  selector: 'app-what-most',
  imports: [NgIf, RouterLink, ButtonSimpleCtaComponent],
  templateUrl: './what-most.component.html'
})
export class WhatMostComponent {
  @Input() noteText !: string;
  @Input() title !: string;
  @Input() description !: string;
  @Input() footerText !: string;
  @Input() buttonText !: string
}
