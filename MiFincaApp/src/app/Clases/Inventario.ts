export class Inventario{

    constructor(
        public idIventario?:number,  
        public idherramientas?:number,
        public IdProducto?:number,
        public IdMaquinaria?:number
    ){
        this.idIventario= (idIventario) ? idIventario : 0;
        this.idherramientas = idherramientas;
        this.IdProducto = IdProducto;
        this.IdMaquinaria = IdMaquinaria;
    }
}
