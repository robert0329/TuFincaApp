import { Headers } from '@angular/http';
import { Usuarios } from './../app/Clases/Usuarios';
import { Injectable } from '@angular/core';
import { catchError, tap } from "rxjs/operators";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {Observable} from "rxjs/Rx";
import {of} from "rxjs/observable/of";
import { Http, Response, RequestOptions, URLSearchParams } 
from '@angular/http';

const httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json'})};


@Injectable()
export class UsuarioService {
  //http://localhost:8000/empleados?email={{robert}}
  private Url="http://localhost:8000/empleados";
  private Urlget="http://localhost:8000/empleados/api";
  private Urlgetp="http://localhost:8000/empleados/apip";
  private headers = new Headers({'Content-Type': 'application/json'});
  constructor(private http:  HttpClient) { }
  
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
      catchError(this.handleError<Usuarios>(`getFinca id=${id}`))
    );
  }
  getEmail(email: string): Observable<Usuarios> {
    return this.http.get<Usuarios>(this.Urlget+"/"+email).pipe(
      tap((finca: Usuarios) => this.log(`added Empleado w/ id=${finca.id}`)),
      catchError(this.handleError<Usuarios>('finca')))
  }
  getPassword(password: string): Observable<Usuarios> {
    const url = `${this.Urlgetp}/${password}`;

    return this.http.get<Usuarios>(url).pipe(
      catchError(this.handleError<Usuarios>(`password=${password}`))
    );
  }
  addEmpleado (finca: Usuarios): Observable<any> {
    return this.http.post<Usuarios>(this.Url, finca, httpOptions).pipe(
      tap((finca: Usuarios) => this.log(`added Empleado w/ id=${finca.id}`)),
      catchError(this.handleError<Usuarios>('finca'))
    );
  }

AddUpdate (finca: Usuarios): Observable<any> {
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
  private handleError<T> (operation = 'operation', result?: T) {
    
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };

  }

  private log(message: string) {
    console.log('FincaService: ' + message);
  }
}





