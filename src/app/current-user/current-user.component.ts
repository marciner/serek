import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-current-user',
  templateUrl: './current-user.component.html',
  styleUrls: ['./current-user.component.css']
})
export class CurrentUserComponent implements OnInit {
  currentUser: {};
  objectKeys = Object.keys;

  constructor(private usersService: UsersService) {
    this.usersService.getCurrentUser()
      .then(result => this.currentUser = result);  
  }

  ngOnInit() {

  }


}
