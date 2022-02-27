import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showhidepassword',
  templateUrl: './showhidepassword.component.html',
  styleUrls: ['./showhidepassword.component.css']
})
export class ShowhidepasswordComponent implements OnInit {

  passwordtype:string = "password"

  constructor() { }
  changeType() {
    this.passwordtype ==="password" ? this.passwordtype = "text" :this.passwordtype = "password"
  }

  ngOnInit(): void {
  }

}
