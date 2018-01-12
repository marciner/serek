import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-orders-manual',
  templateUrl: './orders-manual.component.html',
  styleUrls: ['./orders-manual.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class OrdersManualComponent implements OnInit {
  @Input() admin:boolean;

  constructor() { }

  ngOnInit() {
  }

}
