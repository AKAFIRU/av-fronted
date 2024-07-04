import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { EstudianteService } from '../../services/estudiante.service';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-crear-estudiantes',
  standalone: true,
  imports: [NgFor,MatCardModule, MatIcon],
  templateUrl: './crear-estudiantes.component.html',
  styleUrl: './crear-estudiantes.component.css'
})
export class CrearEstudiantesComponent implements OnInit{
  
  dataFromService: any[] = [];

  constructor(private seccionesService: EstudianteService) { }

  ngOnInit(): void {
    this.seccionesService.getEstudiantes().subscribe(response => {
      if (response.success) {
        this.dataFromService = response.data.content.map((item: any) => ({
          seccion_id: item.id,
          nombre_seccion: item.nombre + ' ' + item.apellido,
          cod_curso: item.codigoInsti,
          curso_nombre: item.correo,
        }));
      }
    });
  }
}
