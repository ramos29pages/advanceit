import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-simple-cta',
  imports: [NgIf],
  templateUrl: './simple-cta.component.html'
})
export class SimpleCtaComponent {

  title = "BECOME AN EARLY ADOPTER OF AI";
  description = `A key goal of Lean Solutions Group is to make our clients'
      experiences easier and more efficient in everything from recruiting
      to operations. That can mean continually upgrading client-facing
      technology platforms, but it can also come from effectively
      deploying AI solutions.`;
  buttonText = "Learn More.."
}
