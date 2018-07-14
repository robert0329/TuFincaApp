
import { Finca } from './../app/Clases/Finca';
import { Injectable } from '@angular/core';
import { catchError, tap } from "rxjs/operators";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {Observable} from "rxjs/Rx";
import {of} from "rxjs/observable/of";
const httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json'})};


@Injectable()
export class FincaService {

  private FincaUrl="http://localhost:8000/finca";
  constructor(private http:  HttpClient) { }
  
  getFinca(): Observable<Finca[]> {

    return this.http.get<Finca[]>(this.FincaUrl)
      .pipe(
        tap(heroes => this.log('fetched Finca')),
        catchError(this.handleError('getFinca', []))
      );
  }
  getFincas(id: number): Observable<Finca> {
    const url = `${this.FincaUrl}/${id}`;

    return this.http.get<Finca>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Finca>(`getFinca id=${id}`))
    );
  }
  getFinc(nombre: string): Observable<Finca> {
    const url = `${this.FincaUrl}/${nombre}`;

    return this.http.get<Finca>(url).pipe(
      tap(_ => this.log(`fetched hero nombre=${nombre}`)),
      catchError(this.handleError<Finca>(`getFinca nombre=${nombre}`))
    );
  }

  addFinca (finca: Finca): Observable<any> {
    return this.http.post<Finca>(this.FincaUrl, finca, httpOptions).pipe(
      tap((finca: Finca) => this.log(`added Finca w/ id=${finca.id}`)),
      catchError(this.handleError<Finca>('finca'))
    );
  }

AddUpdate (finca: Finca): Observable<any> {
  return this.http.put<Finca>(this.FincaUrl, finca, httpOptions).pipe(
    tap((finca: Finca) => this.log(`added Finca w/ id=${finca.id}`)),
    catchError(this.handleError<Finca>('finca'))
  );
}
  getDelete(id): Observable<Finca> {
    const url = `${this.FincaUrl}/${id}`;
    return this.http.delete<Finca>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Finca>(`Delete id=${id}`))
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





