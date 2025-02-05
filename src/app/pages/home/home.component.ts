import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: false,  // ✅ Asegura que no sea standalone
  styleUrls: ['./home.component.css']
})
export class HomeComponent {}
