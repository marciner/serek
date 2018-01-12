import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-routes-manual',
  templateUrl: './routes-manual.component.html',
  styleUrls: ['./routes-manual.component.css']
})
export class RoutesManualComponent implements OnInit {
  @Input() admin:boolean;
  constructor() { }

  ngOnInit() {
  }

}
