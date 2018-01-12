import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { SearchPipe } from '../services/search.pipe';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  users: {};
  p: number = 1;

  constructor(private usersService: UsersService) { 
    this.showUsers();
  }

  ngOnInit() {
 
  }

  showUsers(){
  this.usersService.getUsers()
      .then( data => this.users = data);
  }
}
