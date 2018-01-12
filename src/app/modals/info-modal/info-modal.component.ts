import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-info-modal',
  templateUrl: './info-modal.component.html',
  styleUrls: ['./info-modal.component.css']
})
export class InfoModalComponent implements OnInit {
  @Output() onSuccess: EventEmitter<boolean> = new EventEmitter<boolean>();
  success: boolean;
  constructor() { }

  ngOnInit() {
  }

  closeModal(){
    this.success = false;
    this.onSuccess.emit(this.success);
    console.log('kliknieto zmkanij '+ this.success);

  }
}
