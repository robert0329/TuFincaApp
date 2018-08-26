import { Cosecha } from './../app/Clases/Cosecha';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Rx";
import { Gasto } from '../app/Clases/gasto';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable()
export class GastoService {
  private Url = "http://localhost:8000/gasto";
  constructor(private http: HttpClient) { }

  get(): Observable<Gasto[]> {
    return this.http.get<Gasto[]>(this.Url).pipe();
  }
  getId(idgasto: string): Observable<Gasto[]> { const url = `${this.Url}/${idgasto}`;
    return this.http.get<Gasto[]>(url).pipe();
  }
  add(any: Gasto): Observable<Gasto> {
    return this.http.post<Gasto>(this.Url, any, httpOptions).pipe();
  }
  Update (any: Gasto): Observable<any> {

    return this.http.put<Gasto>(this.Url, any, httpOptions).pipe();
  }
  Delete(id): Observable<Gasto> { const url = `${this.Url}/${id}`;
    return this.http.delete<Gasto>(url).pipe();
  }
}