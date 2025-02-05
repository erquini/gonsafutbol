import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../interfaces/producto';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  standalone: false,
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent {
  producto: Producto | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productoService: ProductoService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.producto = this.productoService.getProductos().find(p => p.id === id);
  }

  agregarAlCarrito() {
    alert(`✅ ${this.producto?.nombre} añadido al carrito.`);
    // Aquí se podría integrar un servicio de carrito para almacenar los productos
  }

  volver() {
    this.router.navigate(['/tienda']);
  }
}
