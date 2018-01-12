import { Component, OnInit, Input } from '@angular/core';
import { KayakService } from '../../services/kayaks.service';

@Component({
  selector: 'app-kayaks-chart',
  templateUrl: './kayaks-chart.component.html',
  styleUrls: ['./kayaks-chart.component.css']
})
export class KayaksChartComponent implements OnInit {
  @Input() orders;
  @Input() kayaks;
  public allKayaksData:{} = {};
  public kayaksLabels: string[] = [];
  public kayaksData:number[] = [];
  public doughnutChartLabels:string[];
  public doughnutChartData:number[] = [];
  public doughnutChartType:string = 'doughnut';
  //jebac to

  constructor(private kayaksService: KayakService) {}

  ngOnInit() {}

  getKayaksStats(orders){
    let elo: {} = {};



    //loop in each order
    orders.forEach(order => {
      //loop in kayaks in each order
      for (var key in order.kayaks) {
        //get kayak name
        this.kayaksService.getKayak(key)
        .then( data => {
          //if kayak doesnt exist in array - push to array and count 1 rent of this kayak
          if(this.kayaksLabels.indexOf(data.name) <= -1){
            this.kayaksLabels.push(data.name);
            this.kayaksData.push(1);
           }else{//if exists in array iterate kayak rental
            let index = this.kayaksLabels.indexOf(data.name);
            this.kayaksData[index]++;
           }
           
        })  
      }    
      
    })

    return  elo = {labels: this.doughnutChartLabels, data: this.doughnutChartData}

  }

  generateChart(){

    //  this.getKayaksStats(this.orders);
    //needed to load label on click
    let l = this.getKayaksStats(this.orders)
    console.log('l ', l.labels)
    // this.doughnutChartData = this.kayaksData;
    // //to avoid problem with no labels loaded and needed to load data to chart
    // setTimeout(e => {
    //   this.doughnutChartLabels = this.kayaksLabels;
    // }, 0)
    
    
  }

}
