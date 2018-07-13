export class Finca{

    constructor(
        public id?:number,  
        public nombre?:String,
        public descripcion?: string
    ){
        this.id= (id) ? id : 0;
        this.nombre =  nombre;
        this.descripcion = descripcion;
    }
}
