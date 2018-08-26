export class Gasto {
    constructor(
        public idGasto: number,
        public descripcion: string,
        public tipoGastoId: number,
        public idFinca: number,
        public idPersona: number,
        public fecha: Date
    ){
        this.idGasto = (idGasto) ? idGasto : 0;
        this.descripcion = descripcion;
        this.tipoGastoId = tipoGastoId;
        this.idFinca = idFinca;
        this.idPersona = idPersona;
        this.fecha = fecha;
    }
}