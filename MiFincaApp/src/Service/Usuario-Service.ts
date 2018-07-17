import { Usuarios } from './../app/Clases/Usuarios';
import { Injectable } from '@angular/core';
import { catchError, tap } from "rxjs/operators";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Rx";
import { of } from "rxjs/observable/of";

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable()
export class UsuarioService {
  private Url = "http://localhost:8000/personas";
  private Urlget = "http://localhost:8000/personas/api";
  private UrlTareas = "http://localhost:8000/personas/tareas";
  private Urlgetp = "http://localhost:8000/personas/apip";
  constructor(private http: HttpClient) { }

  getempleado(): Observable<Usuarios[]> {
    return this.http.get<Usuarios[]>(this.Url).pipe();
  }
  getempleadoTareas(tipo: string): Observable<Usuarios[]> {
    const url = `${this.UrlTareas}/${tipo}`;
    return this.http.get<Usuarios[]>(url).pipe();
  }
  getFincas(id: number): Observable<Usuarios> {
    const url = `${this.Url}/${id}`;
    return this.http.get<Usuarios>(url).pipe();
  }
  getEmail(email: string): Observable<Usuarios> {
    const url = `${this.Urlget}/${email}`;
    return this.http.get<Usuarios>(url).pipe()
  }
  getUsers(email:string) {
    return this.http.get(this.Urlget+"/"+email);
  }
  
  getPassword(email: string): Observable<Usuarios> {
    const url = `${this.Urlgetp}/${email}`;
    return this.http.get<Usuarios>(url).pipe();
  }
  addEmpleado(persona: Usuarios): Observable<any> {
    console.log(persona);
    return this.http.post<Usuarios>(this.Url, persona, httpOptions).pipe();
  }
  AddUpdate(finca: Usuarios): Observable<any> {
    return this.http.put<Usuarios>(this.Url, finca, httpOptions).pipe();
  }
  getDelete(id): Observable<Usuarios> {
    const url = `${this.Url}/${id}`;
    return this.http.delete<Usuarios>(url).pipe();
  }
  private handleError<T>(operation = 'operation', result?: T) {

    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };

  }
  private log(message: string) {
    console.log('Usuario: ' + message);
  }
}