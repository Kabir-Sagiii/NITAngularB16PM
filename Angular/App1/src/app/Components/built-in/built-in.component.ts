import { Component, OnInit } from '@angular/core';

interface IProducts {
  bName:string,
  pName:string,
  price:number,
  mDate:Date
}

@Component({
  selector: 'app-built-in',
  templateUrl: './built-in.component.html',
  styleUrls: ['./built-in.component.css']
})
export class BuiltInComponent implements OnInit {

  constructor() { }

  Products:IProducts = {
     bName:"Apple",
     pName:"Iphone 12 Pro",
     price:90000,
     mDate:new Date("1-05-2020")
  }

  mobileProducts:string[] = ["Sumsung note 9","Iphone 12","Iphone 13","Oneplus9","Oppo V23","Vivo A23","Samsung Note 22"]

  newProducts :any[] = [
    {name:"Iphone 13",city:"Hyd"},
    {name:"Iphone 12",city:"Delhi"},
    {name:"Iphone 13",city:"Banglore"},
    {name:"Iphone 13",city:"Pune"},
     {name:"Iphone 13",city:"Chennai"},

  ]

  statusMessage:any = {
    "Hyd":"Product will be Delivered in 2 days",
    "Delhi":"Product will be Delivered  on same day",
    "Banglore":"Product will be Delivered in 1 days",
    "other":"Product will be delivered in a week"
  }
  ngOnInit(): void {
  }

}
