import { Component, OnInit, Output,Input, EventEmitter } from '@angular/core';
import { OrdersService } from '../services/orders.service';
import { SharedService } from '../services/shared.service';
import { UsersService } from '../services/users.service';
import { RoutesService } from '../services/routes.service';
import { KayakService } from '../services/kayaks.service';

@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.css']
})
export class AllOrdersComponent implements OnInit {

  selected: boolean = false;
  order;
  @Input() kayaks;
  orders: any[] = [];
  @Output() onEdit: EventEmitter<{}> = new EventEmitter<{}>();
  @Output() edit: EventEmitter<{}> = new EventEmitter<{}>();
  p: number = 1;
  sort: string = 'reservationDate';
  status_1: string = '';
  status_2: string = '';
  reservedKayaks: any[] = [];
  sumOfReservedKayaks = {};
  dateSelected: boolean = false;
  kayaksAmmountArray:{} = {};
  currentUser: {} = {};



  constructor(private ordersService: OrdersService, private shared: SharedService, 
    private usersService: UsersService, private routesService: RoutesService,
    private kayaksService: KayakService ) { 
    this.usersService.getCurrentUser()
    .then(result => this.currentUser = result); 
    this.getAllOrders();
  }

  ngOnInit() {

  }

  isAdmin(){
    return this.shared.getCallback();
    
   }
   notifyMe() {
    console.log('Event Fired');
  }

  getAllOrders(){
    this.ordersService.getAllOrders()
      .then(data => {      
       data.map( order =>{
        for (let kayak in order.kayaks){
          console.log('wyliczony kajak ', kayak)
          this.kayaksService.getKayak(kayak).then(data =>{
            order.kayaks[kayak] = {'details': data, 'amount': order.kayaks[kayak]};
          });
        }

        this.usersService.getUsersDetails(order.user)
          .then(data => 
            {
              // order.user['id']= order.user; zrobic cos z tym id
              order.user = data;
            });//dziala!!! ale brakuje tu id
        this.routesService.getRouteDetails(order.route).then(data => order.route = data);
       });
       console.log('allOrders w all orders page ', data)
       if(this.isAdmin()){
        this.orders = data;
       }else{
         console.log('nie jestes adminem i nie ma zamowien id' , this.currentUser['id']);
         let i = 0;
         data.forEach(order => {
           if(order.user == this.currentUser['id']){
             this.orders[i] = order;
             i++;
           }
         })
       };
       data.sort((a, b) => {
        console.log('sortuje sie');
        return  +new Date(b.reservationDate) - +new Date(a.reservationDate);

      });
     }
    )

 }

  changeStatus(event, order, status){
    event.preventDefault();
    this.ordersService.changeOrderStatus(order, status)
    .then(data => this.getAllOrders());
    

  }
  editOrder(event, order){
    event.preventDefault();
    this.selected = true;
    this.order = order;
    this.edit.emit({edited: true, order: order});
    console.log('wyslano id order do edycji ', order)


  }

  onClose(selected){
    this.selected = selected;
  }

  save(order){
    console.log('otzrymanowzamowienie w all orders i przeslano je dalej', order);
    this.onEdit.emit(this.order);
    console.log('zamowienie po emicie z all orders', order);
  }

  showOrdersByStatus(event, status_1, status_2){
    event.preventDefault();

    this.status_1 = status_1;
    this.status_2 = status_2;
  }


selectOrdersByDate(date?){
  //to reset kaayaks values
  this.reservedKayaks = [];
  this.sumOfReservedKayaks = {};

  this.dateSelected = true;
 
  if(date){
    console.log('wybrana data ', date)
  }else{
    date = new Date().toISOString().split('T')[0];
    console.log('dzisiejsza data', date);
  }

  this.orders.forEach(order => {
    
    if(order.reservationDate == date && order.status == 'Nowa'){
      order['date'] = false; 
      this.reservedKayaks.push(order.kayaks)
      console.log('tablicy z kajakimi zarezerwowanymi ', this.reservedKayaks)
      
    }else{
      order['date'] = true; 
      console.log('w wybranej dacie nie ma zadnych zamowien', this.reservedKayaks)
    }
    
  });

  for(var i = 0; i< this.kayaks.length; i++){
    this.sumOfReservedKayaks[this.kayaks[i].id] = 0;
    console.log('nie ma kajakow', this.kayaks[i].id)
  }

  if(this.reservedKayaks.length !== 0){
    this.reservedKayaks.forEach(order =>{
      console.log('reseved kayaks ', order)
      for(var kayak in order){
         this.sumOfReservedKayaks[kayak] += order[kayak].amount
      }
    })
  }




}





}
