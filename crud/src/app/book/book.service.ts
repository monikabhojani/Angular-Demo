import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './book';



@Injectable({
  providedIn: 'root'
})
export class BookService {

  bookApiUrl = '/api/bookData';

  constructor( private http:HttpClient) { }

  api_getAllBooks() : Observable<Book[]>
  {
    return this.http.get<Book[]>(this.bookApiUrl);
  }

  api_getBookById(id:number): Observable<Book>{
    return this.http.get<Book>(this.bookApiUrl+'/'+id)
  }

  api_postBookByData(bookData:Book): Observable<Book>{
    let httpHeadersValue=new HttpHeaders()
                  .set("Content-type","application/json");
                  
    let options={
      headers:httpHeadersValue
    };
    return this.http.post<Book>(this.bookApiUrl, bookData, options);
  }

  api_updateBookById(bookData:Book): Observable<number>{
    let httpHeadersValue=new HttpHeaders()
                  .set("Content-type","application/json");
                  
    let options={
      headers:httpHeadersValue
    };
    return this.http.put<number>(this.bookApiUrl+'/'+bookData.id, bookData, options);
  }

  api_deleteBookById(id:number): Observable<number>{
    return this.http.delete<number>(this.bookApiUrl+'/'+id);
  }
 

}
