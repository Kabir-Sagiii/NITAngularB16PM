import { Component, OnInit } from '@angular/core';
import { UserdataService } from 'src/app/Services/userdata.service';

@Component({
  selector: 'app-users-profile-c',
  templateUrl: './users-profile-c.component.html',
  styleUrls: ['./users-profile-c.component.css']
})
export class UsersProfileCComponent implements OnInit {

  usersData:any

  constructor(private userdata:UserdataService) { }

  ngOnInit(): void {
   this.usersData=  this.userdata.usersProfile
  }

}
