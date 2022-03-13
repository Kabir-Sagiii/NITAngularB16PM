import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-idchild',
  templateUrl: './idchild.component.html',
  styleUrls: ['./idchild.component.css']
})
export class IdchildComponent implements OnInit {
   @Input()childData:string = ""
     name1:string = ""
  constructor() { }

  ngOnInit(): void {
  }

}
