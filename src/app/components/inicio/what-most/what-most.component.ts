import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-what-most',
  imports: [NgIf, RouterLink],
  templateUrl: './what-most.component.html'
})
export class WhatMostComponent {
  @Input() noteText !: string;
  @Input() title !: string;
  @Input() description !: string;
  @Input() footerText !: string;
  @Input() buttonText !: string
}
