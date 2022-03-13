import { Component, OnInit } from '@angular/core';
import {UserService} from "../../Services/user.service"

@Component({
  selector: 'app-user1',
  templateUrl: './user1.component.html',
  styleUrls: ['./user1.component.css']
})
export class User1Component implements OnInit {

  Data:string = ""

  constructor(private userservice:UserService) { }

  storeDatainService() {
    this.userservice.userData = this.Data
  }
  ngOnInit(): void {
  }

}
