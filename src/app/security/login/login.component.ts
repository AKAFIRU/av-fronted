import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatCardModule,MatFormFieldModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  loginForm: FormGroup;

  constructor(private fb: FormBuilder,
    private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
ngOnInit(): void {
  
}
onSubmit(): void {
  this.router.navigate(["user-management"]);
  } 
  
}
