import { Component } from '@angular/core';
import { HeroHeaderComponent } from '../../../components/hero-header/hero-header.component';
import { FooterComponent } from '../../../components/footer/footer.component';

@Component({
  selector: 'app-noticias-empresa',
  imports: [HeroHeaderComponent, FooterComponent],
  templateUrl: './noticias-empresa.component.html',
  styleUrl: './noticias-empresa.component.css'
})
export class NoticiasEmpresaComponent {

}
