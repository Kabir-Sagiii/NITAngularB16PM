import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {

    borderTable:string = "12px"
    widthTable:string = "500px"
    heightTable:string="500px"

    mobileProduct = {
      image:"https://th.bing.com/th/id/OIP.wdunEj-SsP4W3AUI6bHF8AHaHF?pid=ImgDet&rs=1",
      name:"Iphone 12",
      price:90000,
      stock:false
    }
      textBoxValue:string =""

      getTotal():number {
       return this.mobileProduct.price * 9

      }

      changeTextValue(e:any):void {
        this.textBoxValue = e.target.value

      }
    

 

}
