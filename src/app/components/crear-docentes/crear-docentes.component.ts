import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { DocenteService } from '../../services/docente.service';
import { MatIcon } from '@angular/material/icon';
import { UserEditionDialogComponent } from '../../dialogs/user-edition-dialog/user-edition-dialog.component';
import { MatDialog, MatDialogModule} from '@angular/material/dialog';

@Component({
  selector: 'app-crear-docentes',
  standalone: true,
  imports: [NgFor,MatCardModule, MatIcon,MatDialogModule],
  templateUrl: './crear-docentes.component.html',
  styleUrl: './crear-docentes.component.css'
})
export class CrearDocentesComponent implements OnInit{
  
  dataFromService: any[] = [];

  constructor(private seccionesService: DocenteService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.seccionesService.getDocentes().subscribe(response => {
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

  openDocenteForm(): void {
    this.dialog.open(UserEditionDialogComponent, {
      width: '400px'
    });
  }

}
