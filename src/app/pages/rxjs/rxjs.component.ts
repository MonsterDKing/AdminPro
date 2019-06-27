import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {


  subscripcion: Subscription;

  constructor() {


    //primer callback es cuando el recive informacion  ( un next ) segundo error y tercero termino
   this.subscripcion =  this.regresaObservable().subscribe(numero => {
      console.log('Subs', numero);
    }, err => console.log('error', err),
      () => console.log('termino')

    );

  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    console.log('la pagina se va a cerrar');
    this.subscripcion.unsubscribe();
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

        // if (contador === 10) {
        //   observer.complete();
        //   clearInterval(intervalo);
        // };

        // if (contador === 3) {
        //   // clearInterval(intervalo);
        //   observer.error('entro al numero 3')
        // }
      }, 1000);
    }).pipe(

      map( res => res.valor),
      filter((valor,index)=>{
        // console.log('Res', res,index);
        if( (valor%2) === 1){
          return true;
        }else{
          return false
        }
      })


    )
  }

}
