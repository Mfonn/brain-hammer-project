import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {
  public daterange: any = {};
  public options: any = {
    locale: { format: 'DD-MM-YYYY', direction: 'daterange-center shadow'},
    alwaysShowCalendars: false,
  };
  
  
  public selectedDate(value: any, datepicker?: any) {

    // any object can be passed to the selected event and it will be passed back here
    datepicker.start = value.start;
    datepicker.end = value.end;
 
    // use passed valuable to update state
    this.daterange.start = value.start;
    this.daterange.end = value.end;
    this.daterange.label = value.label;
    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
