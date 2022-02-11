import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }
  
  menuclose() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('menu-open');
  }
}
