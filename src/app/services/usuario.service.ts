import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private usuarios: { nombre: string, email: string, password: string }[] = [];
  private usuarioActual: string | null = null;

  constructor() {
    // ✅ Recuperar usuarios almacenados en localStorage
    const usuariosGuardados = localStorage.getItem('usuarios');
    if (usuariosGuardados) {
      this.usuarios = JSON.parse(usuariosGuardados);
    }

    // ✅ Recuperar usuario actual si hay sesión activa
    this.usuarioActual = localStorage.getItem('usuario');
  }

  registrarUsuario(nombre: string, email: string, password: string): boolean {
    // ✅ Verificar si el email ya está registrado
    const existe = this.usuarios.find(u => u.email === email);
    if (existe) {
      return false;
    }

    // ✅ Guardar nuevo usuario en la lista
    this.usuarios.push({ nombre, email, password });

    // ✅ Almacenar la lista de usuarios en `localStorage`
    localStorage.setItem('usuarios', JSON.stringify(this.usuarios));

    return true;
  }

  iniciarSesion(email: string, password: string): boolean {
    const usuario = this.usuarios.find(u => u.email === email && u.password === password);
    if (usuario) {
      this.usuarioActual = usuario.nombre;

      // ✅ Guardar usuario actual en `localStorage`
      localStorage.setItem('usuario', usuario.nombre);

      return true;
    }
    return false;
  }

  cerrarSesion() {
    this.usuarioActual = null;
    localStorage.removeItem('usuario');  // ✅ Borrar usuario actual
  }

  obtenerUsuarioActual(): string | null {
    return this.usuarioActual;
  }
}
