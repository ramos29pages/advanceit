import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TeamFormLiteComponent } from "../../components/team-form-lite/team-form-lite.component";

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [FormsModule, TeamFormLiteComponent],
  template: `
    <app-team-form-lite imageURL="logo.png" [orange]="true"></app-team-form-lite>>
  `,
  styles: [
    `
      .hero-sectionS {
        background: radial-gradient(circle at center, white 40%, #f3e8ff 60%);
        min-height: calc(100vh - 64px);
        position: relative;
        overflow: hidden;
      }
    `,
  ],
})
export class ContactoComponent {
  nombre: string = '';
  email: string = '';
  mensaje: string = '';


}
