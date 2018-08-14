

export class Parcela{

    constructor(
        public idparcela?:number,  
        public descripcion?:String,
        public idfinca?:number,
        public idsiembra?:number
    ){
        this.idparcela= (idparcela) ? idparcela : 0;
        this.descripcion = descripcion;
        this.idfinca = idfinca;
        this.idsiembra = idsiembra;
    }
}
