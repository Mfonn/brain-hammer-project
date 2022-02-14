import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const footerhide:any = document.getElementsByTagName('app-footerinfo')[0];
    footerhide.remove()
  }

  

}
