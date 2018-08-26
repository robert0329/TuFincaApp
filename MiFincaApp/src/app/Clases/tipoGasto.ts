export class tipoGasto{

    constructor(
        public tipoGastoId?:number,  
        public descripcion?:String,

    ){
        this.tipoGastoId= (tipoGastoId) ? tipoGastoId : null;
        this.descripcion =  descripcion;

    }
}
