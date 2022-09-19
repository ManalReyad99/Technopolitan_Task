import { Component, Input, OnInit } from '@angular/core';
import { IEmployee } from '../../Models/iemployee';
import { EmployeeService } from '../../Services/employee.service';

@Component({
  selector: 'app-employee-data',
  templateUrl: './employee-data.component.html',
  styleUrls: ['./employee-data.component.scss']
})
export class EmployeeDataComponent implements OnInit {
employeesData:IEmployee[]=[];
headersList =[
  {'headerKey':'Membership_Activation_Date' ,'headerName':'Activation'},
  {'headerKey':'Id','headerName':'MBR.ID'},
  {'headerKey':'First_Name','headerName':'First Name'},
  {'headerKey':'Last_Name','headerName':'Last Name'},
  {'headerKey':'Email','headerName':'Email'},
  {'headerKey':'Mobile_Number','headerName':'Mobile #'},
  {'headerKey':'MemberShip_Category_Name','headerName':'MBR.Cat'},
  {'headerKey':'Company','headerName':'Company'},
  {'headerKey':'Job_Title','headerName':'Job Title'},

]
  constructor(private employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.employeeService
    .getAllEmployeesData()
    .subscribe((allEmployeeData)=>{
   this.employeesData=allEmployeeData.Data;
   console.log(this.employeesData)
   

    })
  }


}
