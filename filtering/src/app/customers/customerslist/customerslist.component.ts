import { Component, OnInit, Input } from '@angular/core';
import { ICustomer } from 'src/app/shared/interfaces';
import { OrderPipe } from 'ngx-order-pipe';


@Component({
  selector: 'app-customerslist',
  templateUrl: './customerslist.component.html',
  styleUrls: ['./customerslist.component.css']
})
export class CustomerslistComponent implements OnInit {
  @Input() filteredustomers:ICustomer[];
  customerOrderTotal:number;

  // sorting
  order: string = 'name';
  reverse:boolean = false;
  sortedCollection: any[];

  // filter
  searchText: string;
 

  constructor(private orderPipe: OrderPipe) { 
    this.sortedCollection = orderPipe.transform(this.filteredustomers, 'name');
  }

  ngOnInit() {
    // calculate order total
    this.customerOrderTotal=0;
      this.filteredustomers.forEach((val)=>{
        this.customerOrderTotal += val.orderTotal;
    });
   
  }
 
  sort(value:string){
    if(this.order===value){
      this.reverse = !this.reverse;
    }
    this.order=value;
  }

  

}
