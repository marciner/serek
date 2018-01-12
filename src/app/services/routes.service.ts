import * as firebase from 'firebase/app';
import { firebaseConfig } from '../app.module'
import { Http } from '@angular/http';

import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';



@Injectable()
export class RoutesService {
  error: any;
  editableRoute = {};



  constructor( private http: Http ) {

  }

     addRoute( name, photo, length, time, description, price){
       const route ={
          name: name,
          photo: photo,
          length: length,
          time: time,
          description: description,
          price: price,


       }
       const userRoute = JSON.stringify(route);
       return this.http.post(`${firebaseConfig.databaseURL}/routes.json`, userRoute)
        .toPromise();

     }

     editRoute(route){
       const routeToEdit = JSON.stringify(route);
       return this.http.patch(`${firebaseConfig.databaseURL}/routes/${route.id}/.json`, routeToEdit)
        .toPromise();
     }

     getRoutes(){
       return this.http.get(`${firebaseConfig.databaseURL}/routes.json`)
        .toPromise()
        .then(response => this.convert(response.json()))
        .catch((error) => this.error = error)
     }
     getRouteDetails(id){
      return this.http.get(`${firebaseConfig.databaseURL}/routes/${id}/.json`)
      .toPromise()
      .then(response => response.json());
     }

     removeRoute(route){
       return this.http.delete(`${firebaseConfig.databaseURL}/routes/${route.id}.json`)
        .toPromise();
     }

    private convert(convertResponse){

      return Object.keys(convertResponse)
        .map(id => ({
          id: id,
          name: convertResponse[id].name,
          photo: convertResponse[id].photo,
          length: convertResponse[id].length,
          time: convertResponse[id].time,
          description: convertResponse[id].description,
          price: convertResponse[id].price,
        }))

      }




}
