import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  title = 'Author Management'
  author: any = [];
  //books = [    {        "id": 1,        "title": "The Great Gatsby",        "author": "F. Scott Fitzgerald",        "isbn": "978-0141182636",        "publicationDate": "1925-04-10",        "publisher": "Penguin Classics",        "copies": 10,        "category": "Fiction",        "genre": "Classic",        "subgenre": "Literary Fiction"    },    {        "id": 2,        "title": "To Kill a Mockingbird",        "author": "Harper Lee",        "isbn": "978-0060935467",        "publicationDate": "1960-07-11",        "publisher": "Harper Perennial Modern Classics",        "copies": 5,        "category": "Fiction",        "genre": "Classic",        "subgenre": "Historical Fiction"    },    {        "id": 3,        "title": "The Catcher in the Rye",        "author": "J.D. Salinger",        "isbn": "978-0316769174",        "publicationDate": "1951-07-16",        "publisher": "Little, Brown and Company",        "copies": 8,        "category": "Fiction",        "genre": "Classic",        "subgenre": "Coming of Age"    },    {        "id": 4,        "title": "1984",        "author": "George Orwell",        "isbn": "978-0451524935",        "publicationDate": "1949-06-08",        "publisher": "Signet Classic",        "copies": 12,        "category": "Fiction",        "genre": "Science Fiction",        "subgenre": "Dystopian"    },    {        "id": 5,        "title": "Pride and Prejudice",        "author": "Jane Austen",        "isbn": "978-0141439518",        "publicationDate": "1813-01-28",        "publisher": "Penguin Classics",        "copies": 6,        "category": "Fiction",        "genre": "Romance",        "subgenre": "Regency Romance"    }]
  
isColor=false;
constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchAllAuthor();
  }
  addAuthor(){
   
    console.log("addAuthor button clicked!!")
    // Take user to /add-author url
    this.router.navigateByUrl('/add-author')
  }
  fetchAllAuthor(){
    this.http.get("http://localhost:8081/author/getAllAuthors")
    .subscribe(resp =>{
      this.author = resp;
      console.log('Author retrieved successfully:', this.author)
    }, error => {
      console.error('Error retrieving author:', error);
    });
  }

  deleteAuthor(authorId:Number){
    
    const url = 'http://localhost:8081/author/delete/' +authorId
    console.log(url)
    this.http.delete(url)
    .subscribe(resp => {
      console.log('Author deleted successfully');
      this.fetchAllAuthor()
    }, error => {
      console.error('Error deleting author:', error);
    });
  }
  

}

