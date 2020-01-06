import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookComponent } from './book/book.component';
import { BookDetailComponent } from './book-detail/book-detail.component';


const routes: Routes = [
  {path:'', redirectTo:"book", pathMatch:'full'},
  {path:'book', component:BookComponent},
  {path:'book-detail/:id', component:BookDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
