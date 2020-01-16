import { Component, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import { AppComponent } from '../app.component';



@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  @ViewChild('AppComponent', {static:false}) appchild:AppComponent;
 

  constructor() { }

  ngOnInit() {
  }

  destroychild(){
    this.appchild.destroycomponent();
  }


}
