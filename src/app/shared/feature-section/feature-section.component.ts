import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-feature-section',
  imports: [CommonModule],
  templateUrl: './feature-section.component.html',
  styleUrls: ['./feature-section.component.css']
})
export class FeatureSectionComponent {
  @Input() backgroundImage: string = ''; // Imagen de fondo opcional
  @Input() imageSrc: string = ''; // Imagen principal
  @Input() title: string = ''; // Título
  @Input() description: string = ''; // Descripción
  @Input() features: string[] = []; // Lista de características
  @Input() buttonText: string = ''; // Texto del botón (opcional)
  @Input() buttonLink: string = '#'; // Enlace del botón (opcional)
  @Input() reverse: boolean = false; // Alternar lado de la imagen y texto
}
