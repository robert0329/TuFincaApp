

import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { UsuarioService } from '../../Service/Usuario-Service';

export class User {
  idpostlogin: string;
  password: string;
  name: string;
  email: string;
  idpersona: string;
  tipo: string;

  constructor(idpostlogin:string,name: string, email: string, idpersona: string, tipo: string) {
    this.idpostlogin = idpostlogin;
    this.email = email;
    this.name = name;
    this.idpersona = idpersona;
    this.tipo = tipo;
  }
}
export class Postloginn {
  idpostlogin: string;
  nombre: string;
  tipo: string;
  email:string;
  password:string;

  constructor(idpostlogin: string, nombre: string, tipo: string, email:string, password:string) {
    this.idpostlogin = idpostlogin;
    this.nombre = nombre;
    this.tipo = tipo;
    this.password = password;
    this.email = email;
  }
}
@Injectable()
export class AuthService {
  constructor(private Usuarios: UsuarioService) {

  }

  currentUser: User;
  currentUserr: Postloginn;


public asig(value){
  
  this.currentUserr = new Postloginn("1",value[0].nombre, value[0].tipo, value[0].email, value[0].password);
  console.log(this.currentUserr);
  this.Usuarios.addPostLogin(this.currentUserr).subscribe(result =>{
  })

}
  public getUserInfo(): User {
    this.Usuarios.authu().subscribe(value => {
      console.log(value)
      this.currentUser = new User("1", value[0].nombre, value[0].email, value[0].idpersona, value[0].tipo);
    })
    console.log(this.currentUser)
    return this.currentUser;
  }

}