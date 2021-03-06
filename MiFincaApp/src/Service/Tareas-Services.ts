import { Finca } from './../app/Clases/Finca';
import { Tareas } from './../app/Clases/Tareas';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Rx";

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable()
export class TareasServices {
  private Url = "http://localhost:8000/tareas";
  private UrlTareasid = "http://localhost:8000/tareasempleado";
  constructor(private http: HttpClient) { }

  getFincaTareasId(idpersona: string): Observable<Finca[]> {
    const url = `${this.Url}/${idpersona}`;
    return this.http.get<Finca[]>(url).pipe();
  }
  addTareas(tarea: Tareas): Observable<any> {
    return this.http.post<Tareas>(this.Url, tarea, httpOptions).pipe();
  }
  getTareasId(idpersona: string): Observable<Tareas[]> {
    const url = `${this.UrlTareasid}/${idpersona}`;
    return this.http.get<Tareas[]>(url).pipe();
  }
  Update (tarea: Tareas): Observable<any> {
    return this.http.put<Tareas>(this.Url, tarea, httpOptions).pipe();
  }
}