import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [

  { path: '', component: DashboardComponent, data: { title: 'Dashboard' } },
  
  { path: 'dashboard', component: DashboardComponent, data: { title: 'Dashboard' } },
  { path: 'orders', component: DashboardComponent, data: { title: 'Dashboard' } },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PagesRoutingModule { }
