import { Component } from '@angular/core';
import { Persona } from '../persona';

@Component({
  selector: 'app-desechos',
  templateUrl: './desechos.component.html',
  styleUrls: ['./desechos.component.css']
})
export class DesechosComponent {


  //INCREMENTAR Y DECREMENTAR

  numero = 1;

  incrementar() {
    this.numero++;
  }

  decrementar() {
    this.numero--;
  }

  //COLORES TEXTO

  nombre_color = "rojo";
  text_color = "danger"

  cambiarAzul() {
    this.nombre_color = "azul";
    this.text_color = "primary";
  }
  cambiarRojo() {
    this.nombre_color = "rojo";
    this.text_color = "danger";
  }
  cambiarVerde() {
    this.nombre_color = "verde";
    this.text_color = "success";
  }
  modo = "enabled";
  cambiarModo() {
    if (this.modo === "enabled") {
      this.modo = "disabled";
    } else {
      this.modo = "enabled";
    }
  }

  //IMAGENES


  imagen1 = "https://images.pexels.com/photos/15295967/pexels-photo-15295967/free-photo-of-comida-ligero-agua-hoja.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load";
  imagen2 = "https://images.pexels.com/photos/18277222/pexels-photo-18277222/free-photo-of-ciudad-moda-gente-mujer.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load";
  imagen = this.imagen1;



  //FORMULARIO

  alerta = false;

  agregarNombre(_nombre: string) {
    console.log(_nombre);
    this.alerta = true;
  }

  //FOR LISTA

  personas: Persona[] = [
    {
      nombre: "Alberto",
      edad: 30
    },
    {
      nombre: "Melvin",
      edad: 25
    },
    {
      nombre: "Antonio",
      edad: 16
    },
    {
      nombre: "Gustavo",
      edad: 47
    }
  ]

  //SWITCH

  dia?: string; //el signo de interrogacion es para no inicializarlo



}
