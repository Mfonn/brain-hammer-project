import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartType, ChartOptions } from 'chart.js';
import { Label, Colors } from 'ng2-charts';


@Component({
  selector: 'app-smallchartwo',
  templateUrl: './smallchartwo.component.html',
  styleUrls: ['./smallchartwo.component.scss']
})
export class SmallchartwoComponent implements OnInit {
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
          display: false,
        }
      ]
    }
  };
  areaChartLabels: Label[] = ['Q1', 'Q2', 'Q3', 'Q4', 'Q5'];
  areaChartType: ChartType = 'line';
  areaChartLegend = false;
  areaChartPlugins = [];
  areaChartColors: Colors[] = [
    { // yellow
      backgroundColor: 'rgba(60, 99, 226, 0.3)',
      borderColor: '#3c63e2',
      pointBackgroundColor: '#ffffff',
      pointBorderColor: '#3c63e2 ',
      pointHoverBackgroundColor: '#3c63e2 ',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)',
      borderWidth: 1,
    },
  ];
  areaChartData: ChartDataSets[] = [
    { data: [65, 30, 40, 26, 60], label: 'Quarterly Result',radius: 1, }
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
