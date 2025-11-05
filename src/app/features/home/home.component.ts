import { Component } from '@angular/core';
import { EventsDisplayComponent } from '../../shared/components/events-display/events-display.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [EventsDisplayComponent],
  templateUrl: './home.component.html',
  styles: ``
})
export class HomeComponent {

}
