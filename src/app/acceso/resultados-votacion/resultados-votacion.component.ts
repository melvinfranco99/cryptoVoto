import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-resultados-votacion',
  templateUrl: './resultados-votacion.component.html',
  styleUrls: ['./resultados-votacion.component.css']
})
export class ResultadosVotacionComponent {

  constructor(private router: Router) {

  }

  validar(_titulo: String, _codigo: String) {
    if (_titulo === "" || _codigo === "") {
      alert("Debe rellenar todos los campos.");
    } else if (_codigo.length < 64) {
      alert("El codigo siempre tiene 64 dígitos.");
    } else {
      this.router.navigate(['/grafica-resultados']);
    }
  }
}
