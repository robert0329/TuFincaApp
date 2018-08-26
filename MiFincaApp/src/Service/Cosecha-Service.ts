import { Cosecha } from './../app/Clases/Cosecha';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Rx";

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable()
export class CosechaService {
  private Url = "http://localhost:8000/cosecha";
  constructor(private http: HttpClient) { }

  get(): Observable<Cosecha[]> {
    return this.http.get<Cosecha[]>(this.Url).pipe();
  }
  getId(idcosecha: string): Observable<Cosecha[]> { const url = `${this.Url}/${idcosecha}`;
    return this.http.get<Cosecha[]>(url).pipe();
  }
  add(any: Cosecha): Observable<Cosecha> {
    return this.http.post<Cosecha>(this.Url, any, httpOptions).pipe();
  }
  Update (any: Cosecha): Observable<any> {

    return this.http.put<Cosecha>(this.Url, any, httpOptions).pipe();
  }
  Delete(id): Observable<Cosecha> { const url = `${this.Url}/${id}`;
    return this.http.delete<Cosecha>(url).pipe();
  }
}