import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private productos: Producto[] = [
    {
      id: 1,
      nombre: 'Camiseta de Maldini 2006/2007',
      equipo: 'AC Milan',
      temporada: '2006/07',
      imagen: 'assets/images/camiesta-maldini.jpg',
      precio: 59.99,
      descripcion: 'Camiseta icónica de Maldini en la temporada 2006/07.'
    },
    {
      id: 2,
      nombre: 'Camiseta de Maradona 1986',
      equipo: 'Argentina',
      temporada: '1986',
      imagen: 'assets/images/camiseta_maradadona_futbol.jpg',
      precio: 69.99,
      descripcion: 'Camiseta legendaria de Maradona en el Mundial de 1986.'
    },
    {
      id: 3,
      nombre: 'Camiseta de Ronaldo 2002',
      equipo: 'Brasil',
      temporada: '2002',
      imagen: 'assets/images/camiseta-ronaldo.jpg',
      precio: 65.99,
      descripcion: 'Camiseta con la que Ronaldo llevó a Brasil a la victoria en 2002.'
    },
    {
      id: 4,
      nombre: 'Camiseta de Messi 2010',
      equipo: 'Argentina',
      temporada: '2010',
      imagen: 'assets/images/camiseta-messi.jpg',
      precio: 74.99,
      descripcion: 'Camiseta de Messi en el Mundial de Sudáfrica 2010.'
    },
    {
      id: 5,
      nombre: 'Camiseta de Zidane 1998',
      equipo: 'Francia',
      temporada: '1998',
      imagen: 'assets/images/camiseta-zidane.jpg',
      precio: 79.99,
      descripcion: 'Camiseta de Zidane en la Copa del Mundo 1998.'
    },
    {
      id: 6,
      nombre: 'Camiseta de Ronaldinho 2005',
      equipo: 'FC Barcelona',
      temporada: '2005/06',
      imagen: 'assets/images/camiseta-ronaldinho.jpg',
      precio: 69.99,
      descripcion: 'Camiseta con la que Ronaldinho ganó el Balón de Oro en 2005.'
    }
  ];

  getProductos(): Producto[] {
    return this.productos;
  }

  getProductoById(id: number): Producto | undefined {
    return this.productos.find(p => p.id === id);
  }
}