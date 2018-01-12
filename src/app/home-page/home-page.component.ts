import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { SharedService } from '../services/shared.service';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class HomePageComponent implements OnInit {
  admin: boolean;

  constructor(private authService: AuthService, private router: Router, private shared: SharedService) {
  }
  ngOnInit() {
  }

  isAdmin(){
    this.admin = this.shared.getCallback();
    return this.shared.getCallback();
  
   }
}
