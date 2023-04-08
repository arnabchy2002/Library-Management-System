import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  title = 'Student Management'
  student: any = [];
  
isColor=false;
constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchAllStudent();
  }
  addStudent(){
   
    console.log("addStudent button clicked!!")
    this.router.navigateByUrl('/add-student')
  }
  fetchAllStudent(){
    this.http.get("http://localhost:8081/student/getAllStudent")
    .subscribe(resp =>{
      this.student = resp;
      console.log('Student retrieved successfully:', this.student)
    }, error => {
      console.error('Error retrieving student:', error);
    });
  }

  deleteStudent(studentId:Number){
    
    const url = 'http://localhost:8081/student/delete/' +studentId
    console.log(url)
    this.http.delete(url)
    .subscribe(resp => {
      console.log('Student deleted successfully');
      this.fetchAllStudent()
    }, error => {
      console.error('Error deleting student:', error);
    });
  }
  

}