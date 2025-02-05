import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private productos: Producto[] = [
    {
      id: 1,
      nombre: 'Camiseta Maldini 2006/2007',
      equipo: 'AC Milan',
      temporada: '2006/2007',
      precio: 79.99,
      imagen: 'assets/maldini.jpg',
      descripcion: 'Camiseta legendaria de Maldini en la temporada 2006/2007.'
    },
    {
      id: 2,
      nombre: 'Camiseta Maradona 1986',
      equipo: 'Argentina',
      temporada: '1986',
      precio: 99.99,
      imagen: 'assets/maradona.jpg',
      descripcion: 'Camiseta icónica de Maradona en el mundial de 1986.'
    }
  ];

  constructor() {}

  getProductos(): Producto[] {
    return this.productos;
  }
}
