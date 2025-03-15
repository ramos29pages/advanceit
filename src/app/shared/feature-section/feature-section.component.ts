import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-feature-section',
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './feature-section.component.html',
  styleUrls: ['./feature-section.component.css']
})
export class FeatureSectionComponent {

  faCheck = faCheck;
  @Input() backgroundImage: string = ''; // Imagen de fondo opcional
  @Input() imageSrc: string = ''; // Imagen principal
  @Input() title: string = ''; // Título
  @Input() description: string = ''; // Descripción
  @Input() features: string[] = []; // Lista de características
  @Input() buttonText: string = ''; // Texto del botón (opcional)
  @Input() buttonLink: string = '#'; // Enlace del botón (opcional)
  @Input() reverse: boolean = false; // Alternar lado de la imagen y texto
  @Input() note: boolean = false; // Nota al inicio del componente
}
