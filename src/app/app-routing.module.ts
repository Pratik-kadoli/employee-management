import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './emp-components/add-employee/add-employee.component';
import { EmployeeListComponent } from './emp-components/employee-list/employee-list.component';
import { StructureComponent } from './emp-components/structure/structure.component';
import { ViewEmployeeComponent } from './emp-components/view-employee/view-employee.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';

const routes: Routes = [

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login', component: EmployeeLoginComponent,
  },
  {
    path: 'app', component: StructureComponent, children:[
      {
        path: 'dashboard', component: EmployeeListComponent,
      },
      {
        path: ':id/viewEmp', component: ViewEmployeeComponent,
      },
      {
        path: 'addEmp', component: AddEmployeeComponent,
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
