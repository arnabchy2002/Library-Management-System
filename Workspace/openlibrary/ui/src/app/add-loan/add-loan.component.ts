import { HttpClient } from '@angular/common/http';
   import { Component, OnInit } from '@angular/core';
   import {FormBuilder , FormGroup, Validators} from '@angular/forms';
   import { Router } from '@angular/router';

@Component({
  selector: 'app-add-loan',
  templateUrl: './add-loan.component.html',
  styleUrls: ['./add-loan.component.css']
})
export class AddLoanComponent implements OnInit {
  loanForm : FormGroup;
  constructor(private formbuilder: FormBuilder, private http: HttpClient, private router: Router) { 
    this.loanForm = this.formbuilder.group({
      bookId:[],
      studentId:[],
      checkoutDate:[],
      dueDate: [],
      returnDate:[]
    })
  }

  ngOnInit(): void {
  }
  saveLoan(){
   
   let loanData = this.loanForm.value;
   this.http.post('http://localhost:8081/loan/saveLoan',loanData)
   .subscribe(response => {
     console.log('Loan saved to DB', response)
     this.router.navigateByUrl('/loan')
   }, error =>{
     console.error("Error in loan save", error)
   }
   );

 }
}

