import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private cs:CookieService) { }

  ngOnInit() {
    console.log("Full Name : "+ localStorage.getItem("fullname"));
    console.log("Age : "+ localStorage.getItem("age"));
    console.log("Person : "+ localStorage.getItem("person"));

    let obj = JSON.parse(localStorage.getItem("person"));
    console.log("contact : "+ obj.contact);
    console.log("Email : "+ obj.email);

    console.log("Username : "+ sessionStorage.getItem("username")); 
      
    
    console.log("c_name : "+ this.cs.get("c_name")); 

    if(this.cs.check("c_name"))
    {
      console.log("Cookie Name = "+this.cs.get("c_name"));
    }
    else{
      console.log("Cookie Not Found......");
    }

  }

}
