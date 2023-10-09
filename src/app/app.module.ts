import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InicioComponent } from './inicio/inicio.component';
import { AccesoComponent } from './acceso/acceso.component';
import { DocumentacionComponent } from './documentacion/documentacion.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { ContactoComponent } from './contacto/contacto.component';

import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DesechosComponent } from './desechos/desechos.component';
import { CrearVotacionComponent } from './acceso/crear-votacion/crear-votacion.component';
import { CodigoVotacionComponent } from './acceso/crear-votacion/codigo-votacion/codigo-votacion.component';
import { AccederVotacionComponent } from './acceso/acceder-votacion/acceder-votacion.component';
import { VotacionComponent } from './acceso/acceder-votacion/votacion/votacion.component';
import { UstedHaVotadoComponent } from './acceso/acceder-votacion/votacion/usted-ha-votado/usted-ha-votado.component';
import { ResultadosVotacionComponent } from './acceso/resultados-votacion/resultados-votacion.component';
import { GraficaResultadosComponent } from './acceso/resultados-votacion/grafica-resultados/grafica-resultados.component';

const rutas: Routes = [

  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: '',
    redirectTo: '/inicio',
    pathMatch: 'full'
  },
  {
    path: 'documentacion',
    component: DocumentacionComponent
  },
  {
    path: 'tutorial',
    component: TutorialComponent
  },
  {
    path: 'contacto',
    component: ContactoComponent
  },
  {
    path: 'desechos',
    component: DesechosComponent
  },
  {
    path: 'acceso',
    component: AccesoComponent
  },
  {
    path: 'crear-votacion',
    component: CrearVotacionComponent
  },
  {
    path: 'codigo-votacion',
    component: CodigoVotacionComponent
  },
  {
    path: 'acceder-votacion',
    component: AccederVotacionComponent
  },
  {
    path: 'votacion',
    component: VotacionComponent
  },
  {
    path: 'usted-ha-votado',
    component: UstedHaVotadoComponent
  },
  {
    path: 'resultados-votacion',
    component: ResultadosVotacionComponent
  },
  {
    path: 'grafica-resultados',
    component: GraficaResultadosComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    AccesoComponent,
    DocumentacionComponent,
    TutorialComponent,
    ContactoComponent,
    PageNotFoundComponent,
    DesechosComponent,
    CrearVotacionComponent,
    CodigoVotacionComponent,
    AccederVotacionComponent,
    VotacionComponent,
    UstedHaVotadoComponent,
    ResultadosVotacionComponent,
    GraficaResultadosComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
