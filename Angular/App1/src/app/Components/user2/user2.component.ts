import { Component, OnInit } from '@angular/core';
import {UserService} from '../../Services/user.service'

@Component({
  selector: 'app-user2',
  templateUrl: './user2.component.html',
  styleUrls: ['./user2.component.css']
})
export class User2Component implements OnInit {
  serviceData:string = ""
  constructor(private userservice:UserService) { }

  getDataFromService() {
    this.serviceData = this.userservice.userData
  }

  ngOnInit(): void {
  }

}
