import {Component, inject} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import { ProyectDialogComponent } from '../../dialogs/proyect-dialog/proyect-dialog.component';


@Component({
  selector: 'app-registros-proyecto',
  standalone: true,
  imports: [MatButtonModule,MatIconModule],
  templateUrl: './registros-proyecto.component.html',
  styleUrl: './registros-proyecto.component.css'
})
export class RegistrosProyectoComponent {
  
  readonly dialog = inject(MatDialog);

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(ProyectDialogComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }


}

