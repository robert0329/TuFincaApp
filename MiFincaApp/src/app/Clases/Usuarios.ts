export class Usuarios{

    constructor(
        public id?:number,  
        public email?:String,
        public password?: string,
        public nombre?: string,
        public apellido?: string,
        public direccion?: string,
        public ciudad?: string,
        public cedula?: string,
        public telefono?: string,
    ){
        this.id= (id) ? id : 0;
        this.nombre =  nombre;
        this.email = email;
        this.password = password;
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.ciudad = ciudad;
        this.cedula = cedula;
        this.telefono = telefono;
    }
}
