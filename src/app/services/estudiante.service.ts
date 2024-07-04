import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  private apiUrl = 'https://av-backend-90b745e0b89c.herokuapp.com/estudiantes'
  constructor(private http: HttpClient) { }
  
  getEstudiantes(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
