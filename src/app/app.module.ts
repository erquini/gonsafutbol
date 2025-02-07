import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; // ✅ Importamos HttpClientModule para la API

// ✅ Importamos el componente principal
import { AppComponent } from './app.component';

// ✅ Importamos las páginas
import { HomeComponent } from './pages/home/home.component';
import { TiendaComponent } from './pages/tienda/tienda.component';
import { DetalleProductoComponent } from './pages/detalle-producto/detalle-producto.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { PagoComponent } from './pages/pago/pago.component';
import { FutbolComponent } from './pages/futbol/futbol.component'; // ✅ Nueva página de API de fútbol

// ✅ Importamos los componentes de navbar y footer
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

// ✅ Importamos las páginas de usuario
import { RegistroComponent } from './pages/registro/registro.component';
import { LoginComponent } from './pages/login/login.component';

// ✅ Importamos los servicios
import { FutbolService } from './services/futbol.service'; // ✅ Servicio para la API de fútbol

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
    PagoComponent,
    RegistroComponent,
    LoginComponent,
    FutbolComponent // ✅ Agregado para mostrar la API de fútbol
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    CommonModule,  // ✅ Asegura que `*ngFor` funcione
    FormsModule,
    HttpClientModule // ✅ Necesario para consumir APIs con HttpClient
  ],
  providers: [FutbolService], // ✅ Agregado el servicio de la API
  bootstrap: [AppComponent]
})
export class AppModule { }
