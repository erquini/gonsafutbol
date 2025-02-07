import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private carrito: Producto[] = [];

  constructor() {
    const carritoGuardado = localStorage.getItem('carrito');
    this.carrito = carritoGuardado ? JSON.parse(carritoGuardado) : [];
  }

  private guardarEnLocalStorage() {
    localStorage.setItem('carrito', JSON.stringify(this.carrito));
  }

  agregarProducto(producto: Producto) {
    this.carrito.push(producto);
    this.guardarEnLocalStorage();
  }

  getCarrito(): Producto[] {
    return this.carrito;
  }

  eliminarProducto(index: number) {
    this.carrito.splice(index, 1);
    this.guardarEnLocalStorage();
  }

  vaciarCarrito() {
    this.carrito = [];
    localStorage.removeItem('carrito');
  }
}
