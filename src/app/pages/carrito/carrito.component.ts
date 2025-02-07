import { Component } from '@angular/core';
import { CarritoService } from '../../services/carrito.service';
import { Producto } from '../../interfaces/producto';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  standalone: false,
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {
  carrito: Producto[] = [];

  constructor(private carritoService: CarritoService) {}

  ngOnInit() {
    this.carrito = this.carritoService.getCarrito();
  }

  eliminarProducto(index: number) {
    this.carritoService.eliminarProducto(index);
  }

  vaciarCarrito() {
    this.carritoService.vaciarCarrito();
  }
}
