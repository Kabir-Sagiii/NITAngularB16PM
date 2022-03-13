import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-decorator',
  templateUrl: './parent-decorator.component.html',
  styleUrls: ['./parent-decorator.component.css']
})
export class ParentDecoratorComponent implements OnInit {
  dataFromChild:string = "No Data"
  constructor() { }
 getDataFromChild(data:any) {
this.dataFromChild = data
 }
  ngOnInit(): void {
  }

}
