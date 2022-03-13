import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-idparent',
  templateUrl: './idparent.component.html',
  styleUrls: ['./idparent.component.css']
})
export class IdparentComponent implements OnInit {
  parentData:string = ""
  constructor() { }
  sendDataToChild(inputRef:any) {
    this.parentData = inputRef.value

  }

  ngOnInit(): void {
  }

}
