import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-km-on-kayak',
  templateUrl: './km-on-kayak.component.html',
  styleUrls: ['./km-on-kayak.component.css']
})
export class KmOnKayakComponent implements OnInit {
  @Input() kmsOnKayak;
  constructor() { }

  ngOnInit() {
  }

}
