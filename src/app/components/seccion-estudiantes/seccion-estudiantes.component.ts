import { Component, OnInit } from '@angular/core';
import { ProyectoService } from '../../services/proyecto.service';
import { NgFor } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { EntregableService } from '../../services/entregable.service';
import { MatIcon } from '@angular/material/icon';
import { NgStyle } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-seccion-estudiantes',
  standalone: true,
  imports: [NgFor, MatCardModule, MatExpansionModule,MatIcon, NgStyle,MatButtonModule],
  templateUrl: './seccion-estudiantes.component.html',
  styleUrl: './seccion-estudiantes.component.css'
})
export class SeccionEstudiantesComponent implements OnInit{
  
  dataFromService: any[] = [];


  constructor(private proyectoService: ProyectoService, private entregableService: EntregableService) { }

  ngOnInit(): void {
    this.proyectoService.getProyectosBySeccion().subscribe(response => {
      if (response.success) {
        this.dataFromService = response.data.content.map((item: any) => ({
          proyecto_id: item.id,
          nombre_proyecto: item.proyectoNombre,
          fecha_limite: item.fechaFinali
        }));
      }
    });
  }

  loadEntregables(proyectoId: number): void {
    this.entregableService.getEntregablesByProyecto().subscribe(response => {
      if (response.success) {
        const project = this.dataFromService.find(p => p.proyecto_id === proyectoId);
        if (project) {
          project.entregables = response.data.content.map((entregable: any) => ({
            fechaLimite: entregable.fechaLimite 
          }));
        }
      }
    });
  }
  getIconColor(fechaLimite: Date): string {
    const today = new Date();
    const limite = new Date(fechaLimite);
    const diffInTime = limite.getTime() - today.getTime();
    const diffInDays = diffInTime / (1000 * 3600 * 24);
    return diffInDays > 7 ? 'green' : 'red';
  }
}
