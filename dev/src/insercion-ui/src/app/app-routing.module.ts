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
import { CambiarClaveComponent } from './modules/mis-datos/cambiar-clave/cambiar-clave.component';
import { AgregarMailComponent } from './modules/mis-datos/agregar-correo/agregar-mail/agregar-mail.component';
import { ConfirmarCorreoComponent } from './modules/mis-datos/agregar-correo/confirmar-correo/confirmar-correo.component';
import { PostulantesComponent } from './modules/inscripciones/postulantes/postulantes.component';
import { CrearSeleccionComponent } from './modules/inscripciones/crear-seleccion/crear-seleccion.component';
import { ListarSeleccionesComponent } from './modules/selecciones/listar-selecciones/listar-selecciones.component';
import { SeleccionComponent } from './core/seleccion/seleccion.component';

const routes: Routes = [

  { path: 'debug', component: DebugComponent },
  { path: 'oauth2', component: Oauth2Component }, 
  { path: 'loader', component: LoaderComponent }, 
  { path: 'seleccion', component: SeleccionComponent }, 

  {
     path:'sistema',
     canActivate: [OidpGuard],
     component: SistemaComponent,
     children: [
      { path: 'inicio', component: InicioComponent },
      { path: 'mis_datos', component: MisDatosComponent },
      { path: 'mis_datos/cambiar_clave', component: CambiarClaveComponent },
      { path: 'mis_datos/cambiar_clave', component: CambiarClaveComponent },
      { path: 'mis_datos/correo/agregar_correo', component: AgregarMailComponent },
      { path: 'mis_datos/correo/confirmar_correo', component: ConfirmarCorreoComponent },

    
      { path: 'mis_inscripciones', component: MisInscripcionesComponent },

      { 
        path: 'inscripciones',
        children: [
          { path: 'crear', component: CrearComponent },
          { path: 'listar', component: ListarComponent },
          { path: 'postulantes', component: PostulantesComponent },
          { path: 'crear_seleccion', component: CrearSeleccionComponent }
        ]
      },

      { 
        path: 'selecciones',
        children: [
          { path: 'listar', component: ListarSeleccionesComponent }
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
