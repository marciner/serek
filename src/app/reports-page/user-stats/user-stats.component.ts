import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from '../../services/users.service';


@Component({
  selector: 'app-user-stats',
  templateUrl: './user-stats.component.html',
  styleUrls: ['./user-stats.component.css']
})
export class UserStatsComponent implements OnInit {
  @Input() orders;
  @Input() routes;
  hoursOnKayak:number = 0;
  kmsOnKayak:number = 0;
  currentUser: {};



  constructor(private usersService: UsersService) { 
    this.usersService.getCurrentUser()
    .then(result => {this.currentUser = result; console.log('user ', result)}); 
  
  }

  ngOnInit() {
    
  }

  getUserStats(orders, user, routes){

      orders.forEach(order => {
        let selectedRoutePrice = order.selectedRoute.split(",")[1]
          if(order.phone == user.phone && order.status == 'Wykonana'){
            routes.forEach(route => {
              if(route.price == selectedRoutePrice){
                this.kmsOnKayak += route.length;
                this.hoursOnKayak += route.time
              }
            })
          }
      })

  }

  
  generateStats(){
    this.getUserStats(this.orders, this.currentUser, this.routes);
  }
}
