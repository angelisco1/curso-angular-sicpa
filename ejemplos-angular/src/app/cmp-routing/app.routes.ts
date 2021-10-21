import { Routes, RouterModule } from '@angular/router';
import { Error404Component } from './error404/error404.component';
import { InfoUsuarioComponent } from './info-usuario/info-usuario.component';
import { NuevoUsuarioComponent } from './nuevo-usuario/nuevo-usuario.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

const APP_ROUTES: Routes = [
  { path: '', component: UsuariosComponent },
  { path: 'usuarios/:usuarioId', component: InfoUsuarioComponent },
  { path: 'nuevo-usuario', component: NuevoUsuarioComponent },
  { path: '**', component: Error404Component },
]

export const RoutingModule = RouterModule.forRoot(APP_ROUTES)