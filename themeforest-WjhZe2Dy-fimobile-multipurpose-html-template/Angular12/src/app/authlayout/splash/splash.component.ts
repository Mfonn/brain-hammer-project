import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss']
})
export class SplashComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    setTimeout(function () {
      setTimeout(function () {
        window.location.replace("/landing");
      }, 4000)
    }, 2000)
  }

}
