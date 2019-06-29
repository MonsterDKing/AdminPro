export class Productos {
  constructor(
    public nombre: string,
    public preciogeneral: string,
    public preciodescuento: string,
    public marca: string,
    public cantidad?: string,
    public codigo?: number,
    public codigodebarras?: number,
    public _id?: string
  ) {

  }

}
