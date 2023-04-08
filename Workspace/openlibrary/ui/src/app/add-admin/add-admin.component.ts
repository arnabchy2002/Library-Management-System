import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormBuilder , FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {
  adminForm : FormGroup;
     constructor(private formbuilder: FormBuilder, private http: HttpClient, private router: Router) { 
       this.adminForm = this.formbuilder.group({
         name:['', Validators.required],
         username:[],
         password: []
       })
     }
   
     ngOnInit(): void {
     }
     saveAdmin(){
      // Make Post call to request url http://localhost:8081/books/saveBook
      
      let adminData = this.adminForm.value;
      // Handle date to string
      this.http.post('http://localhost:8081/admin/saveAdmin',adminData)
      .subscribe(response => {
        console.log('Admin saved to DB', response)
        this.router.navigateByUrl('/admin')
      }, error =>{
        console.error("Error in admin save", error)
      }
      );
  
    }
   }
