import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-publisher',
  templateUrl: './publisher.component.html',
  styleUrls: ['./publisher.component.css']
})
export class PublisherComponent implements OnInit {
  title = 'Publisher Management'
  publisher: any = [];
  
isColor=false;
constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchAllPublisher();
  }
  addPublisher(){
   
    console.log("addPublisher button clicked!!")
    this.router.navigateByUrl('/add-publisher')
  }
  fetchAllPublisher(){
    this.http.get("http://localhost:8081/publisher/getAllPublisher")
    .subscribe(resp =>{
      this.publisher = resp;
      console.log('Publisher retrieved successfully:', this.publisher)
    }, error => {
      console.error('Error retrieving publisher:', error);
    });
  }

  deletePublisher(publisherId:Number){
    
    const url = 'http://localhost:8081/publisher/delete/' +publisherId
    console.log(url)
    this.http.delete(url)
    .subscribe(resp => {
      console.log('Publisher deleted successfully');
      this.fetchAllPublisher()
    }, error => {
      console.error('Error deleting publisher:', error);
    });
  }
  

}
