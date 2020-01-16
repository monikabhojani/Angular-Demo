import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver, OnInit } from '@angular/core';
import { MessageComponent } from './message/message.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'viewchild';

  constructor(private resolver:ComponentFactoryResolver){}

  @ViewChild('messagecontainer', {read: ViewContainerRef, static:false}) entry;

  ref:any;
 

  dynamicLoadomponent(){
    this.entry.clear();
    this.ref = this.entry.createComponent(this.resolver.resolveComponentFactory(MessageComponent)); 
    
  }

  destroycomponent(){   
    this.ref.destroy();
  }
}
