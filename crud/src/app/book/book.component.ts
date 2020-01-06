import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Book } from './book';
import { BookService } from './book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  bookForm: FormGroup;
  books: Book[];
  bookid = null;
  constructor(private fb: FormBuilder, private bookservice: BookService, private router:Router) { }


  ngOnInit() {
    this.bookForm = this.fb.group(
      {
        title: ['', Validators.required],
        author: [''],
        category: [''],
      }
    )
    this.getAllBooks();
  }

  get title() {
    return this.bookForm.get('title');
  }
 

  getAllBooks() {
    this.bookservice.api_getAllBooks().subscribe(data => this.books = data);
  }

  editBook(id:number){
    this.bookservice.api_getBookById(id).subscribe(data => {
      this.bookid = data.id;
      this.bookForm.controls['title'].setValue(data.title);
      this.bookForm.controls['author'].setValue(data.author);
      this.bookForm.controls['category'].setValue(data.category);
    });
  } 

  onSubmit(){
    if(this.bookid == null){
      this.onSave();
    }
    else{
      this.onUpdate();
    }
  }


  onSave(){    
    let bookdata = this.bookForm.value;
    this.bookservice.api_postBookByData(bookdata).subscribe(data=>{
      this.getAllBooks();
      this.bookForm.reset();
    });
  }

  onUpdate(){    
    let bookdata = this.bookForm.value;
    bookdata.id = this.bookid;
    this.bookservice.api_updateBookById(bookdata).subscribe(data=>{
      this.bookid = null;
     this.getAllBooks();
     this.bookForm.reset();
      
    });
  }

  deleteBookByID(id:number){
    this.bookservice.api_deleteBookById(id).subscribe(data=>{
      this.getAllBooks();
    })
  }

  detailBook(bookid:number){
    this.router.navigate(['book-detail', bookid]);
  }

}
