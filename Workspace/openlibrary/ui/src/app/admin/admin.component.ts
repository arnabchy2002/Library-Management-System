import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  title = 'Admin Management'
  admin: any = [];
  //books = [    {        "id": 1,        "title": "The Great Gatsby",        "author": "F. Scott Fitzgerald",        "isbn": "978-0141182636",        "publicationDate": "1925-04-10",        "publisher": "Penguin Classics",        "copies": 10,        "category": "Fiction",        "genre": "Classic",        "subgenre": "Literary Fiction"    },    {        "id": 2,        "title": "To Kill a Mockingbird",        "author": "Harper Lee",        "isbn": "978-0060935467",        "publicationDate": "1960-07-11",        "publisher": "Harper Perennial Modern Classics",        "copies": 5,        "category": "Fiction",        "genre": "Classic",        "subgenre": "Historical Fiction"    },    {        "id": 3,        "title": "The Catcher in the Rye",        "author": "J.D. Salinger",        "isbn": "978-0316769174",        "publicationDate": "1951-07-16",        "publisher": "Little, Brown and Company",        "copies": 8,        "category": "Fiction",        "genre": "Classic",        "subgenre": "Coming of Age"    },    {        "id": 4,        "title": "1984",        "author": "George Orwell",        "isbn": "978-0451524935",        "publicationDate": "1949-06-08",        "publisher": "Signet Classic",        "copies": 12,        "category": "Fiction",        "genre": "Science Fiction",        "subgenre": "Dystopian"    },    {        "id": 5,        "title": "Pride and Prejudice",        "author": "Jane Austen",        "isbn": "978-0141439518",        "publicationDate": "1813-01-28",        "publisher": "Penguin Classics",        "copies": 6,        "category": "Fiction",        "genre": "Romance",        "subgenre": "Regency Romance"    }]
  
isColor=false;
constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchAllAdmin();
  }
  addAdmin(){
   
    console.log("addAdmin button clicked!!")
    // Take user to /add-admin url
    this.router.navigateByUrl('/add-admin')
  }
  fetchAllAdmin(){
    this.http.get("http://localhost:8081/admin/getAllAdmin")
    .subscribe(resp =>{
      this.admin = resp;
      console.log('Admin retrieved successfully:', this.admin)
    }, error => {
      console.error('Error retrieving admin:', error);
    });
  }

  deleteAdmin(AdminId:Number){
    
    const url = 'http://localhost:8081/admin/delete/' +AdminId
    console.log(url)
    this.http.delete(url)
    .subscribe(resp => {
      console.log('Admin deleted successfully');
      this.fetchAllAdmin()
    }, error => {
      console.error('Error deleting admin:', error);
    });
  }
  

}
