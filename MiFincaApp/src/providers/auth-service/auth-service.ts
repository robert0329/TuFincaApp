import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { UsuarioService } from '../../Service/Usuario-Service';
import { BehaviorSubject } from 'rxjs';
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
@Injectable()
export class AuthService {
  constructor(private Usuarios: UsuarioService, ) {
    this.loggedIn.next(true);
  }
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    this.loggedIn.next(true);
    return this.loggedIn.asObservable();
  }
  currentUser: User;

  public login(credentials) {
    return Observable.create(observer => {
      this.Usuarios.getEmail(credentials.email).subscribe((value) => {
        if (value <= 0) {
          return 0;
        } else {
          if (credentials.email == value[0].email) {
            this.Usuarios.getPassword(credentials.email).subscribe((value) => {
              if (value <= 0) {
                return 0;
              } else {
                if (credentials.password == value[0].password) {
                  let access = (credentials.email && credentials.password);

                  this.currentUser = new User(value[0].nombre, credentials.email, value[0].idpersona, value[0].tipo);
                  observer.next(access);
                  observer.complete();
                }
              }
            })
          }
        }
      })
    });
  }

  public register(credentials) {
    console.log(credentials);
    if (credentials.email == null || credentials.password == null || credentials.nombre == null || credentials.apellido == null
      || credentials.ciudad == null || credentials.cedula == null || credentials.telefono == null || credentials.direccion == null) {
      return Observable.throw("Por Favor introducir todos los datos");
    } else {
      this.Usuarios.addEmpleado(credentials);
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
  cargartrue() {
    this.loggedIn.next(true);
  }
  // logout() {
  //   // remove user from local storage to log user out
  //   this.loggedIn.next(false);
  //   localStorage.removeItem('currentUser');
  // }
  public logout() {
    return Observable.create(observer => {
      this.currentUser = null;
      observer.next(true);
      observer.complete();
    });
  }
}