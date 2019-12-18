import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { CoreModule } from './core/core.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InicioComponent } from './modules/inicio/inicio.component';
import { MisDatosComponent } from './modules/mis-datos/mis-datos.component';
import { ListarComponent } from './modules/inscripciones/listar/listar.component';
import { MisInscripcionesComponent } from './modules/mis-inscripciones/mis-inscripciones.component';
import { CrearComponent } from './modules/inscripciones/crear/crear.component';
import { CambiarClaveComponent } from './modules/mis-datos/cambiar-clave/cambiar-clave.component';
import { AgregarMailComponent } from './modules/mis-datos/agregar-correo/agregar-mail/agregar-mail.component';
import { ConfirmarCorreoComponent } from './modules/mis-datos/agregar-correo/confirmar-correo/confirmar-correo.component';
import { PostulantesComponent } from './modules/inscripciones/postulantes/postulantes.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    MisDatosComponent,
    ListarComponent,
    MisInscripcionesComponent,
    CrearComponent,
    CambiarClaveComponent,
    AgregarMailComponent,
    ConfirmarCorreoComponent,
    PostulantesComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
