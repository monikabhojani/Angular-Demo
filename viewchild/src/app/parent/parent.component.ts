import { Component, OnInit, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

    
  constructor() { }

  ngOnInit() { }
 
  displaycounter(event){
    console.log(event);
  }

  parentmethod(){
    alert('parent method call');
  }
}
