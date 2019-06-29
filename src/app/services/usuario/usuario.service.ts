import { Injectable } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import { map  } from 'rxjs/operators';
import swal from 'sweetalert';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})


export class UsuarioService {

  usuario: Usuario;
  token: String;


  constructor(public http: HttpClient, public router:Router) {
    this.carcargarStorage();
  }

  login(usuario:Usuario, recordar: boolean = false){

    if(recordar){
      localStorage.setItem('email', usuario.email);
    }else{
      localStorage.removeItem('email');
    }

    const url = URL_SERVICIOS + '/login';
    return this.http.post(url,usuario).pipe(
      map( (res: any) =>{
        localStorage.setItem('id',res.id);
        localStorage.setItem('token', res.token)
        localStorage.setItem('usuario',JSON.stringify(res.usuario))
        this.usuario = usuario;
        this.token = res.token;
        return true;
      }),
    );
  }

  crearUsuario(usuario: Usuario) {
    const url = URL_SERVICIOS + '/usuario';
    return this.http.post(url, usuario).pipe(
     map( (resp: any)=>{
      swal('Usuario creado', usuario.email,'success')
      return resp.usuario;
     })
    )
  }

  logout(){
    this.usuario = null;
    this.token = '';
    //localStorage.clear();
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    this.router.navigate(['/login'])
  }

  estarLogueado(){
   return (this.token.length > 5) ? true : false;
  }

  carcargarStorage(){
    if(localStorage.getItem('token')){
      this.token = localStorage.getItem('token');
      this.usuario = JSON.parse(localStorage.getItem('usuario'));
    }else{
      this.token = '';
      this.usuario = null;
    }
  }





}
