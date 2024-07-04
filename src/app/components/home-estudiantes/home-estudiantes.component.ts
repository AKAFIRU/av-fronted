import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { SeccionService } from '../../services/seccion.service';
import { NgFor } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-estudiantes',
  standalone: true,
  imports: [MatCardModule, NgFor, RouterModule],
  templateUrl: './home-estudiantes.component.html',
  styleUrl: './home-estudiantes.component.css'
})
export class HomeEstudiantesComponent implements OnInit{
  
  dataFromService: any[] = [];

  constructor(private seccionesService: SeccionService, private router: Router) { }

  ngOnInit(): void {
    this.seccionesService.getSeccionesEstudiante().subscribe(response => {
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

  handleCardClick(seccionId: string) {
    console.log('Se hizo clic en la tarjeta con ID de sección:', seccionId);
    // Aquí puedes llamar a otra función o realizar la lógica que necesites con seccionId

    this.router.navigate(['/seccion-est']); 
  }
}
