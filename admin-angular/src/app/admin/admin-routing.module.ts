import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminindexComponent } from './components/adminindex/adminindex.component';



const adminRoutes: Routes = [


];

@NgModule({
  imports: [RouterModule.forRoot(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
