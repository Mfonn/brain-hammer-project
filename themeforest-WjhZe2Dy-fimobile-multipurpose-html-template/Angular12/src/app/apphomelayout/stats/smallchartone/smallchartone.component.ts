import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartType, ChartOptions } from 'chart.js';
import { Label, Colors } from 'ng2-charts';


@Component({
  selector: 'app-smallchartone',
  templateUrl: './smallchartone.component.html',
  styleUrls: ['./smallchartone.component.scss']
})
export class SmallchartoneComponent implements OnInit {
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
      backgroundColor: 'rgba(58, 199, 155, 0.3)',
      borderColor: '#3ac79b',
      pointBackgroundColor: '#ffffff',
      pointBorderColor: '#3ac79b ',
      pointHoverBackgroundColor: '#3ac79b ',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)',
      borderWidth: 1,
    },
  ];
  areaChartData: ChartDataSets[] = [
    { data: [55, 35, 45, 26, 60], label: 'Quarterly Result',radius: 1, }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
