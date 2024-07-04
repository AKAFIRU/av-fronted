import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocenteService {

  private apiUrl = 'https://av-backend-90b745e0b89c.herokuapp.com/docentes'
  constructor(private http: HttpClient) { }
  
  getDocentes(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
