import * as firebase from 'firebase/app';
import { firebaseConfig } from '../app.module'
import { Http } from '@angular/http';

import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Kayak } from '../interfaces/kayak.interface';

@Injectable()
export class KayakService {
  error: any;
  editableKayak = {};



  constructor( private http: Http) {

  }

     addKayak( name, photo, capacity, description, price, amount){
       const kayak ={
          name: name,
          photo: photo,
          capacity: capacity,
          description: description,
          price: price,
          amount: amount

       }
       console.log('kajak z serwisu do utworzenia przed strinify ', kayak)
       const userKayak = JSON.stringify(kayak);
       console.log('kajak z serwisu do utworzenia ', userKayak)
       return this.http.post(`${firebaseConfig.databaseURL}/kayaks.json`, userKayak)
        .toPromise()
        .catch((error) => {
          this.error = error;
          console.log('error from kayapks page' , this.error);
        
        });
     }

     editKayak(kayak){//zrobic

      // console.log('taiki kajak zostal dostarczony do kajak servce do edycji ', kayak)
      //  if(kayak.name != null){
      //    this.editableKayak['name'] = kayak.name;
      //  };
      //  if(kayak.capacity != null){
      //   this.editableKayak['capacity'] = kayak.capacity;
      //  };
      //  if(kayak.description != null){
      //    this.editableKayak['description'] = kayak.description;
      //  };
      //  if(kayak.price != null){
      //    this.editableKayak['price'] = kayak.price;
      //  };
      //  if(kayak.amount != null){
      //    this.editableKayak['amount'] = kayak.amount;
      //  };
      //  if(kayak.photo != null){
      //   this.editableKayak['photo'] = kayak.photo;
      // };
       //zmienic n to na loopa

      //  for (var val in kayak){
      //    if(val != null){
      //      this.editableKayak[val] = kayak[val];
      //    }
      //  }

       const kayakToEdit = JSON.stringify(kayak);
       console.log('kajak dostarczony do edycji ale po stringifaju ',this.editableKayak )
       return this.http.patch(`${firebaseConfig.databaseURL}/kayaks/${kayak.id}/.json`, kayakToEdit)//todo
        .toPromise()
        .then(()=> this.editableKayak = {})
     }

     getKayaks(){
       return this.http.get(`${firebaseConfig.databaseURL}/kayaks.json`)
        .toPromise()
        .then(response => this.convert(response.json()))
        .catch((error) => this.error = error)
     }
     getKayak(id){
      return this.http.get(`${firebaseConfig.databaseURL}/kayaks/${id}.json`)
      .toPromise()
      .then(response => response.json());

     }

     removeKayak(kayak){
       return this.http.delete(`${firebaseConfig.databaseURL}/kayaks/${kayak.id}.json`)
        .toPromise();
     }

    private convert(convertResponse){

      return Object.keys(convertResponse)
        .map(id => ({
          id: id,
          name: convertResponse[id].name,
          photo: convertResponse[id].photo,
          capacity: convertResponse[id].capacity,
          description: convertResponse[id].description,
          price: convertResponse[id].price,
          amount: convertResponse[id].amount
        }))

      }




}
