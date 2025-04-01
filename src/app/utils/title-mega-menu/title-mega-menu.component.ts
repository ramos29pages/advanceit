import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-title-mega-menu',
  imports: [FontAwesomeModule],
  templateUrl: './title-mega-menu.component.html',
})
export class TitleMegaMenuComponent {

  @Input() title: string = "Hardware Provisioning & IT Asset Management";
  @Input() icon : any;
  @Input() color : any;
}
