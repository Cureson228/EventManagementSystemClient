import { Component } from '@angular/core';
import { HomeGuestComponent } from "./home-guest/home-guest.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeGuestComponent],
  templateUrl: './home.component.html',
  styles: ``
})
export class HomeComponent {

}
