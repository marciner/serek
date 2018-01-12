import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-error-modal',
  templateUrl: './error-modal.component.html',
  styleUrls: ['./error-modal.component.css']
})
export class ErrorModalComponent implements OnInit {
  @Output() onError: EventEmitter<boolean> = new EventEmitter<boolean>();
  error: boolean;
  constructor() { }

  ngOnInit() {
  }
  closeModal(){
    this.error = false;
    this.onError.emit(this.error);
    console.log('kliknieto zmkanij '+ this.error);

  }
}
