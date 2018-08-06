import { postlogin } from './../app/Clases/postlogin';
import { Usuarios } from './../app/Clases/Usuarios';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Rx";
const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable()
export class UsuarioService {
  private Url = "http://localhost:8000/personas";
  private identity = "http://localhost:8000/personas/identity";
  private UrlgetEmail = "http://localhost:8000/personas/email";
  private UrlTareas = "http://localhost:8000/personas/tareas";
  private Urlgetpassword = "http://localhost:8000/personas/password";
  private postlogin = "http://localhost:8000/postlogin";

  constructor(private http: HttpClient) { }

  getempleado(): Observable<Usuarios[]> {
    return this.http.get<Usuarios[]>(this.Url).pipe();
  }
  getIdentity(): Observable<Usuarios[]> {
    return this.http.get<Usuarios[]>(this.identity).pipe();
  }
  getempleadoTareas(tipo: string): Observable<Usuarios[]> {
    const url = `${this.UrlTareas}/${tipo}`;
    return this.http.get<Usuarios[]>(url).pipe();
  }
  getempleadoId(tipo: string): Observable<Usuarios[]> {
    const url = `${this.UrlTareas}/${tipo}`;
    return this.http.get<Usuarios[]>(url).pipe();
  }
  getFincas(id: number): Observable<Usuarios> {
    const url = `${this.Url}/${id}`;
    return this.http.get<Usuarios>(url).pipe();
  }
  getEmail(email: string): Observable<Usuarios> {
    const url = `${this.UrlgetEmail}/${email}`;
    return this.http.get<Usuarios>(url).pipe()
  }
  getUsers(email: string) {
    return this.http.get(this.UrlgetEmail + "/" + email);
  }

  getPassword(persona: Usuarios): Observable<Usuarios> {
    const url = `${this.Urlgetpassword}/${persona.email}`;
    return this.http.get<Usuarios>(url).pipe();
  }
  addEmpleado(persona: Usuarios, identity): Promise<any> {
    var identit = (identity + 1);
    let data = {idpersona: identit, email: persona.email, password: persona.password, nombre:persona.nombre, apellido:persona.apellido, direccion:persona.direccion, ciudad: persona.ciudad, cedula:persona.cedula, telefono:persona.telefono,tipo:persona.tipo}
    
    return new Promise((resolve, reject) => {
      this.http.post<Usuarios>(this.Url, data,httpOptions)
      .subscribe(res => {
        resolve(res);
        console.log("paso");
      }, (err) => {
        console.log("no paso");
        reject(err);
      });
    })
  }
  auth(persona: Usuarios): Observable<Usuarios> {
    const url = `${this.UrlgetEmail}/${persona.email}`;
    return this.http.get<Usuarios>(url).pipe()
  }
  
  AddUpdate(finca: Usuarios): Observable<any> {
    return this.http.put<Usuarios>(this.Url, finca, httpOptions).pipe();

  }
  getDelete(id): Observable<Usuarios> {
    const url = `${this.Url}/${id}`;
    return this.http.delete<Usuarios>(url).pipe();
  }

  getPostLogin(): Observable<Usuarios[]> {
    return this.http.get<Usuarios[]>(this.postlogin).pipe();
  }
  addPostLogin(usuario: postlogin): Observable<any> {
    return this.http.post<postlogin>(this.postlogin, usuario, httpOptions).pipe();
  }
  getPostLoginDelete(id): Observable<postlogin> {
    const url = `${this.postlogin}/${id}`;
    return this.http.delete<postlogin>(url).pipe();
  }
}