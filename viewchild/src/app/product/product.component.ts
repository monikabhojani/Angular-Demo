import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {


  products = [];

  constructor() { }

  ngOnInit() {
    this.products =[ 
      {'id':1, 'title':'title1', 'stock':1},
      {'id':2, 'title':'title2', 'stock':10},
      {'id':3, 'title':'title3', 'stock':145},
      {'id':4, 'title':'title4', 'stock':17},
      {'id':5, 'title':'title5', 'stock':14},
      {'id':6, 'title':'title6', 'stock':11}
    ];
  }


  stockupdate(value){
   const result = this.products.find(
      ({id}) => id === value.id
    );      
    result.stock = result.stock + parseInt(value.updatedvalue);
  }

}
