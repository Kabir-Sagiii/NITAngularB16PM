import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twoway',
  templateUrl: './twoway.component.html',
  styleUrls: ['./twoway.component.css']
})
export class TwowayComponent implements OnInit {
  textBoxData:string="Dummy Data"
  constructor() { }

  updateData():void {
    this.textBoxData = "Data got updated"
  }

  ngOnInit(): void {
  }

}
