import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartType, ChartOptions } from 'chart.js';
import { Label, Colors } from 'ng2-charts';


@Component({
  selector: 'app-smallcharthree',
  templateUrl: './smallcharthree.component.html',
  styleUrls: ['./smallcharthree.component.scss']
})
export class SmallcharthreeComponent implements OnInit {
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
      backgroundColor: 'rgba(247, 53, 99, 0.3)',
      borderColor: '#f73563 ',
      pointBackgroundColor: '#ffffff',
      pointBorderColor: '#f73563 ',
      pointHoverBackgroundColor: '#f73563 ',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)',
      borderWidth: 1,
    },
  ];
  areaChartData: ChartDataSets[] = [
    { data: [65, 26, 50, 40, 70], label: 'Quarterly Result',radius: 1, }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
