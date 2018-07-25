import { postlogin } from './../../app/Clases/postlogin';
import { Usuarios } from './../../app/Clases/Usuarios';


import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { UsuarioService } from '../../Service/Usuario-Service';

let Url = "http://localhost:8000/";
export class User {
  password: string;
  name: string;
  email: string;
  idpersona: string;
  tipo: string;

  constructor(name: string, email: string, idpersona: string, tipo: string) {
    this.email = email;
    this.name = name;
    this.idpersona = idpersona;
    this.tipo = tipo;
  }
}
export class Postloginn {
  nombre: string;
  idpersona: string;
  tipo: string;
  email:string;
  password:string;

  constructor(nombre: string, idpersona: string, tipo: string, email:string,password:string) {
    this.nombre = nombre;
    this.idpersona = idpersona;
    this.tipo = tipo;
    this.password = password;
    this.email = email;
  }
}
@Injectable()
export class AuthService {
  constructor(private Usuarios: UsuarioService) {

  }
  login(credentials) {
    // return new Promise((resolve, reject) => {
    //   this.Usuarios.auth(credentials).subscribe(res => {
    //     resolve(res);
    //   }, (err) => {
    //     reject(err);
    //   });
    // });
  }

  // register(data) {
  //   return new Promise((resolve, reject) =>{
  //       this.Usuarios.addEmpleado(data).subscribe(res => {
  //           resolve(res.json());
  //         }, (err) => {
  //           reject(err);
  //         });
  //   });
  // }

  currentUser: User;
  currentUserr: Postloginn;


public asig(value){
  // this.currentUser = new User(value[0].nombre, value[0].email, value[0].idpersona, value[0].tipo);
  this.currentUserr = new Postloginn(value[0].nombre, value[0].idpersona, value[0].tipo, value[0].email, value[0].password);
  this.Usuarios.addPostLogin(this.currentUserr).subscribe(result =>{
  })

}
  public getUserInfo(): User {
    this.Usuarios.getPostLogin().subscribe(valuee => {
      this.Usuarios.auth(valuee[0]).subscribe((value) => {
        this.currentUser = new User(value[0].nombre, value[0].email, value[0].idpersona, value[0].tipo);
        
      })
    })
    return this.currentUser;
  }

}