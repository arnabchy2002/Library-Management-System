import { HttpClient } from '@angular/common/http';
   import { Component, OnInit } from '@angular/core';
   import {FormBuilder , FormGroup, Validators} from '@angular/forms';
   import { Router } from '@angular/router';


@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  studentForm : FormGroup;
  constructor(private formbuilder: FormBuilder, private http: HttpClient, private router: Router) { 
    this.studentForm = this.formbuilder.group({
      name:['', Validators.required],
      department:[],
      rollNumber:[],
      birthDate: [],
      mobileNumber:[]
    })
  }

  ngOnInit(): void {
  }
  saveStudent(){
   
   let studentData = this.studentForm.value;
   this.http.post('http://localhost:8081/student/saveStudent',studentData)
   .subscribe(response => {
     console.log('Student saved to DB', response)
     this.router.navigateByUrl('/student')
   }, error =>{
     console.error("Error in student save", error)
   }
   );

 }
}