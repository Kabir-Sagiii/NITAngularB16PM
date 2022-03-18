import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent implements OnInit {
   selectErrorMsg:string = ""
  constructor() { }

  getError(event:any) {
    alert(event.target.value)
      if(event.target.value === 'nocity') {
        this.selectErrorMsg = "Select the City"
      } else {
        this.selectErrorMsg = ""
      }
  }

  ngOnInit(): void {
  }

}
