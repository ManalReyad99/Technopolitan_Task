import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDataComponent } from './Employee/Components/employee-data/employee-data.component';

const routes: Routes = [
  { path: '', component: EmployeeDataComponent },

  { path: 'empData', component: EmployeeDataComponent },
  ]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
