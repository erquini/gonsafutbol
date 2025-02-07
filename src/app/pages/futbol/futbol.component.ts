import { Component, OnInit } from '@angular/core';
import { FutbolService } from '../../services/futbol.service';

@Component({
  selector: 'app-futbol',
  templateUrl: './futbol.component.html',
  standalone: false,
  styleUrls: ['./futbol.component.css'],
})
export class FutbolComponent implements OnInit {
  ligas: any[] = [];

  constructor(private futbolService: FutbolService) {}

  ngOnInit(): void {
    this.futbolService.obtenerLigas().subscribe(
      (datos) => {
        this.ligas = datos.response;
      },
      (error) => {
        console.error('Error al obtener las ligas:', error);
      }
    );
  }
}
