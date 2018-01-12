import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-earned-money-chart',
  templateUrl: './earned-money-chart.component.html',
  styleUrls: ['./earned-money-chart.component.css']
})
export class EarnedMoneyChartComponent implements OnInit {
  @Input() orders;

    //
    public lineChartData:Array<any> = [
      {data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], label: 'Przychody'},
       {data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], label: 'Przychody z odwolanych rezerwacji'},
    ];
    //hardcoded labels
    public lineChartLabels:Array<any> = [
      'Styczeń', 'Luty', 'Marzec', 'kwiecień', 'Maj', 'Czerwiec', 
      'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'];
    public lineChartOptions:any = {
      responsive: true
    };

    //to further assign to lineChartData
    public amountChartData: Array<number> = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    public amountCanceledChartData: Array<number> = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    //line colors
    public lineChartColors:Array<any> = [
      { 
        backgroundColor: 'rgba(148,159,177,0.2)',
        borderColor: 'rgba(148,159,177,1)',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)'
      },
      { 
        backgroundColor: 'rgba(77,83,96,0.2)',
        borderColor: 'rgba(77,83,96,1)',
        pointBackgroundColor: 'rgba(77,83,96,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(77,83,96,1)'
      }

    ];
    public lineChartLegend:boolean = true;
    public lineChartType:string = 'line';

  constructor() { }

  ngOnInit() {
  }

  findRegistrationYears(orders){
    //get current yaer
    let currentYear = new Date().getFullYear().toString()
    
       orders.forEach(order => {
        //get orders date
        let orderDate = order.reservationDate;
        let reservationYear = orderDate.split('T')[0].split('-')[0];
        let reservationMonth = parseInt(orderDate.split('T')[0].split('-')[1]);
        //want orders from current year only
        if(reservationYear == currentYear){
          //get only done orders
          if(order.status == 'Wykonana'){
            this.amountChartData[reservationMonth-1] += order.price;
          }else if(order.status == 'Odwolana'){//get canceled reservation to see how much money is lost
            this.amountCanceledChartData[reservationMonth-1] += order.price;
          }
        }
       })
     }

     generateChart(){
      this.findRegistrationYears(this.orders);
      console.log('przychody, ', this.amountChartData, ' i odwolane ', this.amountCanceledChartData)
      //ssigned needed to generate chart
      this.lineChartData = [
        {data: this.amountChartData, label: 'Przychody'},
        {data: this.amountCanceledChartData, label: 'Przychody z odwolanych rezerwacji'}
      ];
    }

}
