import { Component, EventEmitter, OnInit ,Output} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
 userName:string = ""
 @Output()userGithubDetails : any = new EventEmitter()
  constructor() { }

  getUserDetail() {
     fetch(`https://api.github.com/users/${this.userName}`).then((res)=>{
           return res.json()
     }).then((userData)=>{
        console.log(userData)
        // this.userGithubDetails = userData
        this.userGithubDetails.emit(userData)
     })
  }

  ngOnInit(): void {
  }

}
