import { Usuarios } from './../app/Clases/Usuarios';
import { Injectable } from '@angular/core';
import { catchError, tap } from "rxjs/operators";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Rx";
import { of } from "rxjs/observable/of";

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable()
export class UsuarioService {
  private Url = "http://localhost:8000/empleados";
  private Urlget = "http://localhost:8000/empleados/api";
  private Urlgetp = "http://localhost:8000/empleados/apip";
  constructor(private http: HttpClient) { }

  getFinca(): Observable<Usuarios[]> {
    return this.http.get<Usuarios[]>(this.Url)
      .pipe(
        tap(heroes => this.log('fetched Finca')),
        catchError(this.handleError('getFinca', []))
      );
  }
  getFincas(id: number): Observable<Usuarios> {
    const url = `${this.Url}/${id}`;
    return this.http.get<Usuarios>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Usuarios>(''))
    );
  }
  getEmail(email: string): Observable<Usuarios> {
    const url = `${this.Urlget}/${email}`;
    return this.http.get<Usuarios>(url).pipe()
  }
  getUsers(email:string) {
    return this.http.get(this.Urlget+"/"+email);
  }
  
  getPassword(password: string): Observable<Usuarios> {
    const url = `${this.Urlgetp}/${password}`;
    return this.http.get<Usuarios>(url).pipe();
  }
  addEmpleado(finca: Usuarios): Observable<any> {
    return this.http.post<Usuarios>(this.Url, finca, httpOptions).pipe(
      tap((finca: Usuarios) => this.log(`added Empleado w/ id=${finca.id}`)),
      catchError(this.handleError<Usuarios>('finca'))
    );
  }
  AddUpdate(finca: Usuarios): Observable<any> {
    return this.http.put<Usuarios>(this.Url, finca, httpOptions).pipe(
      tap((finca: Usuarios) => this.log(`added Finca w/ id=${finca.id}`)),
      catchError(this.handleError<Usuarios>('finca'))
    );
  }
  getDelete(id): Observable<Usuarios> {
    const url = `${this.Url}/${id}`;
    return this.http.delete<Usuarios>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Usuarios>(`Delete id=${id}`))
    );
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