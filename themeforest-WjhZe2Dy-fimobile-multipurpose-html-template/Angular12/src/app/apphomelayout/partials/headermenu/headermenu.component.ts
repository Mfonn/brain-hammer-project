import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-headermenu',
  templateUrl: './headermenu.component.html',
  styleUrls: ['./headermenu.component.scss']
})
export class HeadermenuComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {   
  }

  menuopen() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.toggle('menu-open');    
  }

}
