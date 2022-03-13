import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngforfetch',
  templateUrl: './ngforfetch.component.html',
  styleUrls: ['./ngforfetch.component.css']
})
export class NgforfetchComponent implements OnInit {
  showTable:boolean = false
  userData:any = []
  filterUserData:any = []
  constructor() { }

  getUserData():void {
    // this.showTable = true
       fetch("https://randomuser.me/api/?results=50").then((res)=>{
         console.log(res)
             return    res.json()
       }).then((data)=>{
           console.log(data.results)
           this.userData = data.results
           this.filterUserData = data.results
           this.showTable = true
       },(errorMsg)=>{
       alert("Error while getting the data")
       })
  }
    filterAllData() {
       this.filterUserData = this.userData

    }
    filterMaleData() {
   this.filterUserData = this.userData.filter(function(ele:any){
               return ele.gender === "male"
         })

    }
     filterFemaleData() {
   this.filterUserData= this.userData.filter(function(ele:any){
                 return ele.gender === "female"
                })
     }

  ngOnInit(): void {
  }

}
