import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeccionService {

  private apiUrl = 'https://av-backend-90b745e0b89c.herokuapp.com/seccion'
  constructor(private http: HttpClient) { }
  
  getSeccionesEstudiante(): Observable<any> {
    return this.http.get<any>(this.apiUrl + '/estudiante/1');
  }
  getSeccionesDocente(): Observable<any> {
    return this.http.get<any>(this.apiUrl + '/1');
  }
}
