
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { UsuarioService } from '../../Service/Usuario-Service';
export class User {
  password: string;
  name: string;
  email: string;

  constructor(name: string, email: string) {
    this.email = email;
    this.name = name;
  }
}
@Injectable()
export class AuthService {
  constructor(private Usuarios: UsuarioService, ) {

  }
  currentUser: User;
  public login(email, password) {

    if (email === null || password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      return Observable.create(observer => {
        this.Usuarios.getEmail(email).subscribe((value) => {
          if (email == value[0].email) {
            this.Usuarios.getPassword(password).subscribe((value) => {

              if (password == value[0].password) {
                let access = (email && password);
                this.currentUser = new User("Robert", email);
                observer.next(access);
                observer.complete();
              }

            })
          }

        })
      });
    }

  }
  public register(credentials) {
    if (credentials.email === null || credentials.password === null || credentials.nombre === null || credentials.apellido === null
      || credentials.ciudad === null || credentials.cedula === null || credentials.telefono === null || credentials.direccion === null) {
      return Observable.throw("Por Favor introducir todos los datos");
    } else {
      // At this point store the credentials to your backend!
      return Observable.create(observer => {
        observer.next(true);
        observer.complete();
      });
    }
  }

  public getUserInfo(): User {
    return this.currentUser;
  }

  public logout() {
    return Observable.create(observer => {
      this.currentUser = null;
      observer.next(true);
      observer.complete();
    });
  }
}