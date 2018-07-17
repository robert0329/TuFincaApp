export class Finca{

    constructor(
        public id?:number,  
        public nombre?:String,
        public descripcion?: string,
        public idpersona?: string
    ){
        this.id= (id) ? id : 0;
        this.nombre =  nombre;
        this.descripcion = descripcion;
        this.idpersona = idpersona;
    }
}
