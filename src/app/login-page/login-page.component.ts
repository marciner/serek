import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
    public error: any;
    forgotPassword: boolean = false;
    email: string;
  constructor(public authService: AuthService, private router:Router) { }
  ngOnInit() {
  }

  loginWithGoogle() {
    this.authService.loginWithGoogle();
    this.router.navigate(['']);
  }

  loginWithEmail(event, email, password){
    event.preventDefault();
    this.authService.loginWithEmail(email, password)
      .then(() => {
        this.router.navigate(['']);
      })
      .catch((error: any) =>{
        if(error){
          this.error = error;
          console.log(error);
        }
      })
  }

  // resetPassword(event) {
  //   event.preventDefault();
  //   this.authService.resetPassword(this.email);
  //   console.log('emial ', this.email)
    
  // }

  goToRegister(){
    this.router.navigate(['/register']);

  }
  openPasswordModal(){
    this.forgotPassword = true;
  }
  onForgotPassword(event){
    this.forgotPassword = event;
  }
  onResetPassword(email){
    this.email = email;
    this.authService.resetPassword(this.email);
    console.log('emial ', this.email)
    this.forgotPassword = false;
  }
}
