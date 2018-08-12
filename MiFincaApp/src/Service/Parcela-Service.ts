import { Parcela } from './../app/Clases/Parcela';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Rx";

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable()
export class ParcelasServices {
  private Url = "http://localhost:8000/parcela";
  constructor(private http: HttpClient) { }

  get(): Observable<Parcela[]> {
    return this.http.get<Parcela[]>(this.Url).pipe();
  }
  getId(idpersona: string): Observable<Parcela[]> { const url = `${this.Url}/${idpersona}`;
    return this.http.get<Parcela[]>(url).pipe();
  }
  add(any: Parcela): Observable<Parcela> {
    return this.http.post<Parcela>(this.Url, any, httpOptions).pipe();
  }
  Update (any: Parcela): Observable<any> {
    console.log(any);
    return this.http.put<Parcela>(this.Url, any, httpOptions).pipe();
  }
  Delete(id): Observable<Parcela> { const url = `${this.Url}/${id}`;
    return this.http.delete<Parcela>(url).pipe();
  }
}