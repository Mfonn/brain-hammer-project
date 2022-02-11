import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sendmoney2',
  templateUrl: './sendmoney2.component.html',
  styleUrls: ['./sendmoney2.component.scss']
})
export class Sendmoney2Component implements OnInit {
  public isVisited = false;
  checkVisited(){
    this.isVisited = !this.isVisited;
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
