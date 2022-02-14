import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartType, ChartOptions } from 'chart.js';
import { Label, Colors } from 'ng2-charts';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.scss']
})
export class BarchartComponent implements OnInit {

  areaChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      yAxes: [
        {
          display: false,
        }
      ],
      xAxes: [
        {
          gridLines: {
            display: false
          },
          ticks: {
            fontColor: '#999999',
          }
        }
      ]
    }
  };
  areaChartLabels: Label[] = ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7', 'Q8'];
  areaChartType: ChartType = 'line';
  areaChartLegend = false;
  areaChartPlugins = [];
  areaChartColors: Colors[] = [
    { // yellow
      backgroundColor: 'rgba(255, 28, 82, 0.5)',
      borderColor: '#FF1C52',
      pointBackgroundColor: '#ffffff',
      pointBorderColor: '#FF1C52',
      pointHoverBackgroundColor: '#FF1C52',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)',
      borderWidth: 1,
    },
  ];
  areaChartData: ChartDataSets[] = [
    { data: [45, 37, 60, 70, 46, 33, 45, 37], label: 'Quarterly Result' }
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
