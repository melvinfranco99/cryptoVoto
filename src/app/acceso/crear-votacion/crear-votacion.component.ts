import { Component } from '@angular/core';

@Component({
  selector: 'app-crear-votacion',
  templateUrl: './crear-votacion.component.html',
  styleUrls: ['./crear-votacion.component.css']
})
export class CrearVotacionComponent {

  //Correos
  correos: String[];
  candidatos: String[];
  pulsadoAgregar_correo = false;

  constructor() {
    this.correos = [];
    this.candidatos = [];
  }

  agregarCorreo(_correo: string) {
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
    if (_correo === "") {
      alert("El campo debe estar lleno.");
    } else if (!emailRegex.test(_correo)) {
      alert("El correo no es válido.");
    } else {
      this.pulsadoAgregar_correo = true;
      this.correos.push(_correo);
    }
  }

  //Candidatos

  pulsadoAgregar_candidato = false;

  agregarCandidato(_candidato: String) {
    if (_candidato == "") {
      alert("El campo debe estar lleno.");
    } else {
      this.pulsadoAgregar_candidato = true;
      this.candidatos.push(_candidato);
    }

  }



}

