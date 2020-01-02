import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
declare var $: any; 
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  pagename:string;
 
  constructor(private router:Router, private route:ActivatedRoute) { }

  ngOnInit() {
  }

  goHome(){
    this.router.navigate(['home']); 
    return this.pagename = 'home';
  }
  goAbout(){
    this.router.navigate(['about']);
    return this.pagename = 'about';
  }
  goContact(){
    this.router.navigate(['contact']);
    return this.pagename = 'contact';
  }
 

 
 
}
