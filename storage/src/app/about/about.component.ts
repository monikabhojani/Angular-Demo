import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private cs:CookieService) { }

  ngOnInit() {
    if(window.localStorage && window.sessionStorage)
    {
      localStorage.clear();
      let person={
        firstname:'Monika',
        contact:'9723891267',
        email:'asdf@gmail.com'
      };
      localStorage.setItem("fullname","Monika Bhojani");
      localStorage.setItem("age","26");
      localStorage.setItem("person", JSON.stringify(person));
      

      
      sessionStorage.setItem("username","monika-session");

      this.cs.set("c_name","monika-cookie");

      

    }
    else
    {
      console.log("Your browser doesn't support localStorage or sessionStorage");
    }
  }

}
