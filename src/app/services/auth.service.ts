
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { firebaseConfig } from '../app.module'
import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';


@Injectable()
export class AuthService {
  error: any;
  user: Observable<firebase.User>;
  resposne;



  constructor(public afAuth: AngularFireAuth, private router: Router, private http: Http) {
    this.user = afAuth.authState;
    console.log(afAuth.authState);
  }
  /**
     * Calls the AngularFire2 service to register a new user
     * returns firebase.Promise<void>
     */
  registerUser(email, password){
    console.log(email);
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
    .then(
      () =>{
        console.log('current user z auth service - registerUser  method' + JSON.stringify(this.afAuth.auth.currentUser));
        localStorage.setItem('currentUser',JSON.stringify(this.afAuth.auth.currentUser));
        //dorobic tu pobieranie info o userze z bazy i ladowanie tego do localstorage
      }
    );
  }

  /**
     * Saves information to display to screen when user is logged in

     * returns firebase.Promise<void>
     */

     saveUserInfoFromForm(name, email, city, street, houseNumber, zip, phone, registrationDate){
       const uid = this.afAuth.auth.currentUser.uid;
       const user ={
         uid: uid,
         name: name,
         email: email,
         city: city,
          street: street,
          houseNumber: houseNumber,
          zip: zip,
          phone: phone,
         registrationDate: registrationDate
       }
       const userjson = JSON.stringify(user);
       return this.http.post(`${firebaseConfig.databaseURL}/registeredUsers.json`, userjson).subscribe((error)=>this.error = error);

     }


     /**
 * Logs the user in using their Email/Password combo


 * returns firebase.Promise<FirebaseAuthState>
 */
  loginWithEmail(email, password){
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(
        () =>{
          console.log('current user z auth service' + JSON.stringify(this.afAuth.auth.currentUser));
          localStorage.setItem('currentUser',JSON.stringify(this.afAuth.auth.currentUser));
        }
      )
  }

  loginWithGoogle() {
  return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .then(
      () =>{
        console.log('current user z auth service' + JSON.stringify(this.afAuth.auth.currentUser));
        localStorage.setItem('currentUser',JSON.stringify(this.afAuth.auth.currentUser));
      }
    );
  }

  logout() {
    this.afAuth.auth.signOut();
    localStorage.removeItem('currentUser');
  }

  resetPassword(email):firebase.Promise <any> {
    // this.afAuth.resetPassword(email)
    // .then(() => this.passReset = true)
    return this.afAuth.auth.sendPasswordResetEmail(email);
    // .toPromise();
    // .then((response) => response = this.resposne)
    // .catch((error) => this.error = error)

  }
}
