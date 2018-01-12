import { Component, Inject, OnInit} from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { SharedService } from './services/shared.service';
import {ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  private isLoggedIn: Boolean;
  isUser ={};
  wrapper: boolean = false;

  constructor(public authService: AuthService, private router: Router, private shared: SharedService) {
    this.authService.afAuth.auth.onAuthStateChanged(
      (auth) => {
        if (auth == null) {
          console.log("Logged out");
          this.isLoggedIn = false;
          this.router.navigate(['login']);
        } else {
          this.isLoggedIn = true;
          console.log("Logged in");
          console.log("name z app component" + auth.displayName);
          this.router.navigate(['']);
          this.shared.setCallback(this.isAdmin());
        }
      }
    );

  }

  toggleSidebar(e) {
    e.preventDefault();
    this.wrapper = !this.wrapper;
  }

  isAdmin(){
    var user = localStorage.getItem('currentUser');
    var isUser = JSON.parse(user);
    if(isUser.email == "aaa@aaa.com"){
      console.log('imie jesli marcin', isUser)
      return true;

    }else{
        console.log('imie jesli NIE marcin', isUser)
      return false;
    }
  }
}
