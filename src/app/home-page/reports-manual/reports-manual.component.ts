import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-reports-manual',
  templateUrl: './reports-manual.component.html',
  styleUrls: ['./reports-manual.component.css']
})
export class ReportsManualComponent implements OnInit {
  @Input() admin:boolean;
  constructor() { }

  ngOnInit() {
  }

}
