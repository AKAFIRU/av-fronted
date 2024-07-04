import { HttpClient } from '@angular/common/http';
import { Component , OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-proyect-dialog',
  standalone: true,
  imports: [MatFormField, MatDialogModule, MatLabel, ReactiveFormsModule, MatInputModule, MatButton],
  templateUrl: './proyect-dialog.component.html',
  styleUrl: './proyect-dialog.component.css'
})
export class ProyectDialogComponent implements OnInit{
  docenteForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ProyectDialogComponent>,
    private http: HttpClient
  ) {
    this.docenteForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      codigoInsti: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.docenteForm.valid) {
      const docenteData = this.docenteForm.value;
      this.http.post('https://av-backend-90b745e0b89c.herokuapp.com/estudiantes', docenteData).subscribe(response => {
        console.log('Docente agregado:', response);
        this.dialogRef.close();
      });
    }
  }

}
