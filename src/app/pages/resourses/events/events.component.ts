import { Component } from '@angular/core';
import { HeroHeaderComponent } from "../../../components/hero-header/hero-header.component";
import { EventCalendarComponent } from "../../../components/resources/event-calendar/event-calendar.component";
import { FooterComponent } from "../../../components/footer/footer.component";

@Component({
  selector: 'app-events',
  imports: [HeroHeaderComponent, EventCalendarComponent, FooterComponent],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent {

}
