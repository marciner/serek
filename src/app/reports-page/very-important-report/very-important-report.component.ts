import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-very-important-report',
  templateUrl: './very-important-report.component.html',
  styleUrls: ['./very-important-report.component.css']
})
export class VeryImportantReportComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // Pie
  public pieChartLabels:string[] = [];
  public pieChartData:number[] = [];
  public pieChartType:string = 'pie';
  public pieChartColors:Array<any> = [
    { 
      borderColor: ["rgb(65,99,145)", "rgb(96,59,43)", "rgb(210,164,87)", "rgb(65,99,145)"],
      backgroundColor:["rgb(65,99,145)", "rgb(96,59,43)", "rgb(210,164,87)", "rgb(65,99,145)"] 
    }
  ];

  generateChart(){
    this.pieChartLabels = ['Niebo', 'Ciemna strona piramidy', 'Jasna strona piramidy', 'Niebo'];
    //without setTimeout labels not appear
    setTimeout(e => {
      this.pieChartData =  [230, 70, 200, 300];
    }, 0)
  }

}
