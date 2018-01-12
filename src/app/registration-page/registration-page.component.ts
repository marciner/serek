import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {AuthService} from "./../services/auth.service";
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RegistrationPageComponent {
  public error: any;
  complexForm : FormGroup;

  constructor(private authService: AuthService, fb: FormBuilder) {
    this.complexForm = fb.group({
      'name' : [null, Validators.required],//standardvalue in input, validation
      'email': [null, Validators.required],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(6)])],
      'city': "",
      'street': "",
      'housenumber': "",
      'zip': "",
      'phone': [null, Validators.compose([Validators.required, Validators.minLength(9)])]

    });
  }


  register(event, name, email, password, city, street, houseNumber, zip, phone){
    event.preventDefault();
  const registrationDate = new Date();
  this.authService.registerUser(email, password)
      .then(() => {
        this.authService.saveUserInfoFromForm(name, email, city, street, houseNumber, zip, phone, registrationDate);
      })
      .catch((error) => {
        this.error = error;
        console.log('error from registration page' , this.error.message);
      });
  }

  submitForm(value: any){
    console.log(value);
  }

}
