import { Injectable } from '@angular/core';

@Injectable()
export class SidebarService {

  menu: any = [
    {
      titulo:'Principal',
      icono:'mdi mdi-gauge',
      submenu:[
        {titulo: 'Inicio', url: '/dashboard'},
        {titulo: 'ProgressBar', url: '/progress'},
        {titulo: 'Graficas', url: '/graficas1'},
        {titulo: 'Punto de venta', url: '/ventas'}
      ]
    },
    {
      titulo:'Productos',
      icono:'mdi mdi-package',
      submenu:[
        {titulo: 'Lista de productos', url: '/productos'},
        {titulo: 'Agregar Productos', url: '/agregar-productos'},
        {titulo: 'Modificar Productos', url: '/dashboard'}

      ]
    }
  ]

  constructor() { }

}
