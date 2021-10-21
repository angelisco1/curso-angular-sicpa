import { Routes, RouterModule } from '@angular/router';
import { Error404Component } from './error404/error404.component';
import { InfoUsuarioComponent } from './info-usuario/info-usuario.component';
import { NuevoUsuarioComponent } from './nuevo-usuario/nuevo-usuario.component';
import { USUARIOS_ROUTES } from './usuarios.routes';
import { UsuariosComponent } from './usuarios/usuarios.component';

const APP_ROUTES: Routes = [
  { path: 'usuarios', component: UsuariosComponent, children: USUARIOS_ROUTES },
  { path: '', redirectTo: 'usuarios', pathMatch: 'full' },
  // { path: 'usuarios/:usuarioId', component: InfoUsuarioComponent },
  { path: 'nuevo-usuario', component: NuevoUsuarioComponent },

  {
    path: 'admin',
    loadChildren: () => {
      return import('../modulo-lazy/modulo-lazy.module')
        .then(module => module.ModuloLazyModule)
    }
  },

  { path: '**', component: Error404Component },
]

export const RoutingModule = RouterModule.forRoot(APP_ROUTES)