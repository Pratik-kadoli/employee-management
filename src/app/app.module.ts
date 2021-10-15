import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { AddEmployeeComponent } from './emp-components/add-employee/add-employee.component';
import { EmployeeListComponent } from './emp-components/employee-list/employee-list.component';
import { ViewEmployeeComponent } from './emp-components/view-employee/view-employee.component';
import { MaterialModule } from './modules/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StructureComponent } from './emp-components/structure/structure.component';
import { EmpNavbarComponent } from './emp-components/emp-navbar/emp-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeLoginComponent,
    AddEmployeeComponent,
    EmployeeListComponent,
    ViewEmployeeComponent,
    StructureComponent,
    EmpNavbarComponent,  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
