import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { AppComponent } from './app.component';
import { MiComponenteComponent } from './mi-componente/mi-componente.component';
import { CmpDataBindingComponent } from './cmp-data-binding/cmp-data-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CmpComunicacionEntreComponentesComponent } from './cmp-comunicacion-entre-componentes/cmp-comunicacion-entre-componentes.component';
import { SugusComponent } from './cmp-comunicacion-entre-componentes/sugus/sugus.component';
import { AnakinComponent } from './cmp-comunicacion-entre-componentes/anakin/anakin.component';
import { LeiaComponent } from './cmp-comunicacion-entre-componentes/leia/leia.component';
import { LukeComponent } from './cmp-comunicacion-entre-componentes/luke/luke.component';
import { CmpDirectivasComponent } from './cmp-directivas/cmp-directivas.component';
import { MarcarDirective } from './cmp-directivas/marcar.directive';
import { CmpPipesComponent } from './cmp-pipes/cmp-pipes.component';
import { DoblePipe } from './cmp-pipes/doble.pipe';
import { FiltroPipe } from './cmp-pipes/filtro.pipe';
import { CmpServiciosComponent } from './cmp-servicios/cmp-servicios.component';
import { CmpAComponent } from './cmp-servicios/cmp-a/cmp-a.component';
import { CmpBComponent } from './cmp-servicios/cmp-b/cmp-b.component';
import { CmpHttpComponent } from './cmp-http/cmp-http.component';
import { CmpObservablesComponent } from './cmp-observables/cmp-observables.component';
import { UnsubscribeComponent } from './cmp-observables/unsubscribe/unsubscribe.component';
import { AuthInterceptor } from './cmp-http/auth.interceptor';
import { CmpRoutingComponent } from './cmp-routing/cmp-routing.component';
import { NuevoUsuarioComponent } from './cmp-routing/nuevo-usuario/nuevo-usuario.component';
import { UsuariosComponent } from './cmp-routing/usuarios/usuarios.component';
import { InfoUsuarioComponent } from './cmp-routing/info-usuario/info-usuario.component';
import { RoutingModule } from './cmp-routing/app.routes';
import { Error404Component } from './cmp-routing/error404/error404.component';
import { CmpFormulariosComponent } from './cmp-formularios/cmp-formularios.component';
import { ErrorComponent } from './cmp-formularios/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    MiComponenteComponent,
    CmpDataBindingComponent,
    CmpComunicacionEntreComponentesComponent,
    SugusComponent,
    AnakinComponent,
    LeiaComponent,
    LukeComponent,
    CmpDirectivasComponent,
    MarcarDirective,
    CmpPipesComponent,
    DoblePipe,
    FiltroPipe,
    CmpServiciosComponent,
    CmpAComponent,
    CmpBComponent,
    CmpHttpComponent,
    CmpObservablesComponent,
    UnsubscribeComponent,
    CmpRoutingComponent,
    NuevoUsuarioComponent,
    UsuariosComponent,
    InfoUsuarioComponent,
    Error404Component,
    CmpFormulariosComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    // { provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor, multi: true },
    // { provide: HTTP_INTERCEPTORS, useClass: LogInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
