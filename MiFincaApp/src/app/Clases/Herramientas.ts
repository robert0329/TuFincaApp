export class Herramientas{

    constructor(
        public idherramientas?:string,  
        public herramientas?:String,
        public cantidad?: string,
        public suplidor?: string
    ){
        this.idherramientas= idherramientas;
        this.herramientas =  herramientas;
        this.cantidad = cantidad;
        this.suplidor = suplidor;
    }
}
