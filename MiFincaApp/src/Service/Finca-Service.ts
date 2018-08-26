
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
  private FincaUrlapi="http://localhost:8000/finca/api";
  constructor(private http:  HttpClient) { }
  
  getFinca(): Observable<Finca[]> {

    return this.http.get<Finca[]>(this.FincaUrl)
      .pipe(
        tap(heroes => this.log('fetched Finca')),
        catchError(this.handleError('getFinca', []))
      );
  }
  getFincas(id: string): Observable<any> {
    const url = `${this.FincaUrlapi}/${id}`;

    return this.http.get<Finca>(url).pipe();
  }
  getFinc(nombre: string): Observable<Finca> {
    const url = `${this.FincaUrl}/${nombre}`;

    return this.http.get<Finca>(url).pipe();
  }

  addFinca (finca: Finca): Observable<any> {
    return this.http.post<Finca>(this.FincaUrl, finca, httpOptions).pipe();
  }

AddUpdate (finca: any): Observable<any> {
  return this.http.put<any>(this.FincaUrl, finca, httpOptions).pipe();
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
   
  }
}





