import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/service.index';
import swal from 'sweetalert';
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos: any[] = [];
  paginado: number = 1;
  totalRegistros: number = 0;
  cargando: boolean = false;

  constructor(public _productoService: ProductosService) {
  }

  ngOnInit() {
    this.cargarProductos();
  }


  cargarProductos() {
    this.cargando = true;
    this._productoService.obtenerProductos(this.paginado).subscribe((resp: any) => {
      // this.totalRegistros = resp.total;
      this.productos = resp.productos
      this.cargando = false;
    })
  }

  cambiarPaginacion(valor: number) {
    const desde = this.paginado + valor;

    if (desde < 0) {
      return;
    }



    this.paginado += valor;
    this.cargarProductos();
  }

  buscarProductonombre(termino: string) {
    if (termino.length <= 0) {
      return;
    }
    this.cargando = true;
    this._productoService.buscarProductoPorNombre(termino).subscribe(((resp: any) => {
      console.log(resp)
      this.cargando = false;
      this.productos = resp.productos;
    }))
  }

  buscarProductoPorCodigo(termino: number) {
    if (termino === undefined) {
      return;
    }
    this._productoService.buscarProductoPorCodigo(termino).subscribe((resp: any) => {
      if (!resp.ok) {
        swal('Error', 'No se encontraron registros en esta busqueda', 'warning')
        return;
      }
      this.productos = resp.productos;
    })
  };

  buscarProductoPorCodigoBarras(termino: number) {
    if (termino === undefined) {
      return;
    }
    this._productoService.buscarProductoPorCodigoDeBarras(termino).subscribe((resp: any) => {
      if (!resp.ok) {
        swal('Error', 'No se encontraron registros en esta busqueda', 'warning')
        return;
      }
      this.productos = resp.productos;
    })
  }

}
