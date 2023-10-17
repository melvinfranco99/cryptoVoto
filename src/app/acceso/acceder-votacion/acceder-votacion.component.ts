import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acceder-votacion',
  templateUrl: './acceder-votacion.component.html',
  styleUrls: ['./acceder-votacion.component.css']
})
export class AccederVotacionComponent {

  constructor(private router: Router) { }

  validarCodigo(_codigo: String) {
    if (_codigo == "") {
      alert("Debe rellenar el código.");
    } else if (_codigo.length < 64) {
      alert("El código siempre es de 64 dígitos.");
    } else {
      this.router.navigate(['/votacion']);
    }
  }
}
