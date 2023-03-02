import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userinformation',
  templateUrl: './userinformation.component.html',
  styleUrls: ['./userinformation.component.css']
})
export class UserinformationComponent implements OnInit {
  userinfo: any;
  constructor(private userservice: UserService) { }

  ngOnInit(): void {
    this.getUserInformation()
  }
  getUserInformation() {
    this.userservice.getUserinfo().subscribe((data: any) => {
      this.userinfo = data;
    })
  }

}
