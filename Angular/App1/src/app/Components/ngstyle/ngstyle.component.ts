import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngstyle',
  templateUrl: './ngstyle.component.html',
  styleUrls: ['./ngstyle.component.css']
})
export class NgstyleComponent implements OnInit {

  circleStyle:any = {
    position:'',
    left:'',
    top:''
  }
    divContainerStyle = {
      backgroundColor:""
    }
  getStyledCircleComp(event:any) {
     this.circleStyle = {
    position:'fixed',
    left:event.clientX + 'px',
    top: event.clientY + 'px'
  }
    this.divContainerStyle = {
      backgroundColor:"green"
    }
  }
   changeStyle() {
     this.circleStyle = {
    position:'',
    left:'',
    top:''
  }
   this.divContainerStyle = {
      backgroundColor:""
    }

   }
  constructor() { }

  ngOnInit(): void {
  }

}
