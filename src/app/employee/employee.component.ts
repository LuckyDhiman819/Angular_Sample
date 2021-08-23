import { group } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
// calling model class
  employee : Employee[] = [];
  errorMsg:String = "";
  employeeForm: FormGroup;
  x = true;
  // Dependency Induction
  constructor(public employeeService:EmployeeService, public formBuilder:FormBuilder) { 
    // model driven Form
    // this.employeeForm = new FormGroup({
    //   id: new FormControl(null, [Validators.required]),
    //   first_name: new FormControl(null, [Validators.required, Validators.minLength(5)]),
    //   last_name: new FormControl(null,  [Validators.required, Validators.minLength(5)]),
    //   email: new FormControl(null,  [Validators.required, Validators.email])
    // });
  }


  onSubmit(){
      console.log("emp Details", this.employeeForm)
      this.employeeService.CreateEmployee(this.employeeForm.value).subscribe();
      console.log("lodded sucessfully")
  }

  ngOnInit(): void {

    this.employeeForm = this.formBuilder.group({
      id: [null, Validators.required],
      first_name: ["", [Validators.required, Validators.minLength(5)]],
      last_name: ["",  [Validators.required, Validators.minLength(5)]],
      email: ["",  [Validators.required, Validators.email]]
    });

    this.employeeService.GetEmployees().subscribe(result=>this.employee = result, err=> this.errorMsg = err);
  }

  cheakExists(){
    for(let employe of this.employee){
        if(employe.id == this.employeeForm.value.id){
          return true;
        }
    }
    return false;
  }

}
