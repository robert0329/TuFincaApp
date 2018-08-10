export class Productos{

    constructor(
        public idproductos?:string,  
        public producto?:String,
        public descripcion?: string,
        public cantidad?: string
    ){
        this.idproductos= idproductos;
        this.producto =  producto;
        this.descripcion = descripcion;
        this.cantidad = cantidad;
    }
}
