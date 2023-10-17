import { Component, ElementRef, Renderer2 } from '@angular/core';
import { Chart } from 'chart.js';



@Component({
  selector: 'app-grafica-resultados',
  templateUrl: './grafica-resultados.component.html',
  styleUrls: ['./grafica-resultados.component.css']
})
export class GraficaResultadosComponent {
  constructor(private renderer: Renderer2, private el: ElementRef) { }
  grafica?: any;
  ngAfterViewInit() {
    const canvas = this.renderer.selectRootElement(this.el.nativeElement.querySelector('#grafica'));
    this.grafica = canvas;
    canvas.setProperty('context', '2d');
  }

  chart = new Chart(this.grafica, {
    type: "line",
    data: {
      labels: ["Candidatura1", "Candidatura2"],
      datasets: [
        {
          label: "Mi grafica de bebidas",
          backgroundColor: "rgb(120,120,120)",
          borderColor: "rgb(0,255,0)",
          data: [12, 39]
        }
      ]
    }
  })

}


