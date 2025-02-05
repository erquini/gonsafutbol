import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,  // ✅ Asegura que no sea standalone
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gonsa-futbol';
}
