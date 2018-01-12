import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';


@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css']
})
export class UsersPageComponent implements OnInit {

  constructor(private shared: SharedService) { }

  ngOnInit() {
  }

  isAdmin(){
   return this.shared.getCallback();

  }
}
