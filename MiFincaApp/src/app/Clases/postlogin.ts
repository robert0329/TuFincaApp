export class postlogin{

    constructor(
        public idpostlogin?:number,  
        public idpersona?:string,
        public nombre?: string,
        public tipo?: string
    ){
        this.idpostlogin= (idpostlogin) ? idpostlogin : 0;
        this.nombre =  nombre;
        this.tipo = tipo;
        this.idpersona = idpersona;
    }
}
