import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { DateAdapter, NativeDateAdapter } from '@angular/material';
import { OrdersService } from '../services/orders.service';
import { FormGroup, FormBuilder, Validators, NgModel, FormArray, FormControl} from '@angular/forms';
import { ViewEncapsulation } from '@angular/core';
import { RoutesService } from '../services/routes.service';
import { KayakService } from '../services/kayaks.service';
import { UsersService } from '../services/users.service';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NewOrderComponent implements OnInit {
  totalPrice: number = 0;
  routes = {};
  @Input() kayaks;
  users;
  data;
  orderForm : FormGroup;
  selectedd: boolean;
  currentUser: {};
  kayaksFormGroup: FormGroup = new FormGroup({});

  routeCost:number = 0;
  kayakCost: number = 0;
  

  @Input() kayaksInOrder;
  @Input() header: string;
  @Input() order;
  @Input() kayaksAmmountArray: {} = {};
  @Output() onClose: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() save: EventEmitter<{}> = new EventEmitter<{}>();

  constructor( private ordersService: OrdersService, private fb: FormBuilder,
              private routesService: RoutesService,
              private usersService: UsersService,
              private shared: SharedService ) {

    this.viewRoutes();
    this.usersService.getCurrentUser()
        .then(result => 
          {
            this.currentUser = result; 
            console.log('user ', result);
            if(!this.isAdmin()){
              this.order.user = result.id
            }
          
          });
        this.showUsers();
   }


  ngOnInit() {
  
  }

  isAdmin(){
    return this.shared.getCallback();
   }

  addOrder(order){
    this.ordersService.addOrder(order);
  }
  closeModal(){
    this.selectedd = false;
    this.onClose.emit(this.selectedd);
  }


  onSave(event, order){
    this.save.emit(this.order);
    this.closeModal();
    event.preventDefault();
    console.log('zamowienie wyszlo z new order ', order)
    console.log('cale zamowieni zbindowane ', this.order)
  }
  
  viewRoutes(){
    this.routesService.getRoutes()
    .then(data =>
      {
       this.routes = data;
       console.log(data);
      }
    )
  }

  showUsers(){
    this.usersService.getUsers()
        .then( data => this.users = data);
    }

  currentCost(){
      this.kayakCost = 0;
      this.routesService.getRouteDetails(this.order.route)
        .then( data => {
          this.routeCost = data.price;
          this.order.price = this.kayakCost + this.routeCost;
        });      

      for(var kaayk in this.order.kayaks){
        this.kayaks.forEach( kayak => {
          if(kayak.id == kaayk){
            this.kayakCost += kayak.price * this.order.kayaks[kaayk];
          }
        })
      }

    this.order.price = this.kayakCost + this.routeCost

  }

  

}
