import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {

  mobiles:string[] = ["Iphone 13","oneplus9 pro","Vivo A23","oppo 24","Iphone 12"]

   mobileBrand:any = [{
     brandName:"Apple",
     models:["Iphone 13","Iphone 12"]
   },{
      brandName:"One Plus",
     models:["oneplus 9","oneplus 8pro"]
   },{
      brandName:"Vivo",
     models:["Vivo A23","Vivo v24 pro"]
   }]

  constructor() { }

  ngOnInit(): void {
  }

}
