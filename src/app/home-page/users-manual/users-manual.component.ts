import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-users-manual',
  templateUrl: './users-manual.component.html',
  styleUrls: ['./users-manual.component.css']
})
export class UsersManualComponent implements OnInit {
  @Input() admin:boolean;
  constructor() { }

  ngOnInit() {
  }

}
