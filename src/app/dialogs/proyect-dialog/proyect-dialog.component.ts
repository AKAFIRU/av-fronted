import { Component , OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-proyect-dialog',
  standalone: true,
  imports: [MatFormFieldModule],
  templateUrl: './proyect-dialog.component.html',
  styleUrl: './proyect-dialog.component.css'
})
export class ProyectDialogComponent {

}
