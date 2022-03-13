import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngswitch',
  templateUrl: './ngswitch.component.html',
  styleUrls: ['./ngswitch.component.css']
})
export class NgswitchComponent implements OnInit {
  userData:any = {}
  showContainers:boolean = false
  userStatus :string = "personalInfo"
  constructor() { }

  updateStatus(status:string) {
    // alert("working")
    this.userStatus = status
  }

  getDataFromServer() {
    fetch("https://randomuser.me/api/?results=1").then((res)=>{
                   console.log(res.json)
                  return  res.json()
    }).then((data)=>{
    console.log(data.results[0])
        this.userData = data.results[0]
        this.showContainers = true
    })
  }

  ngOnInit(): void {
  }

}
