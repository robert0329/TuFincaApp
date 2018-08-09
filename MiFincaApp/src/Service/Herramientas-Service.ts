import { Herramientas } from './../app/Clases/Herramientas';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Rx";

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable()
export class HerramientasServices {
  private Url = "http://localhost:8000/herramientas";
  private identity = "http://localhost:8000/herramientasidentity";
  private getHerramientas = "http://localhost:8000/getherramientas";
  private Herramientas = "http://localhost:8000/herramienta";
  constructor(private http: HttpClient) { }

  Identity(): Observable<Herramientas[]> {
    return this.http.get<Herramientas[]>(this.identity).pipe();
  }
  get(): Observable<any[]> {
    return this.http.get<Herramientas[]>(this.Url).pipe();
  }
  getId(idpersona: string): Observable<Herramientas[]> { const url = `${this.Url}/${idpersona}`;
    return this.http.get<Herramientas[]>(url).pipe();
  }
  getherra(herramienta: string): Observable<Herramientas[]> { const url = `${this.Herramientas}/${herramienta}`;
    return this.http.get<Herramientas[]>(url).pipe();
  }
  getHerramienta(herramienta: Herramientas): Observable<Herramientas[]> { 
    const url = `${this.getHerramientas}/${herramienta.herramientas}`;
    return this.http.get<Herramientas[]>(url).pipe();
  }
  add(any: Herramientas): Observable<Herramientas> {
    return this.http.post<Herramientas>(this.Url, any, httpOptions).pipe();
  }
  Update (any: Herramientas): Observable<any> {
    return this.http.put<Herramientas>(this.Url, any, httpOptions).pipe();
  }
  Delete(id): Observable<Herramientas> { const url = `${this.Url}/${id}`;
    return this.http.delete<Herramientas>(url).pipe();
  }
}