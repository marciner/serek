import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-kayaks-manual',
  templateUrl: './kayaks-manual.component.html',
  styleUrls: ['./kayaks-manual.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class KayaksManualComponent implements OnInit {
  @Input() admin:boolean;
  constructor() { }

  ngOnInit() {
  }

}
