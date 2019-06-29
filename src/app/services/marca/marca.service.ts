import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';

@Injectable({
  providedIn: 'root'
})
export class MarcaService {

  constructor(public http:HttpClient) { }


  obtenerMarca(){
    let url = URL_SERVICIOS + '/catmarcas/';
    return this.http.get(url);
  }
}
