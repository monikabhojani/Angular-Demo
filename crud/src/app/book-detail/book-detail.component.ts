import { Component, OnInit } from '@angular/core';
import { Book } from '../book/book';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../book/book.service';


@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {

  bookdetail:Book;

  bookId:number;

  newId:number;
  
  constructor(private activeroute:ActivatedRoute, private bookservice:BookService, private router:Router) { }

  ngOnInit() {

      this.bookId = parseInt(this.activeroute.snapshot.paramMap.get('id'));
      this.newId = this.bookId;
      this.displayDetail();
  }

  displayDetail(){
    this.bookservice.api_getBookById(this.newId).subscribe(data=>this.bookdetail=data);
  }

  next(){
    this.newId = this.newId + 1;
    this.router.navigate(['book-detail', this.newId]);
    this.displayDetail();
  }

  prev(){
    this.newId = this.newId - 1;
    this.router.navigate(['book-detail', this.newId]);
    this.displayDetail();
  }


 

}
