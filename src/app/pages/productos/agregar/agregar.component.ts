import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MarcaService, ProductosService } from '../../../services/service.index';
import { Productos } from '../../../models/productos.model';
import swal from 'sweetalert';
@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: []
})
export class AgregarComponent implements OnInit {

  forma: FormGroup;
  marcas: any[];

  constructor(public _marcaServicios: MarcaService, public _productosServicios: ProductosService) { }

  ngOnInit() {
    this.forma = new FormGroup({
      nombre: new FormControl(null, Validators.required),
      preciouno: new FormControl(null, Validators.required),
      preciodos: new FormControl(null,Validators.required),
      cantidad: new FormControl(null, Validators.required),
      marca: new FormControl(null, Validators.required),
      codigo: new FormControl(null),
      codigoBarras: new FormControl(null)
    });
    this.obtenerMarcas();

  }

  registro() {
    console.log(this.forma.value)
    console.log(this.forma.valid)
    if(!this.forma.valid){
      return;
    }

    let producto = new Productos(
      this.forma.value.nombre,
      this.forma.value.preciouno,
      this.forma.value.preciodos,
      this.forma.value.marca,
      this.forma.value.cantidad || 0,
      this.forma.value.codigo || 0,
      this.forma.value.codigoBarras || 0
    )
    this._productosServicios.crearProducto(producto).subscribe( (resp:any) =>{
      swal('Exito','Registro realizado correctamente','success');
      this.forma.reset();
    })


  }

  obtenerMarcas(){
    this._marcaServicios.obtenerMarca().subscribe( (resp:any) =>{
      this.marcas = resp.marca;
    })
  }

}
