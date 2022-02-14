import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sendmoney3',
  templateUrl: './sendmoney3.component.html',
  styleUrls: ['./sendmoney3.component.scss']
})
export class Sendmoney3Component implements OnInit {
  public isVisited = false;
  checkVisited(){
    this.isVisited = !this.isVisited;
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
