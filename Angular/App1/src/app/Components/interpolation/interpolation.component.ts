import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {

  count:number = 100
  textAreaData:string =""

  getData(e:any) {
   this.textAreaData = e.target.value
  }

  constructor() { }

  ngOnInit(): void {
  }

}
