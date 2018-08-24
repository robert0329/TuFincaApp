export class Siembras{
    constructor(
        public idsiembra?:number,  
        public idfrutos?: number,
        public idparcela?: number,
        public descripcion?:String,
        public fecha?: string
    ){
        this.idsiembra= (idsiembra) ? idsiembra : 0;
        this.idfrutos =  idfrutos;
        this.idparcela = idparcela;
        this.fecha = fecha;
        this.descripcion = descripcion;
    }
}
