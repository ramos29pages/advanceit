import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-title-mega-menu',
  imports: [FontAwesomeModule, RouterLink, TranslatePipe],
  templateUrl: './title-mega-menu.component.html',
})
export class TitleMegaMenuComponent {

  @Input() title: string = "Hardware Provisioning & IT Asset Management";
  @Input() link : string = "";
  @Input() icon : any = "faServer";
  @Input() color : any;
}
