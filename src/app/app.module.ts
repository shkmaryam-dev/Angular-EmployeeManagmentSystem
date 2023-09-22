import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { AddEmployeeComponent } from './component/add-employee/add-employee.component';
import { EmployeeManagerComponent } from './component/employee-manager/employee-manager.component';
import { EditEmployeeComponent } from './component/edit-employee/edit-employee.component';
import { ViewEmployeeComponent } from './component/view-employee/view-employee.component';
import { SpinnerComponent } from './component/spinner/spinner.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddEmployeeComponent,
    EmployeeManagerComponent,
    EditEmployeeComponent,
    ViewEmployeeComponent,
    SpinnerComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
