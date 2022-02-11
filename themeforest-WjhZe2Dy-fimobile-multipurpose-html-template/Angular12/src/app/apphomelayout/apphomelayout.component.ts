import { Component, OnInit, HostListener, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-apphomelayout',
  templateUrl: './apphomelayout.component.html',
  styleUrls: ['./apphomelayout.component.scss']
})
export class ApphomelayoutComponent implements OnInit {
  @ViewChild('HeaderEl', { read: ElementRef, static: false }) headerView: ElementRef;
  @ViewChild('mainPage', { read: ElementRef, static: false }) mainPageView: ElementRef;
  @ViewChild('FooterEl', { read: ElementRef, static: false }) footerView: ElementRef;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.renderer.setStyle(this.mainPageView.nativeElement, 'padding-top', (this.headerView.nativeElement.offsetHeight + 10) + 'px');
    this.renderer.setStyle(this.mainPageView.nativeElement, 'padding-bottom', (this.headerView.nativeElement.offsetHeight + 10) + 'px');
    this.renderer.setStyle(this.mainPageView.nativeElement, 'min-height', window.outerHeight+'px');
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    let header = document.getElementsByTagName('app-headermenu')[0];
    let main = document.getElementsByTagName('html')[0];

    if (main.scrollTop > 15) {
      header.classList.add('active');
    } else {
      header.classList.remove('active');
    }
  }

}
