import { Component } from '@angular/core';
import { ButtonSimpleCtaComponent } from "../../../utils/button-simple-cta/button-simple-cta.component";
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-social-impact',
  imports: [ButtonSimpleCtaComponent, TranslatePipe],
  templateUrl: './social-impact.component.html',
})
export class SocialImpactComponent {
  imageURL = 'https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
}
