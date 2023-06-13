import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { RouterModule, Routes } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CompanyComponent } from './company/company.component';
import { EmployeeComponent } from './employee/employee.component';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { UpdateCompanyComponent } from './update-company/update-company.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { ShowEmployeesComponent } from './show-employees/show-employees.component';

const routes: Routes = [
  {
    path: 'dashboard', component: AdminComponent, children: [
      { path: 'company', component: CompanyComponent },
      { path: 'employee', component: EmployeeComponent }
    ]
  },
];

@NgModule({
  declarations: [
    AdminComponent,
    CompanyComponent,
    EmployeeComponent,
    UpdateCompanyComponent,
    UpdateEmployeeComponent,
    ShowEmployeesComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    MatToolbarModule,
    HttpClientModule,
    MatPaginatorModule,
    MatIconModule,
    MatButtonModule,
    MatSortModule,
    MatDialogModule,
    MatRadioModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatTableModule,
    MatInputModule
  ],
  exports: [
    AdminComponent,
    RouterModule,
    EmployeeComponent,
    CompanyComponent
  ]
})
export class AdminModule { }
