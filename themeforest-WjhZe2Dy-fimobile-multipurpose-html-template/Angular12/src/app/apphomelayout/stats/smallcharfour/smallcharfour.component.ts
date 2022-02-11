import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartType, ChartOptions } from 'chart.js';
import { Label, Colors } from 'ng2-charts';

@Component({
  selector: 'app-smallcharfour',
  templateUrl: './smallcharfour.component.html',
  styleUrls: ['./smallcharfour.component.scss']
})
export class SmallcharfourComponent implements OnInit {
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
      backgroundColor: 'rgba(255, 189, 23, 0.3)',
      borderColor: '#ffbd17',
      pointBackgroundColor: '#ffffff',
      pointBorderColor: '#ffbd17',
      pointHoverBackgroundColor: '#ffbd17',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)',
      borderWidth: 1,
    },
  ];
  areaChartData: ChartDataSets[] = [
    { data: [45, 37, 60, 70, 46], label: 'Quarterly Result',radius: 1, }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
