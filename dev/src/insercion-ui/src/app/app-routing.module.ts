import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DebugComponent } from './core/debug/debug.component';
import { Oauth2Component } from './core/oauth2/oauth2.component';
import { LoaderComponent } from './core/loader/loader.component';
import { OidpGuard } from './core/oauth2/oidp.guard';
import { SistemaComponent } from './core/sistema/sistema.component';
import { InicioComponent } from './modules/inicio/inicio.component';
import { MisDatosComponent } from './modules/mis-datos/mis-datos.component';
import { ListarComponent } from './modules/inscripciones/listar/listar.component';
import { MisInscripcionesComponent } from './modules/mis-inscripciones/mis-inscripciones.component';
import { CrearComponent } from './modules/inscripciones/crear/crear.component';

const routes: Routes = [

  { path: 'debug', component: DebugComponent },
  { path: 'oauth2', component: Oauth2Component }, 
  { path: 'loader', component: LoaderComponent }, 
  {
     path:'sistema',
     canActivate: [OidpGuard],
     component: SistemaComponent,
     children: [
      { path: 'inicio', component: InicioComponent },
      { path: 'mis_datos', component: MisDatosComponent },
      { path: 'mis_inscripciones', component: MisInscripcionesComponent },
      { 
        path: 'inscripciones',
        children: [
          { path: 'crear', component: CrearComponent },
          { path: 'listar', component: ListarComponent }
        ]
      }
     ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
