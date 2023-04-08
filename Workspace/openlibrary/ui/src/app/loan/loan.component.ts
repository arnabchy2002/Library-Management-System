import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent implements OnInit {
  title = 'Loan Management'
  loan: any = [];
  
isColor=false;
constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchAllLoan();
  }
  addLoan(){
   
    console.log("addLoan button clicked!!")
    this.router.navigateByUrl('/add-loan')
  }
  fetchAllLoan(){
    this.http.get("http://localhost:8081/loan/getAllLoans")
    .subscribe(resp =>{
      this.loan = resp;
      console.log('Loan retrieved successfully:', this.loan)
    }, error => {
      console.error('Error retrieving loan:', error);
    });
  }

  deleteLoan(loanId:Number){
    
    const url = 'http://localhost:8081/loan/delete/' +loanId
    console.log(url)
    this.http.delete(url)
    .subscribe(resp => {
      console.log('Loan deleted successfully');
      this.fetchAllLoan()
    }, error => {
      console.error('Error deleting loan:', error);
    });
  }
  

}

