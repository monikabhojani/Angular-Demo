import { Component, OnInit } from '@angular/core';
import { ICustomer } from '../shared/interfaces';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  title:string = 'Customers';

  constructor() { }

  people:ICustomer[];

  ngOnInit() {

    this.people=[
      {id:1, name:'Monika Bhojani', city:'Ahmedabad', orderTotal:9.99, customerSince: new Date(
        2019,11,5
      )},
      {id:2, name:'lorem ipsum', city:'Rajkot', orderTotal:8.99, customerSince: new Date(
        2019,11,6
      )},
      {id:3, name:'Test data', city:'Surat', orderTotal:6.99, customerSince: new Date(
        2019,11,7
      )},
      {id:4, name:'fdsfsd fdsfds', city:'Pune', orderTotal:599, customerSince: new Date(
        2019,11,8
      )},
    ];

  }

}
