import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { TeamManagamentService } from '../services/team-managament.service';

@Component({
  selector: 'app-team-management',
  templateUrl: './team-management.component.html',
  styleUrls: ['./team-management.component.css']
})
export class TeamManagementComponent implements OnInit {
  ngOnInit() {

  }
  constructor(private formBuilder:FormBuilder,private teamMngService:TeamManagamentService){
  }
  submitted:boolean | undefined
  teamForm=this.formBuilder.group({
    teamName:['',Validators.required],
    employees: this.formBuilder.array([
      new FormControl()
    ],[Validators.required,Validators.maxLength(5)])
  });

  get teamName(){
    return this.teamForm.get('teamName') as FormControl;

  }
  get employees(){
    return this.teamForm.get('employees') as FormArray;
  }

  addEmployeeControl(){
 this.employees.push(new FormControl());
  }
  deleteEmployeeControl(index:number){
    this.employees.removeAt(index);
  }
  insertEmployeeControl(){
    this.employees.insert(1,new FormControl());

  }
  setEmployeeControl() {
		this.employees.setControl(2, new FormControl('Shiv'));
	}
  setEmployeeValue() {
		this.clearEmployeeControls();
		this.addEmployeeControl();
		this.addEmployeeControl();
		this.addEmployeeControl();
		this.employees.setValue(['Mahesh', 'Vishal', 'Krishn']);
	}

  
patchEmployeeValue(){
  this.employees.patchValue(['Mahesh','vishal','krishna']);
}
resetEmployees(){
  this.employees.reset();

}
clearEmployeeControls(){
this.employees.clear();
}

  onFormSubmit(){
    
    console.log(this.teamForm.value);

  }
  


}
