import { Component, Input } from '@angular/core';
import { HeroHeaderComponent } from '../../../components/hero-header/hero-header.component';
import { CommonModule } from '@angular/common';
import { TeamGridComponent } from '../../../components/team-grid/team-grid.component';
import { FooterComponent } from '../../../components/footer/footer.component';

@Component({
  selector: 'app-equipo-ventas',
  imports: [HeroHeaderComponent, CommonModule, TeamGridComponent, FooterComponent],
  templateUrl: './equipo-ventas.component.html',
  styles: [`
    /* Clase para texto con solo contorno (outline) */
    .outline-text {
      color: transparent;
      -webkit-text-stroke: 1px #ff0040; /* grosor y color del contorno (ej. rojo) */
      text-stroke: 1px #ff0040;
      font-style: italic;    /* para navegadores que lo soporten */
    }
    /* Fallback en Firefox (opcional):
       color: rgba(255,0,64,0.05);
       para que no quede invisible */
  `]
})
export class EquipoVentasComponent {
  /** Título en el centro */
  @Input() title: string = 'GET TO KNOW US';

  /** URL de la imagen de fondo */
  @Input() backgroundImage: string =
    'https://cdn.prod.website-files.com/636a549426aa8438b3b45fa8/6372587c9ba56f0e66ea0544_section-bg1.svg';

  teamMembers: any[] = [
    {
      name: 'Jack Freker',
      position: 'CEO',
      image:
        'https://cdn.prod.website-files.com/638a2705bc615a1ffb3bf928/669ab98a302b0d881caea22e_LeanSolutionsGroup_2024_JackFrekerPhoto_FA.jpg',
    },
    {
      name: 'Robert Cadena',
      position: 'Executive Chairman and Co-Founder of Lean Solutions Group',
      image: 'assets/team/robert-cadena.jpg',
    },
    {
      name: 'Mario Farcic',
      position: 'CFO',
      image: 'assets/team/mario-farcic.jpg',
    },
    {
      name: 'Jeff Aldaz',
      position: 'COO',
      image: 'assets/team/jeff-aldaz.jpg',
    },
  ];
}
