

export class Tareas{

    constructor(
        public idtarea?:number,  
        public finca?:String,
        public descripcion?: string,
        public fecha?: string,
        public idpersona?: string
    ){
        this.idtarea= (idtarea) ? idtarea : 0;
        this.finca =  finca;
        this.descripcion = descripcion;
        this.fecha = fecha;
        this.idpersona = idpersona;
    }
}
