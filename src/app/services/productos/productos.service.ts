import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from '../../config/config';
import { HttpClient } from '@angular/common/http';
import { Productos } from '../../models/productos.model';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(public http: HttpClient) { }

  obtenerProductos(pagina: number = 1){
    const url = URL_SERVICIOS + '/productos?pagina='+pagina;
    return this.http.get(url);
  }

  buscarProductoPorNombre(termino: string){
    const url = URL_SERVICIOS + '/productos/busqueda/?nombre=' + termino;
    return this.http.get(url);
  }

  buscarProductoPorCodigo(codigo:number){
    const url = URL_SERVICIOS + '/productos/busqueda/?codigo='+codigo
    return this.http.get(url);
  }

  buscarProductoPorCodigoDeBarras(codigo:number){
    const url = URL_SERVICIOS + '/productos/busqueda/?codigodebarras='+codigo
    return this.http.get(url);
  }

  crearProducto(producto:Productos){
    const url = URL_SERVICIOS + '/productos/' ;
    return this.http.post(url, producto);
  }
}
