import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { RoutingAdminModule } from './admin.routes';



@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    RoutingAdminModule
  ]
})
export class ModuloLazyModule { }
