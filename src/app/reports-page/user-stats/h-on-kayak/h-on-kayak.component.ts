import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-h-on-kayak',
  templateUrl: './h-on-kayak.component.html',
  styleUrls: ['./h-on-kayak.component.css']
})
export class HOnKayakComponent implements OnInit {
  @Input() hoursOnKayak;
  constructor() { }

  ngOnInit() {
  }

}
