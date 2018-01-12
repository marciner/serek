import * as firebase from 'firebase/app';
import { Http } from '@angular/http';
import { firebaseConfig } from '../app.module';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class UsersService {
    error: any;
    editableUser = {};



  constructor(private http: Http, public afAuth: AngularFireAuth){}

  getUsers(){
    return this.http.get(`${firebaseConfig.databaseURL}/registeredUsers.json`)
     .toPromise()
     .then(response => this.convert(response.json()))
     .catch((error) => this.error = error)
  }



  private convert(convertResponse){

    return Object.keys(convertResponse)
      .map(id => ({
        id: id,
        uid: convertResponse[id].uid,
        name: convertResponse[id].name,
        phone: convertResponse[id].phone,
        email: convertResponse[id].email,
        street: convertResponse[id].street,
        houseNumber: convertResponse[id].houseNumber,
        city: convertResponse[id].city,
        zip: convertResponse[id].zip,
        registrationDate: convertResponse[id].registrationDate,
        photo: convertResponse[id].photo
      }))

    }

    

    findCurrentUser(userzy){
      const currentUserUID = JSON.stringify(this.afAuth.auth.currentUser.uid);
      console.log('uid zalogowanego usera '+JSON.stringify(this.afAuth.auth.currentUser.uid))
      if(userzy){
        for(let user of userzy){
          console.log('id userow' + user.id);
          const uidCurrentUser = JSON.stringify(user.uid);
          if(uidCurrentUser == currentUserUID){
            console.log('id userka zwycieskiego ' + typeof(user.id) + user.id)
              return user;
          }
        }
      }else{
      console.log('userzy sie nie zaladowali')
      }

    }

  getCurrentUser(){
    return this.getUsers()
      .then(result => this.findCurrentUser(result));
  }

  getUsersDetails(id){
  
  return this.http.get(`${firebaseConfig.databaseURL}/registeredUsers/${id}.json`)
      .toPromise()
     .then(response => response.json());
  }

  editUser(userId, user){

    // if(user.name != null){
    //   this.editableUser['name'] = user.name;
    // };
    // if(user.city != null){
    //  this.editableUser['city'] = user.city;
    // };
    // if(user.street != null){
    //   this.editableUser['street'] = user.street;
    // };
    // if(user.houseNumber != null){
    //   this.editableUser['houseNumber'] = user.houseNumber;
    // };
    // if(user.zip != null){
    //   this.editableUser['zip'] = user.zip;
    // };
    // if(user.phone != null){
    //   this.editableUser['phone'] = user.phone;
    // };
console.log('otrzymany user do serwisu ', user)
    const userToEdit = JSON.stringify(user);
    return this.http.patch(`${firebaseConfig.databaseURL}/registeredUsers/${userId}/.json`, userToEdit)
    .toPromise()
    // .then(()=> this.editableUser = {})
  }

}
