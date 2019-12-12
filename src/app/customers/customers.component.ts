import { Component, OnInit } from '@angular/core';
import { ICustomer } from '../shared/interfaces';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  title: string;
  people: ICustomer[];
  isVisible: boolean;
  constructor() { }

  ngOnInit() {
    this.title="Customers";
    this.isVisible=true;
    this.people=[{
      id:1, name:"Manolo", city:"Madrid",orderTotal:9.99,customerSince: new Date(2014,7,10)
      
    },
    {
      id:2, name:"Asesina", city:"Ansoain",orderTotal:19.99,customerSince: new Date(2019,7,10)
    },
    {
      id:3, name:"SilverDoe", city:"Lezkairu",orderTotal:119.99,customerSince: new Date(1999,7,27)
    },
    {
      id:4, name:"El gito", city:"Ansoain",orderTotal:0.99,customerSince: new Date(2019,7,10)
    }];
 }

 changeVisibility(){
   if(this.isVisible){
     this.isVisible=false;
   }else{
    this.isVisible=true;
   }
 }

}
