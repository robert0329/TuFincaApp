export class postlogin{

    constructor(
        public idpostlogin?:string,  
        public idpersona?:string,
        public nombre?: string,
        public tipo?: string
    ){
        this.idpostlogin=  idpostlogin;
        this.nombre =  nombre;
        this.tipo = tipo;
        this.idpersona = idpersona;
    }
}
