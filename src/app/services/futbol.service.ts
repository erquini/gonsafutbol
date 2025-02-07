import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FutbolService {
  private apiUrl = 'https://v3.football.api-sports.io';  // URL de la API
  private apiKey = 'e7c3ef97cd7b8dc53b7d4382b9835465';  // Tu clave API

  constructor(private http: HttpClient) {}

  // ✅ Método corregido: Obtener la lista de ligas
  getLigas(): Observable<any> {
    const headers = new HttpHeaders({
      'x-apisports-key': this.apiKey  // Header con la clave API
    });

    return this.http.get<any>(`${this.apiUrl}/leagues`, { headers });
  }

  // ✅ Obtener información de un equipo específico
  getEquipo(idEquipo: number): Observable<any> {
    const headers = new HttpHeaders({
      'x-apisports-key': this.apiKey
    });

    return this.http.get<any>(`${this.apiUrl}/teams?id=${idEquipo}`, { headers });
  }
}
