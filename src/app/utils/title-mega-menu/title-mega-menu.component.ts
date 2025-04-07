import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-title-mega-menu',
  imports: [FontAwesomeModule, RouterLink],
  templateUrl: './title-mega-menu.component.html',
})
export class TitleMegaMenuComponent {

  @Input() title: string = "Hardware Provisioning & IT Asset Management";
  @Input() link : string = "";
  @Input() icon : any = "faServer";
  @Input() color : any;
}
