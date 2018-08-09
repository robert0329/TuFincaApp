export class Cultivos{

    constructor(
        public idFrutos?:number,  
        public descripcion?: string,
    ){
        this.idFrutos= (idFrutos) ? idFrutos : 0;
        this.descripcion = descripcion;
    }
}
