import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-orders-chart',
  templateUrl: './orders-chart.component.html',
  styleUrls: ['./orders-chart.component.css']
})
export class OrdersChartComponent implements OnInit {
  @Input() orders;
  constructor() { }

  ngOnInit() {
  }


  public polarAreaChartLabels:string[] = ['Wykonane', 'Odwolane'];
  public polarAreaChartData:number[] = [0, 0];
  public polarAreaLegend:boolean = true;
  public orderStats: number[] = [0,0]
 
  public polarAreaChartType:string = 'polarArea';
 


  getOrdersStats(orders){
    orders.forEach(order => {
      if(order.status == 'Wykonana'){
        this.orderStats[0]++;
      }else if(order.status == 'Odwolana'){
        this.orderStats[1]++
      }else{
        console.log('reszta do kosza')
      }
    })
  }

  generateChart(){
    this.getOrdersStats(this.orders);
    this.polarAreaChartData = this.orderStats;
  }

}
