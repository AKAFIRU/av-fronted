import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-proyecto-dialog',
  standalone: true,
  imports: [MatFormField, MatDialogModule, MatLabel, ReactiveFormsModule, MatInputModule, MatButton, MatDatepickerModule],
  providers: [provideNativeDateAdapter()],
  templateUrl: './proyecto-dialog.component.html',
  styleUrl: './proyecto-dialog.component.css'
})
export class ProyectoDialogComponent implements OnInit{
  docenteForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ProyectoDialogComponent>,
    private http: HttpClient
  ) {
    this.docenteForm = this.fb.group({
      proyectoNombre: ['', Validators.required],
      fechaFinali: [null, Validators.required],
      fechaCreacion: [null, Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.docenteForm.valid) {
      const docenteData = this.docenteForm.value;
      this.http.post('https://av-backend-90b745e0b89c.herokuapp.com/proyectos', docenteData).subscribe(response => {
        console.log('Docente agregado:', response);
        this.dialogRef.close();
      });
    }
  }

}
