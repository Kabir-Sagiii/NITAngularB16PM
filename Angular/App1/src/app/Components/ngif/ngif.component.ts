import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.css']
})
export class NgifComponent implements OnInit {
    carImage:boolean = false
   switchOn:boolean = false
   carVisible:boolean = false
    bikeVisible:boolean = false
     bicycleVisible:boolean = false

     changebicycleStatus(e:any) {
          // alert(e.target.name)
          if(e.target.name === "unchecked") {
            this.bicycleVisible = true
            e.target.name = "checked"
          } else {
             this.bicycleVisible = false
            e.target.name = "unchecked"
          }
     }

    mobileBrand:any = {
         mobilename:"Iphone 13",
         price:90000,
         image:"https://www.concept-phones.com/wp-content/uploads/2021/04/iphone-13-12s-render-coverpigtou-april-2021-3.jpg"
    }

  constructor() { }

  ngOnInit(): void {
  }

}
