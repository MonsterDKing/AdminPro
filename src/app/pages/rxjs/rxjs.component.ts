import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { retry, map } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit {



  constructor() {


    //primer callback es cuando el recive informacion  ( un next ) segundo error y tercero termino
    this.regresaObservable().subscribe(numero => {
      console.log('Subs', numero);
    }, err => console.log('error', err),
      () => console.log('termino')

    );

  }

  ngOnInit() {
  }

  regresaObservable(): Observable<any> {
    let contador = 0;
    return new Observable((observer: Subscriber<any>) => {
      let intervalo = setInterval(() => {
        contador += 1;

        const salida = {
          valor: contador
        }

        observer.next(salida);

        if (contador === 10) {
          observer.complete();
          clearInterval(intervalo);
        };

        // if (contador === 3) {
        //   // clearInterval(intervalo);
        //   observer.error('entro al numero 3')
        // }
      }, 1000);
    }).pipe(

      map( resp =>{
        return resp.valor+1;
      })

    )
  }

}
