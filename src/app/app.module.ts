import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// ✅ Importamos el componente principal
import { AppComponent } from './app.component';

// ✅ Importamos las páginas con standalone: false
import { HomeComponent } from './pages/home/home.component';
import { TiendaComponent } from './pages/tienda/tienda.component';
import { DetalleProductoComponent } from './pages/detalle-producto/detalle-producto.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { PagoComponent } from './pages/pago/pago.component';  // ✅ IMPORTANTE: Agregar PagoComponent aquí

// ✅ Importamos los componentes de navbar y footer
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    TiendaComponent,
    DetalleProductoComponent,
    CarritoComponent,
    ContactoComponent,
    PagoComponent  // ✅ Agregado para evitar errores con FormsModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    CommonModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
