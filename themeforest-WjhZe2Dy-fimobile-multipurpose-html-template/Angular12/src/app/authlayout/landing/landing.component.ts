import { Component, OnInit } from '@angular/core';
import SwiperCore, {
  Autoplay,
  Pagination,
} from 'swiper/core';
SwiperCore.use([Pagination, Autoplay]);

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
 
  constructor() { }

  ngOnInit(): void {

  }

}
