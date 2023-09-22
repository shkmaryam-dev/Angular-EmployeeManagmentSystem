import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './component/add-employee/add-employee.component';
import { EmployeeManagerComponent } from './component/employee-manager/employee-manager.component';
import { ViewEmployeeComponent } from './component/view-employee/view-employee.component';
import { EditEmployeeComponent } from './component/edit-employee/edit-employee.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'employee/admin',
    pathMatch: 'full',
  },
  {
    path: 'employee/admin',
    component: EmployeeManagerComponent,
  },
  {
    path: 'employee/add',
    component: AddEmployeeComponent,
  },
  {
    path: 'employee/edit/:employeeId',
    component: EditEmployeeComponent,
  },
  {
    path: 'employee/view/:employeeId',
    component: ViewEmployeeComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
