import { Cultivos } from './../app/Clases/Cultivos';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Rx";

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable()
export class CultivosServices {
  private Url = "http://localhost:8000/frutos";
  constructor(private http: HttpClient) { }

  get(): Observable<Cultivos[]> {
    return this.http.get<Cultivos[]>(this.Url).pipe();
  }
  getId(idpersona: string): Observable<Cultivos[]> { const url = `${this.Url}/${idpersona}`;
    return this.http.get<Cultivos[]>(url).pipe();
  }
  add(any: Cultivos): Observable<Cultivos> {
    return this.http.post<Cultivos>(this.Url, any, httpOptions).pipe();
  }
  Update (any: Cultivos): Observable<any> {

    return this.http.put<Cultivos>(this.Url, any, httpOptions).pipe();
  }
  Delete(id): Observable<Cultivos> { const url = `${this.Url}/${id}`;
    return this.http.delete<Cultivos>(url).pipe();
  }
}