import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {

    mobileProduct = {
      image:"https://th.bing.com/th/id/OIP.wdunEj-SsP4W3AUI6bHF8AHaHF?pid=ImgDet&rs=1",
      name:"Iphone 12",
      price:90000,
      stock:false
    }

 

}
