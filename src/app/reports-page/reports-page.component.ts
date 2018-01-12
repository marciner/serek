import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';
import { UsersService } from '../services/users.service';
import { OrdersService } from '../services/orders.service';
import { KayakService } from '../services/kayaks.service';
import { RoutesService } from '../services/routes.service';

@Component({
  selector: 'app-reports-page',
  templateUrl: './reports-page.component.html',
  styleUrls: ['./reports-page.component.css']
})
export class ReportsPageComponent implements OnInit {

  users: {};
  orders: {};
  kayaks: {};
  routes: {};

  public kayaksLabels:string[] = [];

  constructor(private shared: SharedService,
              private usersService: UsersService,
              private ordersService: OrdersService,
              private kayakService: KayakService,
              private routesService: RoutesService
  ) { 
    this.showUsers();
    this.showOrders();
    this.showKayaks();
    this.showRoutes();
  }

  ngOnInit() {
   
  }

  isAdmin(){
    return this.shared.getCallback();
 
   }

   showUsers(){
    this.usersService.getUsers()
        .then( data => this.users = data);
    }


    showOrders(){
      this.ordersService.getAllOrders()
        .then(data => this.orders = data);
    }

    showKayaks(){
      this.kayakService.getKayaks()
      .then(data => this.kayaks = data);
    }

    showRoutes(){
      this.routesService.getRoutes()
      .then(data => this.routes = data);
    }



}
