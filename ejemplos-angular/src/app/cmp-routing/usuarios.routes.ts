import { Routes } from '@angular/router'
import { InfoUsuarioComponent } from './info-usuario/info-usuario.component'
import { PermisosGuard } from './info-usuario/permisos.guard'

export const USUARIOS_ROUTES: Routes = [
  { path: ':usuarioId', component: InfoUsuarioComponent, canActivate: [PermisosGuard] }
]