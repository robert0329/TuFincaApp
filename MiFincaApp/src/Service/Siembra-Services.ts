import { Siembras } from './../app/Clases/Siembras';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Rx";

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable()
export class SiembraServices {
  private Url = "http://localhost:8000/siembras";
  private identity = "http://localhost:8000/siembrasid";
  constructor(private http: HttpClient) { }

  Identity(): Observable<Siembras[]> {
    return this.http.get<Siembras[]>(this.identity).pipe();
  }
  get(): Observable<Siembras[]> {
    return this.http.get<Siembras[]>(this.Url).pipe();
  }
  getId(idsiembra: string): Observable<Siembras[]> { const url = `${this.Url}/${idsiembra}`;
    return this.http.get<Siembras[]>(url).pipe();
  }
  add(any: any): Observable<Siembras> {
    return this.http.post<Siembras>(this.Url, any, httpOptions).pipe();
  }
  Update (any: Siembras): Observable<any> {
    return this.http.put<Siembras>(this.Url, any, httpOptions).pipe();
  }
  Delete(id): Observable<Siembras> { const url = `${this.Url}/${id}`;
    return this.http.delete<Siembras>(url).pipe();
  }
}