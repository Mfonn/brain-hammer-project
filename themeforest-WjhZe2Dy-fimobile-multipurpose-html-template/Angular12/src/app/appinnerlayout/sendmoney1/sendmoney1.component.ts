import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sendmoney1',
  templateUrl: './sendmoney1.component.html',
  styleUrls: ['./sendmoney1.component.scss']
})
export class Sendmoney1Component implements OnInit {   
  public isVisited = false;
  checkVisited(){
    this.isVisited = !this.isVisited;
  }
  
  ngOnInit(): void {
    let pagetitle = document.getElementsByTagName('h5')[0];
    pagetitle.innerHTML = "Send Money";    
  }

  
}
