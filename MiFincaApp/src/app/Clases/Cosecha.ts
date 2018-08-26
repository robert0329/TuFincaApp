export class Cosecha {
    constructor(
        public idCosecha?: number,
        public descripcion?: string,
        public fecha?: Date,
        public cantidad?: number,
        public idSiembra?: number
    ) {
        this.idCosecha = (idCosecha) ? idCosecha : 0;
        this.descripcion = descripcion;
        this.fecha = fecha;
        this.cantidad = cantidad;
        this.idSiembra = idSiembra;
    }
}