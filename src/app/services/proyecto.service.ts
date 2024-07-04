import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../Interfaces/Proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  
  private apiUrl = 'https://av-backend-90b745e0b89c.herokuapp.com/proyectos'; // Cambia la URL según tu configuración

  constructor(private http: HttpClient) { }

  createProyecto(proyecto: Proyecto): Observable<Proyecto> {
    return this.http.post<Proyecto>(this.apiUrl, proyecto);
  }

  getProyectosBySeccion(): Observable<any>{
    return this.http.get<any>(this.apiUrl + '/por-seccion/1');
  }

  getProyectos(): Observable<any>{
    return this.http.get<any>(this.apiUrl);
  }
}
