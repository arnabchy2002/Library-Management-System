import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBooksComponent } from './add-books/add-books.component';
import { AdminComponent } from './admin/admin.component';
import { AuthorComponent } from './author/author.component';
import { BookComponent } from './book/book.component';
import { StudentComponent } from './student/student.component';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { AddAuthorComponent } from './add-author/add-author.component';
import { LoanComponent } from './loan/loan.component';
import { PublisherComponent } from './publisher/publisher.component';
import { AddLoanComponent } from './add-loan/add-loan.component';
import { AddPublisherComponent } from './add-publisher/add-publisher.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'books',
    component: BookComponent,
  },
  {
  path:'author',
  component: AuthorComponent,
},
{
  path:'admin',
component: AdminComponent,
},
{
  path:'student',
component: StudentComponent,
},
{
  path:'loan',
component: LoanComponent,
},
{
  path:'publisher',
component: PublisherComponent,
},
{
  path:'home',
component: HomeComponent,
},
{
path:'add-books',
component: AddBooksComponent,
},
{
path:'add-admin',
component: AddAdminComponent,
},
{
path:'add-author',
component: AddAuthorComponent,
},
{
  path:'add-loan',
  component: AddLoanComponent,
},
{
  path:'add-publisher',
  component: AddPublisherComponent,
},
{
  path:'add-student',
  component: AddStudentComponent,
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
