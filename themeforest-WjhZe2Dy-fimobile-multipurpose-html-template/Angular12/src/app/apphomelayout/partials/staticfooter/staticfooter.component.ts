import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-staticfooter',
  templateUrl: './staticfooter.component.html',
  styleUrls: ['./staticfooter.component.scss']
})
export class StaticfooterComponent implements OnInit {
  public isVisited = false;
  constructor() { }

  ngOnInit(): void {
  }

  checkVisited(){
    this.isVisited = !this.isVisited;
  }
}
