import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFlask, faRobot } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-datascience-simple-section',
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './datascience-simple-section.component.html',
  styleUrl: './datascience-simple-section.component.css'
})
export class DatascienceSimpleSectionComponent {

  // Asigna los íconos a propiedades públicas para enlazarlos en la plantilla
  faFlask = faFlask;
  faRobot = faRobot;
}
