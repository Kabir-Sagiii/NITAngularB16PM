import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
pData:string =""
showChild:boolean = true
  constructor() { }

  removeChild() {
    this.showChild = false
  }

  sendData(ref:any) {
  this.pData = ref.value
  ref.value = ""
  }

  ngOnInit(): void {
  }

}
