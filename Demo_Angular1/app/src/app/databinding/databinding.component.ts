import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.scss']
})
export class DatabindingComponent implements OnInit {
  fname:string = '';

  constructor() { }

  ngOnInit(): void {
  }
  dname: string = "Sushil"
  msg:string ="";
  onBuy(){
    this.msg="Product Purchased Successfully";
  }
  
}
