import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-categories-inicio',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './categories-inicio.component.html',
})
export class CategoriesInicioComponent {

}
