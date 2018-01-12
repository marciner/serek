import * as firebase from 'firebase/app';
import { firebaseConfig } from '../app.module'
import { Http } from '@angular/http';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { KayakService } from './kayaks.service';

import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class OrdersService {
    error: any;
    request: {} = {status: 'Nowa'}

    constructor( private http: Http, private db: AngularFireDatabase,
                    private kayakService: KayakService) {}

        addOrder(order){
            const userOrder = JSON.stringify(order);
            return this.http.post(`${firebaseConfig.databaseURL}/orders.json`, userOrder)
            .toPromise()
            .catch((error) => {
              this.error = error;
              console.log('error from orders service' , this.error);
            
            });
        }

        getOneOrder(id){
            return this.http.get(`${firebaseConfig.databaseURL}/orders/${id}.json`)
            .toPromise()
        }

        editOrder(order){

            //to not populate id in database 
            let orderID = order.id;
            order.id = null
           let jsonOrder = JSON.stringify(order)
            return this.http.patch(`${firebaseConfig.databaseURL}/orders/${orderID}/.json`, jsonOrder )
            .toPromise()
            .then(response => {
                // this.convert(response.json())
                console.log('jedno zamowienie ',response )
            })
            .catch((error) => {
                this.error = error;
                console.log('error from orders service przy edytowaniu zamowienia' , this.error);
              
              });
        }

        changeOrderStatus(order, status){
            this.request['status'] = status;
            let jsonStatus = JSON.stringify(this.request);
            return this.http.patch(`${firebaseConfig.databaseURL}/orders/${order.id}/.json`, jsonStatus)
            .toPromise()
            .catch((error) => this.error = error)
        }

        setFinalPrice(){

        }

        getAllOrders(){

                 return this.http.get(`${firebaseConfig.databaseURL}/orders.json`)
                 .toPromise()
                .then(response => this.convert(response.json()))
                .catch((error) => this.error = error)

 
                
        }

        private convert(convertResponse){
         
             return Object.keys(convertResponse)
                .map(id => ({
                    id: id,
                    user: convertResponse[id].user,
                    route: convertResponse[id].route,
                    reservationDate: convertResponse[id].reservationDate,
                    kayaks: convertResponse[id].kayaks,
                    time: convertResponse[id].time,
                    comments: convertResponse[id].comments,
                    price: convertResponse[id].price,
                    status: convertResponse[id].status,

                }))
        }
        
}
