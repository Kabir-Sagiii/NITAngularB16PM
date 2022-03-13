import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngclass',
  templateUrl: './ngclass.component.html',
  styleUrls: ['./ngclass.component.css']
})
export class NgclassComponent implements OnInit {

  constructor() { }

  getInputData(inputElementData:any) {
     alert(inputElementData.value)
     console.log(inputElementData.required)
      // for( var property in inputElementData){
      //     console.log(property)
      // }
  }

  ngOnInit(): void {
  }

}
