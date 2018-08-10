import { Productos } from './../app/Clases/Productos';
import { Inventario } from './../app/Clases/Inventario';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Rx";

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable()
export class ProductosServices {
  private Url = "http://localhost:8000/productos";
  private ip = "http://localhost:8000/productosP";
  private identity = "http://localhost:8000/productosidentity";
  constructor(private http: HttpClient) { }

  Identity(): Observable<Productos[]> {
    return this.http.get<Productos[]>(this.identity).pipe();
  }
  get(): Observable<Productos[]> {
    return this.http.get<Productos[]>(this.Url).pipe();
  }
  getId(idpersona: string): Observable<Productos[]> { const url = `${this.Url}/${idpersona}`;
    return this.http.get<Productos[]>(url).pipe();
  }
  getProducto(herramienta: string): Observable<Productos[]> { const url = `${this.ip}/${herramienta}`;
    return this.http.get<Productos[]>(url).pipe();
  }
  add(any: string): Observable<Productos> {
    return this.http.post<Productos>(this.Url, any, httpOptions).pipe();
  }
  Update (any: Productos): Observable<any> {
    return this.http.put<Productos>(this.Url, any, httpOptions).pipe();
  }
  Delete(id): Observable<Productos> { const url = `${this.Url}/${id}`;
    return this.http.delete<Productos>(url).pipe();
  }
}