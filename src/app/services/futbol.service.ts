import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FutbolService {
  private apiUrl = 'https://v3.football.api-sports.io';
  private apiKey = 'TU_CLAVE_API'; 

  constructor(private http: HttpClient) {}

  obtenerLigas(): Observable<any> {
    const headers = new HttpHeaders({
      'x-apisports-key': this.apiKey,
    });
    return this.http.get(`${this.apiUrl}/leagues`, { headers });
  }
}
