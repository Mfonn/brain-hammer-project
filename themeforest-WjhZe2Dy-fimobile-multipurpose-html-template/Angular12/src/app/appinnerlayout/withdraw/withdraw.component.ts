import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.scss']
})
export class WithdrawComponent implements OnInit {
  public isVisited = false;
  checkVisited(){
    this.isVisited = !this.isVisited;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
