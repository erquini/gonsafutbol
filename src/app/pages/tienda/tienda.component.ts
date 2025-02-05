import { Component } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../interfaces/producto';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  standalone: false,
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent {
  productos: Producto[] = [];
  filtroEquipo: string = '';
  filtroTemporada: string = '';

  constructor(private productoService: ProductoService) {}

  ngOnInit() {
    this.productos = this.productoService.getProductos();
  }

  productosFiltrados(): Producto[] {
    return this.productos.filter(producto => 
      producto.equipo.toLowerCase().includes(this.filtroEquipo.toLowerCase()) &&
      producto.temporada.includes(this.filtroTemporada)
    );
  }
}
