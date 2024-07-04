import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { SeccionService } from '../../services/seccion.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule, NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  
  dataFromService: any[] = [];

  constructor(private seccionesService: SeccionService) { }

  ngOnInit(): void {
    this.seccionesService.getSeccionesDocente().subscribe(response => {
      if (response.success) {
        this.dataFromService = response.data.content.map((item: any) => ({
          seccion_id: item.id,
          nombre_seccion: item.secNombre,
          cod_curso: item.curso.id,
          curso_nombre: item.curso.cursoNombre,
          docente_nombre: `${item.docente.nombre} ${item.docente.apellido}`,
          docente_correo: item.docente.correo,
        }));
      }
    });
  }
}
