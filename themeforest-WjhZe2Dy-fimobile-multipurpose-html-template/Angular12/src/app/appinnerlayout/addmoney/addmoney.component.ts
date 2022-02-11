import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addmoney',
  templateUrl: './addmoney.component.html',
  styleUrls: ['./addmoney.component.scss']
})
export class AddmoneyComponent implements OnInit {
  public isVisited = false;
  checkVisited(){
    this.isVisited = !this.isVisited;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
