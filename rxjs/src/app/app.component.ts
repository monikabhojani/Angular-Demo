import { Component } from '@angular/core';
import { of, observable, Observable, from, interval, fromEvent, pipe } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, filter } from 'rxjs/operators';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rxjs';

  onClick() {
    this.createobservable();
  }

  // createobservable(){
  //    const myObservable = of(1,2,3,4,5);
  //    myObservable.subscribe(x=>console.log(x), err=>console.log(err), ()=>console.log('done'));
  // }


  subscriberFunction(e) {
    e.next(100);
    e.next(200);
    e.next(300);
    e.next(400);
    e.complete();
  }

  // createobservable(){
  //       const myObservable = new Observable(this.subscriberFunction);
  //       myObservable.subscribe(x=>console.log(x), err=>console.log(err), ()=>console.log('done'));
  // }


  // createobservable(){
  //   const myObservable = from(fetch('https://jsonplaceholder.typicode.com/posts'));
  //   // const myObservable= interval(5);
  //   myObservable.subscribe(x=>console.log(x), err=>console.log(err), ()=>console.log('done'));    
  // }

  // showdata:JSON;
  // createobservable(){
  //    const myObservable = ajax('https://jsonplaceholder.typicode.com/posts');     
  //    myObservable.subscribe(
  //     (x)=>{
  //       console.log(x.response);        
  //       this.showdata = x.response;
  //     }, 
  //     err=>console.log(err), 
  //     ()=>console.log('done'));    
  // }

  

  // createobservable(){

  //      const originalObservable = of(1,2,3,4,5);

  //      const newFunction = map((n:number)=>n*n);

  //      const newobservable = newFunction(originalObservable);

  //       newobservable.subscribe(
  //        (x)=>{
  //          console.log(x);   

  //       }, 
  //        err=>console.log(err), 
  //        ()=>console.log('done')
  //      );   
  //    }

  //  createobservable(){

  //   const originalObservable = of(1,2,3,4,5,6,7,8,9,10);

  //   const newFunction = pipe(
  //     filter((n:number)=>n%2==0),
  //     map((n:number)=>n*10)
  //   )

  //   const newobservable = newFunction(originalObservable);

  //    newobservable.subscribe(
  //     (x)=>{
  //       console.log(x);   

  //    }, 
  //     err=>console.log(err), 
  //     ()=>console.log('done')
  //   );   
  // }

// createobservable(){
  //   const div = document.getElementById('mydiv');

  //   const myObservable = fromEvent(div, 'mousemove');

  //  const subscription= myObservable.subscribe(
  //     (x:MouseEvent)=>{
  //       console.log(x.clientX, x.clientY);
  //       if(x.clientY < 100){
  //         subscription.unsubscribe();
  //       }
  //     }, 
  //     err=>console.log(err), 
  //     ()=>console.log('done')
  //   );   

  createcustom(){
    const div = document.getElementById('mydiv');

    const originalObservable = fromEvent(div, 'mousemove')
    .pipe(
      map((ev: MouseEvent) => ev.clientX),
    )
    .subscribe(
      (x) => { 
        console.log(x);
        if(x > 1000){
          originalObservable.unsubscribe();
        }
      },
      err => {
        return console.log(err);
      },
      () => {
        return console.log('done');
      }
    );

   
  }

  createobservable() {

    const originalObservable = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
      .pipe(
        filter((n: number) => n % 2 == 0),
        map((n: number) => n * 10)       
      ).subscribe(
        (x) => { console.log(x); },
        err => console.log(err),
        () => console.log('done')
      );
  }


}


