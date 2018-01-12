import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgModel, FormArray, FormControl} from '@angular/forms';
import 'rxjs/add/operator/toPromise';
@Component({
  selector: 'app-forgot-password-modal',
  templateUrl: './forgot-password-modal.component.html',
  styleUrls: ['./forgot-password-modal.component.css']
})
export class ForgotPasswordModalComponent implements OnInit {
  
  resetPswdForm : FormGroup;
  emailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


  @Output() onForgotPassword: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() onResetPassword: EventEmitter<boolean> = new EventEmitter<boolean>();
  forgotPassword: boolean;
  constructor(fb: FormBuilder) {
    this.resetPswdForm = fb.group({
      'email': [null,  [Validators.pattern(this.emailRegExp), Validators.required]]
    });
   }

  ngOnInit() {
  }

  closeModal(){
    this.forgotPassword = false;
    this.onForgotPassword.emit(this.forgotPassword);
    console.log('kliknieto zmkanij '+ this.forgotPassword);

  }
  resetPassword(event, email){
    event.preventDefault();
    this.onResetPassword.emit(email);
    
    
    
    // //zobaczyc czy wyskakuja tu jakies bledy - > dodac obsluge bledow
    // console.log('form reste ', this.resetPswdForm)
    // console.log('null i true ', null && true);//null
    // console.log('null i false ', null && false);//null
    // console.log('false i null ', false && null);//false
    // console.log('true i null ', true && null);//null
    // console.log('true i true ', true && true);//true
    // console.log('true i false ', true && false)//false
    // console.log('false i true ', false && true)//false
    // console.log('!null ', !null)//true
    // console.log('true albo null ', true || null)//true
  }

}
