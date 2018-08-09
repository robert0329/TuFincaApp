import { Inventario } from './../app/Clases/Inventario';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Rx";

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable()
export class InventarioServices {
  private Url = "http://localhost:8000/Inventario";
  private inventarioherramienta = "http://localhost:8000/InventarioH";
  constructor(private http: HttpClient) { }

  get(): Observable<Inventario[]> {
    return this.http.get<Inventario[]>(this.Url).pipe();
  }
  getId(idpersona: string): Observable<Inventario[]> { const url = `${this.Url}/${idpersona}`;
    return this.http.get<Inventario[]>(url).pipe();
  }
  getHerramienta(herramienta: string): Observable<Inventario[]> { const url = `${this.inventarioherramienta}/${herramienta}`;
    return this.http.get<Inventario[]>(url).pipe();
  }
  add(any: Inventario): Observable<Inventario> {
    return this.http.post<Inventario>(this.Url, any, httpOptions).pipe();
  }
  Update (any: Inventario): Observable<any> {
    return this.http.put<Inventario>(this.Url, any, httpOptions).pipe();
  }
  Delete(id): Observable<Inventario> { const url = `${this.Url}/${id}`;
    return this.http.delete<Inventario>(url).pipe();
  }
}