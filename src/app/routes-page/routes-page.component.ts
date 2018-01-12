import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SharedService } from '../services/shared.service';
import { Modal } from 'angular2-modal/plugins/bootstrap';
import { RoutesModalComponent } from '../modals/routes-modal/routes-modal.component';
import { InfoModalComponent } from '../modals/info-modal/info-modal.component';
import { ErrorModalComponent } from '../modals/error-modal/error-modal.component';
import { RoutesService } from '../services/routes.service';





@Component({
  selector: 'app-routes-page',
  templateUrl: './routes-page.component.html',
  styleUrls: ['./routes-page.component.css'],

})

export class RoutesPageComponent implements OnInit {

routes: {};
selected: boolean;
success: boolean;
error: boolean;
route:{} = {
  name: '',
  length: '',
  time: '',
  description: '',
  price: '',
  photo: ''
};
header: string;


  constructor (private routesService: RoutesService, private shared: SharedService, public modal: Modal) {
    this.reload();
  }
  ngOnInit() {

    this.showRoutes();
  }


  private reload(){
    this.routesService.getRoutes()
    .then(routes => this.routes = routes);
  }


  showRoutes(){
    this.routesService.getRoutes()
      .then(data =>
        {
         this.routes = data;
         console.log(data);
        }
      )
  }

  save(route){
    if(route.id){
      this.routesService.editRoute(route)
      .then(()=>{
        this.reload();
        this.success = true;
      })
      .catch(()=>this.error = true);
    }else{
      this.routesService.addRoute(route.name, route.photo, route.length, route.time, route.description, route.price)
      .then(()=>{
        this.reload();
        this.success = true;
      })
      .catch(()=>this.error = true);
    }

  }

    deleteRoute(route){
      this.routesService.removeRoute(route)
      .then(()=>{
        this.reload();
        this.success = true;
      })
      .catch(()=>this.error = true);
    }

    onEdit(route){
      this.openRoutesModal();
      this.route = route;
      this.header = 'Edytuj Trasę';
    }

  openRoutesModal() {
     this.selected = true;
     this.header = 'Dodaj Trasę';
     this.route = {
       name: '',
       length: '',
       time: '',
       description: '',
       price: '',
       photo: ''
     };
   }
  onClose(selected){
    this.selected = selected;
    console.log('odebrano zmienna do rodzica '+ selected)
  }

  onSuccess(success){
    this.success = success;
  }

  onError(error){
    this.error = error;
  }

  isAdmin() {
    return this.shared.getCallback();

  }


}
