import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './emp-components/employee-list/employee-list.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';

const routes: Routes = [

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login', component: EmployeeLoginComponent,
  },
  {
    path: 'dashboard', component: EmployeeListComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
