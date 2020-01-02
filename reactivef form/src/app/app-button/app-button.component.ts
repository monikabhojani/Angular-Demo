import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-app-button',
  templateUrl: './app-button.component.html',
  styleUrls: ['./app-button.component.scss']
})
export class AppButtonComponent implements OnInit {
  
  btntext:string = "add tea";
  
  constructor() { }

  ngOnInit() {
  }
 

  add(){
    document.getElementById('number').innerHTML = '7';
  }

}
