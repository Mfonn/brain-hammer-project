import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.scss']
})
export class StyleComponent implements OnInit {

  isChecked: boolean = false;
  isdarkmode: boolean = false;
  isrtl: boolean = false;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {

  }


  stylechange(e: any) {
    let bodyEl = document.getElementsByTagName('body')[0];
    let currentClass: any = bodyEl.getAttribute('data-color');
    bodyEl.classList.remove(currentClass)

    let setstyle = e.target.getAttribute('data-title');
    if (setstyle != '') {
      bodyEl.classList.add(setstyle)
      bodyEl.setAttribute('data-color', setstyle);
    }
  }

  bgchange(e: any) {
    let bodyEl = document.getElementsByTagName('body')[0];
    let currentClass: any = bodyEl.getAttribute('data-bg');
    bodyEl.classList.remove(currentClass)

    let setbg = e.target.getAttribute('data-title');
    if (setbg != '') {
      bodyEl.classList.add(setbg)
      bodyEl.setAttribute('data-bg', setbg);
    }
  }



  modechangedark(e: any) {
    const html = document.getElementsByTagName('html')[0];
    this.isdarkmode = true;
    html.classList.add('dark-mode');
  }

  modechangelight(e: any) {
    const html = document.getElementsByTagName('html')[0];
    this.isdarkmode = false;
    html.classList.remove('dark-mode');
  }

  layoutrtl(e: any) {
    const body = document.getElementsByTagName('body')[0];
    this.isrtl = true;
    body.classList.add('rtl');
  }

  layoutltr(e: any) {
    const body = document.getElementsByTagName('body')[0];
    this.isrtl = false;
    body.classList.remove('rtl');
  }



}
