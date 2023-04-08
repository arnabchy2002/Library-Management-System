import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { AuthorComponent } from './author/author.component';
import { AdminComponent } from './admin/admin.component';
import { StudentComponent } from './student/student.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { AddBooksComponent } from './add-books/add-books.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { AddAuthorComponent } from './add-author/add-author.component';
import { LoanComponent } from './loan/loan.component';
import { PublisherComponent } from './publisher/publisher.component';
import { AddLoanComponent } from './add-loan/add-loan.component';
import { AddPublisherComponent } from './add-publisher/add-publisher.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    AuthorComponent,
    AdminComponent,
    StudentComponent,
    SidenavComponent,
    AddBooksComponent,
    AddAdminComponent,
    AddAuthorComponent,
    LoanComponent,
    PublisherComponent,
    AddLoanComponent,
    AddPublisherComponent,
    AddStudentComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', pathMatch: 'full', redirectTo: 'home' },
      { path: 'home', component: HomeComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
