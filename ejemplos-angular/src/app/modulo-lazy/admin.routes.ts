import { Routes, RouterModule } from '@angular/router'
import { AdminComponent } from './admin/admin.component'

const ADMIN_ROUTES: Routes = [
  { path: '', component: AdminComponent }
]

export const RoutingAdminModule = RouterModule.forChild(ADMIN_ROUTES)