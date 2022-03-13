import { Component, EventEmitter, OnInit,Output } from '@angular/core';

@Component({
  selector: 'app-childt-decorator',
  templateUrl: './childt-decorator.component.html',
  styleUrls: ['./childt-decorator.component.css']
})
export class ChildtDecoratorComponent implements OnInit {
   childData:string = ""
      @Output()customEvent:EventEmitter<string> = new EventEmitter()
  constructor() { }

  sendDataToParent() {
    // alert(this.childData)
    this.customEvent.emit(this.childData)
  }

  ngOnInit(): void {
  }

}
