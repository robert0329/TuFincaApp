export class Usuarios{

    constructor(
        public idpersona?:number,  
        public email?:String,
        public contraseña?: string,
        public nombre?: string,
        public apellido?: string,
        public direccion?: string,
        public ciudad?: string,
        public cedula?: string,
        public telefono?: string,
        public tipo?: string
    ){
        this.idpersona= (idpersona) ? idpersona : 0;
        this.email = email;
        this.contraseña = contraseña;
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.ciudad = ciudad;
        this.cedula = cedula;
        this.telefono = telefono;
        this.tipo = tipo;
    }
}
