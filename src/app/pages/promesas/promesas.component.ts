import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {



    this.contarTres().then(() => {
      console.log('termino');
    }).catch(err => console.log('Error en la promesa', err))
  }

  ngOnInit() {
  }

  contarTres():Promise<any>{
    return new Promise((resolve, reject) => {
      let contador = 0;

      let intervalo = setInterval(() => {
        contador += 1;
        console.log(contador);
        if (contador === 3) {
          resolve('OK!')
          clearInterval(intervalo);
        }
      }, 1000);
    });
  }

}
