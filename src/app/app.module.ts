import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenericTableComponent } from './Shared/Components/generic-table/generic-table.component';
import { FormsModule } from '@angular/forms';
import { EmployeeDataComponent } from './Employee/Components/employee-data/employee-data.component';

@NgModule({
  declarations: [
    AppComponent,
    GenericTableComponent,
    EmployeeDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
