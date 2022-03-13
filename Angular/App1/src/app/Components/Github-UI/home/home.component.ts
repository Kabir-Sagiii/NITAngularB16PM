import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userGithubDetails:any = {}
  constructor() { }

  getDataFromChild(childData:any) {
    this.userGithubDetails = childData 
    console.log("Home Comp",this.userGithubDetails)
  }

  ngOnInit(): void {
  }

}
