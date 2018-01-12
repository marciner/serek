import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { SharedService } from '../services/shared.service';
import { NewOrderComponent } from  '../new-order/new-order.component';
import { OrdersService } from '../services/orders.service';
import { KayakService } from '../services/kayaks.service';
import { UsersService } from '../services/users.service';
import { RoutesService } from '../services/routes.service';
import { AllOrdersComponent } from '../all-orders/all-orders.component'

@Component({
  selector: 'app-orders-page',
  templateUrl: './orders-page.component.html',
  styleUrls: ['./orders-page.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class OrdersPageComponent implements OnInit {

  @ViewChild('allOrders')
  private child: AllOrdersComponent

  currentUser: any;
  selected: boolean;
  header: string;
  order  = {
    'id': null,
    'user': null,
    'route': null,
    'reservationDate': null,
    'kayaks': {},
    'time': null,
    'comments': null,
    'price': null,
    'status': 'Nowa'
  };
  orders;
  kayaks;
  success;
  error;



  constructor(private shared: SharedService, private ordersService: OrdersService, 
    private kayakService: KayakService, private usersService: UsersService,
    private routesService: RoutesService ) {
    this.viewKayaks();

  }

  ngOnInit() {

  }


  isAdmin(){
    return this.shared.getCallback();
 
   }


   edit(e){
    console.log('odebrano rezerwacje z orders page ',  e.order)
     this.selected = e.edited;
     this.ordersService.getOneOrder(e.order)
      .then(response => {
        this.order = response.json();
        this.order['id'] = e.order;
        console.log('pobrano z bazy jedno zamowienie ', this.order)
      })
     this.header = 'Edytuj Rezerwację'
   }

   openAddOrderModal(){
    this.selected = true;
    this.header = 'Dodaj Rezerwacje';
    this.order = {
      'id': null,
      'user': null,
      'route': null,
      'reservationDate': null,
      'kayaks': {},
      'time': null,
      'comments': null,
      'price': null,
      'status': 'Nowa'
    }
  }

  onEdit(order){
    this.selected = true;
    this.order = order;
    this.header = 'Edytuj Rezerwację';
  }

  onClose(selected){
    this.selected = selected;

  }

  save(order){
    if(order.id !==null){
      console.log('otrzymano zamowienie do edycji w orders page', order)
      this.ordersService.editOrder(order)
      .then(()=>{
        this.success = true;
        this.child.getAllOrders();
      })
      .catch( () => {
        this.error = true;
      });
    }else{
      console.log('otrzymano zamowienie' , order)
      this.ordersService.addOrder(order)
      .then(()=>{

        this.success = true;
        this.child.getAllOrders();
      })
      .catch(()=>this.error = true);
    }

  }



  viewKayaks(){
    this.kayakService.getKayaks()
    .then(data => {
       this.kayaks = data;
       console.log(data);
      //  data.forEach(kayak =>{
      //    this.order.kayaks[kayak.id] = null; 
      //  });
       console.log('zamowienie ', this.order)
        }
    );
  }

  onSuccess(success){
    this.success = success;
  }

  onError(error){
    this.error = error;
  }

}
