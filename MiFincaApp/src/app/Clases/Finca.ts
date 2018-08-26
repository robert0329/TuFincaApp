export class Finca{

    constructor(
        public idfinca?:number,  
        public nombre?:String,
        public descripcion?: string,
        public idpersona?: string
    ){
        this.idfinca= (idfinca) ? idfinca : null;
        this.nombre =  nombre;
        this.descripcion = descripcion;
        this.idpersona = idpersona;
    }
}
