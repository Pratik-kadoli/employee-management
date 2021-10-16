import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { EmployeeListComponent } from './emp-components/employee-list/employee-list.component';
import { MaterialModule } from './modules/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { EmpNavbarComponent } from './emp-components/emp-navbar/emp-navbar.component';
import { ApiService } from './services/api/api.service';
import { HttpClientModule } from '@angular/common/http';
import { AddEmployeeComponent } from './popups/add-employee/add-employee.component';
import { DialogComponent } from './popups/dialog/dialog.component';
import { ConfirmationComponent } from './popups/confirmation/confirmation.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeLoginComponent,
    EmployeeListComponent,
    EmpNavbarComponent,
    AddEmployeeComponent,  
    DialogComponent,
    ConfirmationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  providers: [ApiService],
  entryComponents : [AddEmployeeComponent,DialogComponent,ConfirmationComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
