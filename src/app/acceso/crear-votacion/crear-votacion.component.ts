import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-votacion',
  templateUrl: './crear-votacion.component.html',
  styleUrls: ['./crear-votacion.component.css']
})
export class CrearVotacionComponent {

  correos: String[];
  candidatos: String[];
  pulsadoAgregar_correo = false;
  correoRepetido = false;
  candidatoRepetido = false;


  constructor(private router: Router) {
    this.correos = [];
    this.candidatos = [];

  }

  agregarCorreo(_correo: string) {
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
    this.correoRepetido = false;
    if (_correo === "") {
      alert("El campo CORREO debe estar lleno.");
    } else if (!emailRegex.test(_correo)) {
      alert("El correo no es válido.");
    } else {
      for (let i = 0; i < this.correos.length; i++) {
        if (_correo === this.correos[i]) {
          this.correoRepetido = true;
          break;
        }
      }
      if (this.correoRepetido == true) {
        alert("Ese correo ya está registrado.");
      } else {
        this.pulsadoAgregar_correo = true;
        this.correos.push(_correo);
        let inputCorreo = document.getElementById('txtCorreo') as HTMLInputElement;
        inputCorreo.value = '';
      }
    }
  }


  pulsadoAgregar_candidato = false;

  agregarCandidato(_candidato: String) {
    this.candidatoRepetido = false;
    if (_candidato == "") {
      alert("El campo CANDIDATURA debe estar lleno.");
    } else {
      for (let i = 0; i < this.candidatos.length; i++) {
        if (_candidato === this.candidatos[i]) {
          this.candidatoRepetido = true;
          break;
        }
      }

      if (this.candidatoRepetido == true) {
        alert("Ese candidato ya está registrado.");
      } else {
        this.pulsadoAgregar_candidato = true;
        this.candidatos.push(_candidato);
        let inputCandidato = document.getElementById('txtCandidato') as HTMLInputElement;
        inputCandidato.value = "";
      }
    }
  }

  tituloVotacion?: String;
  limiteTiempo?: String;
  anadirVotacion(_txtCandidato: String, _txtCorreo: String, _tituloVotacion: String, _limiteTiempo: String) {
    if (_tituloVotacion == "" || _limiteTiempo == "" || this.pulsadoAgregar_candidato == false || this.pulsadoAgregar_correo == false) {
      alert("Deben estar todos los campos rellenos para crear la votación.");
    } else {
      if (window.confirm('¿Estás seguro de que deseas crear esta votación?')) {
        // Código que se ejecutará si el usuario hace clic en "Aceptar"
        this.tituloVotacion = _tituloVotacion;
        this.limiteTiempo = _limiteTiempo;
        this.router.navigate(['/codigo-votacion']);
      } else {
        // Código que se ejecutará si el usuario hace clic en "Cancelar"
      }

    }
  }

  //Subir archivos
  subirArchivoXLS() {
    const inputArchivo = document.getElementById('inputArchivo') as HTMLInputElement;
    inputArchivo.click();
  }

  cargarArchivo(evento: any) {
    const archivoSeleccionado = evento.target.files[0];
    const lector = new FileReader();
    lector.onload = () => {
      const contenido = lector.result as string;
      console.log(contenido);
      // Aquí puedes hacer lo que quieras con el contenido del archivo
    };
    lector.readAsText(archivoSeleccionado);
  }

  //Eliminar candidato
  eliminarCandidato(_candidato: String) {
    if (window.confirm('¿Estás seguro de que deseas eliminar este CANDIDATO?')) {
      // Código que se ejecutará si el usuario hace clic en "Aceptar"

      for (let i = 0; i < this.candidatos.length; i++) {
        if (_candidato === this.candidatos[i]) {
          this.candidatos.splice(i, 1);
          break;
        }
      }

    } else {
      // Código que se ejecutará si el usuario hace clic en "Cancelar"
      return;
    }


  }




}

