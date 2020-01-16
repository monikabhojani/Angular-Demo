import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Output() valuechange = new EventEmitter();

  @Output() parentcallemitter = new EventEmitter();
  counter = 0;

  constructor() { }

  ngOnInit() { }

  valuehange(){
    this.counter = this.counter + 1;
    // console.log(this.counter);
    this.valuechange.emit(this.counter);

  }

  parentcall(){
    this.parentcallemitter.emit();
  }

   



}
