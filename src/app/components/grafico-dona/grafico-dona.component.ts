import { Component, OnInit, Input } from '@angular/core';
import { Label, MultiDataSet } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styleUrls: ['./grafico-dona.component.css']
})
export class GraficoDonaComponent implements OnInit {


 @Input() leyenda:string = "Leyenda";
 @Input() datos: Label[] = [];
 @Input() nombres: MultiDataSet = [];
 @Input() tipoDeGrafica: ChartType = 'doughnut';

  constructor() { }

  ngOnInit() {
  }

}
