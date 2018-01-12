import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { KayakService } from '../services/kayaks.service';
import { SharedService } from '../services/shared.service';
import { Modal } from 'angular2-modal/plugins/bootstrap';
import { KayaksModalComponent } from '../modals/kayaks-modal/kayaks-modal.component';
import { InfoModalComponent } from '../modals/info-modal/info-modal.component';
import { ErrorModalComponent } from '../modals/error-modal/error-modal.component';



@Component({
  selector: 'app-kayaks-page',
  templateUrl: './kayaks-page.component.html',
  styleUrls: ['./kayaks-page.component.css'],

})

export class KayaksPageComponent implements OnInit {


  kayaks: {};
  selected: boolean;
  success: boolean;
  error: boolean;
  kayak:{} = {
    name: '',
    photo: '',
    capacity: '',
    amount: '',
    description: '',
    price: '',
  };
  header: string;





  constructor(private kayakService: KayakService, private shared: SharedService, public modal: Modal) {
    this.reload();
  }

  ngOnInit() {

    this.showKayaks();
  }


  showKayaks(){
    this.kayakService.getKayaks()
      .then(data => {
         this.kayaks = data;
         console.log(data);
          }
      )
    }

    save(kayak){
      if(kayak.id){
        console.log('kajak z edycji ', kayak)
        this.kayakService.editKayak(kayak)
        .then(()=>{
          this.reload();
          this.success = true;
        })
        .catch(()=>this.error = true);
      }else{
        console.log(' kajak do utworzenia ', kayak)
        this.kayakService.addKayak(kayak.name, kayak.photo, kayak.capacity, kayak.description, kayak.price, kayak.amount)
        .then(()=>{
          this.reload();
          this.success = true;
        })
        .catch(()=>this.error = true);
      }

    }

  private reload(){
    this.kayakService.getKayaks()
    .then(kayaks => this.kayaks = kayaks);
  }

  deleteKayak(kayak){
    this.kayakService.removeKayak(kayak)
    .then(()=>{
      this.reload();
      this.success = true;
    })
    .catch(()=>this.error = true);
  }

  onEdit(kayak){
    this.selected = true;
    this.kayak = kayak;
    this.header = 'Edytuj Kayak';
    console.log('kaajk gdy otwieramy edycje ', kayak)
  }

  openKayaksModal() {
   this.selected = true;
   this.header = 'Dodaj Kajak';
   this.kayak = {
     name: '',
     photo: '',
     capacity: '',
     amount: '',
     description: '',
     price: '',
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

 isAdmin(){
  return this.shared.getCallback();

 }


}
