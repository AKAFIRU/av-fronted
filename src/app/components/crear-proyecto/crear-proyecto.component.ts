import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ProyectoService } from '../../services/proyecto.service';
import { NgFor } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { ProyectoDialogComponent } from '../../dialogs/proyecto-dialog/proyecto-dialog.component';

@Component({
  selector: 'app-crear-proyecto',
  standalone: true,
  imports: [NgFor,MatCardModule, MatIcon, MatDialogModule],
  templateUrl: './crear-proyecto.component.html',
  styleUrl: './crear-proyecto.component.css'
})
export class CrearProyectoComponent implements OnInit{
  
  dataFromService: any[] = [];

  constructor(private seccionesService: ProyectoService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.seccionesService.getProyectos().subscribe(response => {
      if (response.success) {
        this.dataFromService = response.data.content.map((item: any) => ({
          seccion_id: item.id,
          nombre_seccion: item.proyectoNombre,
          cod_curso: item.fechaFinali,
          curso_nombre: item.fechaCreacion,
        }));
      }
    });
  }

  openDocenteForm(): void {
    this.dialog.open(ProyectoDialogComponent, {
      width: '400px'
    });
  }

}