import { Component, OnInit } from '@angular/core';
import {EmpSService} from "../../../Services/emp-s.service"

@Component({
  selector: 'app-table-c',
  templateUrl: './table-c.component.html',
  styleUrls: ['./table-c.component.css']
})
export class TableCComponent implements OnInit {
   empDetails:any[] = []
  constructor(private empservice:EmpSService) { }

  HideTable() {
    this.empDetails = []
  }

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
