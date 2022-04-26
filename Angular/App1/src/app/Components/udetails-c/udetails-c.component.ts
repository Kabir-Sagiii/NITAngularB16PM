import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserdataService } from 'src/app/Services/userdata.service';

@Component({
  selector: 'app-udetails-c',
  templateUrl: './udetails-c.component.html',
  styleUrls: ['./udetails-c.component.css']
})
export class UDetailsCComponent implements OnInit {

  constructor(private route:ActivatedRoute, private userdata:UserdataService) { }
  usersData:any
  useremail:any
  filterUser:any
  ngOnInit(): void {
    // alert(this.route.snapshot.paramMap.get('email'))
    this.usersData = this.userdata.usersProfile
    this.useremail = this.route.snapshot.paramMap.get('email')
       this.filterUser = this.usersData.results.filter((ele:any)=>ele.email===this.useremail)
  }

}
