import { Component, OnInit } from '@angular/core';
import {EmpSService} from "../../../Services/emp-s.service"

@Component({
  selector: 'app-card-c',
  templateUrl: './card-c.component.html',
  styleUrls: ['./card-c.component.css']
})
export class CardCComponent implements OnInit {
  empDetails:any[] = []
  constructor( private empservice:EmpSService) { }
  CallService() {
    this.empservice.getDataFromServer().then((res)=>{
       return  res.json()
    }).then((actualdata)=>{
       console.log(actualdata)
       this.empDetails = actualdata.results
    })
  }

  ngOnInit(): void {
  }

}
