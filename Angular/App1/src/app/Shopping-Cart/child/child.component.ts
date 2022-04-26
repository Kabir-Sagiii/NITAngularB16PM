import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy{
  @Input() data:string = ""
  childData:string = ""
  constructor() {
    console.log("Constructor is called")
   }
   changeData() {
     this.childData = "Updated something"
   }
   ngAfterContentChecked(): void {
      console.log("ngAfterContentChecked is called")
   }
  
   ngDoCheck(): void {
      console.log("ngdocheck is called")
   }
  ngOnInit(): void {
    console.log("ngOnInit is called")
  }
   ngOnChanges() {
console.log("ngOnChanges is called")
   }

   ngAfterContentInit(): void {
     console.log("ngAfterContentInit is called")
   }

   ngAfterViewInit(): void {
     console.log("ngAfterViewInit is called")
   }
   ngAfterViewChecked(): void {
     console.log("ngAfterViewChecked is called")
     
   }
   ngOnDestroy(): void {
     console.log("ngOnDestroy is called")
   }

}
