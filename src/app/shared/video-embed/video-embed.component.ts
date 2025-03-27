import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-video-embed',
  templateUrl: './video-embed.component.html',
  styleUrls: ['./video-embed.component.css'],
})
export class VideoEmbedComponent {
  // Parámetros personalizables
  @Input() title: string = 'OUR CLIENTS’ EXPERIENCE';
  @Input() description: string = 'Nuestro equipo trabaja para asegurarse de que tengas todo lo necesario para aprovechar tu visita de trabajo.';
  // ID del video de YouTube (lo que va después de ?v=)
  @Input() videoId: string = 'i_lGjqkvhiA';

  // Mostrar o no el iframe
  showVideo = false;

  // URL segura para el iframe
  safeVideoUrl: SafeResourceUrl | null = null;

  constructor(private sanitizer: DomSanitizer) {}

  // Genera la URL de la miniatura en calidad hqdefault (bastante estándar)
  get thumbnailUrl(): string {
    return `https://img.youtube.com/vi/${this.videoId}/hqdefault.jpg`;
  }

  // Al hacer clic en "Play", generamos la URL segura y mostramos el iframe
  onPlayVideo(): void {
    const youtubeUrl = `https://www.youtube.com/embed/${this.videoId}?autoplay=1`;
    this.safeVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(youtubeUrl);
    this.showVideo = true;
  }
}
