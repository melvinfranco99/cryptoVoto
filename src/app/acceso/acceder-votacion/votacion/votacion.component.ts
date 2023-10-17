import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-votacion',
  templateUrl: './votacion.component.html',
  styleUrls: ['./votacion.component.css']
})
export class VotacionComponent {
  constructor(private router: Router) {

  }
  validar() {
    if (window.confirm('¿Estás seguro de que deseas crear esta votación?')) {
      // Código que se ejecutará si el usuario hace clic en "Aceptar"
      this.router.navigate(['/usted-ha-votado']);
    } else {
      // Código que se ejecutará si el usuario hace clic en "Cancelar"
      return;
    }
  }
}
