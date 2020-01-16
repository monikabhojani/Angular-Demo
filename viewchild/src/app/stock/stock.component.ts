import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {

  @Input() stock:number;

  @Input() stockid:number;

  @Output() updatedstockemitter = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  valuesubmit(s:HTMLInputElement){
    this.updatedstockemitter.emit({id:this.stockid, updatedvalue:s.value});
  }
}
