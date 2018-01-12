import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-new-users-chart',
  templateUrl: './new-users-chart.component.html',
  styleUrls: ['./new-users-chart.component.css']
})
export class NewUsersChartComponent implements OnInit {
  @Input() users;

  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = [];
  public barChartType:string = 'bar';
  public barChartData:any[] = [
    {data: [], label: 'Nowi użytkownicy'}
  ];
  public dataChartArray: number[] = [];

  constructor() {}

  ngOnInit() {}

 findRegistrationYears(users){

   users.forEach(user => {

    if(user.registrationDate !== undefined){
      //to get registration year
      let date = user.registrationDate.split('T')[0].split('-')[0];
      //check if rehistration yer is present in array
      if(this.barChartLabels.indexOf(date) == -1){
        //if no - add date to array
        this.barChartLabels.push(date);
        //and add 1 to another array(connected with yaers array)
        this.dataChartArray[this.barChartLabels.indexOf(user.registrationDate.split('T')[0].split('-')[0])] = 1;

      }else{
        //if yer is present just increment the value
        this.dataChartArray[this.barChartLabels.indexOf(user.registrationDate.split('T')[0].split('-')[0])] += 1;
      }

    }


   })
 }
 
  generateChart(){
    this.findRegistrationYears(this.users);
    this.barChartData = [
      {data: this.dataChartArray, label: 'Nowi uzytkownicy'}
    ];
  }


}
