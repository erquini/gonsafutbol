import { Component } from '@angular/core';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  standalone: false,  // ✅ Asegura que no sea standalone
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {}
