import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EntregableService {

  private apiUrl = 'https://av-backend-90b745e0b89c.herokuapp.com/entregables'; // Cambia la URL según tu configuración

  constructor(private http: HttpClient) { }

  getEntregablesByProyecto(): Observable<any>{
    return this.http.get<any>(this.apiUrl + '/por-proyecto/1');
  }
}
